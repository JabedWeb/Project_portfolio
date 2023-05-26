import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
// import TotalTimer from "../components/Sidebar/TotalTimer";
// import { getData } from "../utility/getData";
import { toaster } from "../utility/toster";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  // handleMarkAsRead
  const [time, setTime] = useState(0);
  //  state for bookmarked data
  const [posts, setPosts] = useState([]);

  // state for all data on loading
  const [blogs, setBlogs] = useState([]);

  // handle bookmark calculation and storage data
  const handleReadTime = (id) => {
    // get data from localStorage
    const data = localStorage.getItem("storedData");
    // find a data from loaded data with id
    let post = blogs.find((data) => data.id === id);
    // define empty array for mutation
    let newArray = [];
    // checking if localstorage has storedData key
    if (!data) {
      // pushing found post by id to the empty array
      newArray.push(post);
      // updating bookmarked State
      setPosts(newArray);
      // sending data to localstorage
      let stingify = JSON.stringify(newArray);
      localStorage.setItem("storedData", stingify);
    } else {
      // parsing data from locaStorage
      let items = JSON.parse(data);
      // check if the post is already in the local storage or not
      let check = items.find((item) => item.post_title === post.post_title);

      if (check) {
        // showing alert if post already marked
        return toaster();
      } else {
        // passing all stored data to empty array
        newArray = [...items];
        // pushing new marked data
        newArray.push(post);
        // updating marked state
        setPosts(newArray);
        // sending updated marked data to storage
        let stingify = JSON.stringify(newArray);
        localStorage.setItem("storedData", stingify);
      }
    }
  };

  //  handle Mark read passing event and timer as arguments
  const handleMarkAsRead = (e, timer) => {
    e.preventDefault();
    // get timer from localstorage
    let storage = localStorage.getItem("timer");
    // checking timer key on locaStorage
    if (!storage) {
      // if not then sending time to storage
      localStorage.setItem("timer", JSON.stringify(timer));
    } else {
      // parsing old data
      let time = JSON.parse(storage);
      // concating old data and new data
      let newTime = time + timer;
      // sending new data
      localStorage.setItem("timer", JSON.stringify(newTime));
      setTime(newTime);
    }
  };

  // fetch updated Mark data and update state on load
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("storedData"));
    if (!storage) {
      return  setPosts([])
    }
    setPosts(storage);
  }, [posts]);

  // fetch updated Mark as read Time
  useEffect(() => {
    let storage = localStorage.getItem("timer");
    if (!storage) {
      localStorage.setItem("timer", JSON.stringify(0));
      return setTime(0);
    }
    setTime(storage);
  }, [time]);
  // Fetch all data on load
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);



  return (
    <>
      <Header showHide = {{showModal, setShowModal}}/>

      {/* Body part */}
      <section className="body-part">
        <div className="container">
          <div className="row">
            
            <div className="col-sm-12 col-md-8 py-3">
              {blogs &&
                blogs.map((data, index) => {
                  return (
                    <Card
                      data={data}
                      handleTime={handleMarkAsRead}
                      handle={handleReadTime}
                      key={data.id}
                    />
                  );
                })}
            </div>
            <div className="col-sm-12 col-md-4 py-3">

              <Sidebar
                setItems={{ setTime, setPosts, posts }}
                time={time}
                blog={posts}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Questioon and answer Modal */}\
      {
        showModal && <Modal showHide = {{showModal, setShowModal}}/>
      }
    </>
  );
};

export default Home;
