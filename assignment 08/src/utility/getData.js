export const getData = () => {
  let data = [];

  //get the shopping cart from local storage
  const storedData = localStorage.getItem('storedData');
  if (storedData) {
    data = JSON.parse(storedData);
  }
  return data;
}