import React from "react";

const Accordion = () => {
  return (
    <div>
      <div className="accordion-wrapper">
        <div className="row">
          <div className="col">
            <h4 className="text-center py-3">Question & Answers</h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      When should you use context API?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <code>
                        Here are some scenarios where you might consider using
                        the Context API: Managing global state: If you have data
                        or state that needs to be shared across multiple
                        components in your application, such as user
                        authentication status, theme settings, or language
                        preference, the Context API can be used to manage that
                        global state in a centralized location. Avoiding prop
                        drilling: If you find yourself passing down props
                        through multiple levels of components just to make the
                        data available to a deeply nested child component, the
                        Context API can help eliminate prop drilling by allowing
                        you to directly access the shared data from any
                        component within the context.
                      </code>{" "}
                      I
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is a custom hook?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <cose>A custom hook is a way to reuse stateful logic in functional components in React. It is a JavaScript function that follows certain conventions and can be used to encapsulate reusable logic that can be shared across multiple components. Custom hooks allow you to extract and reuse stateful logic without having to resort to higher-order components (HOCs), render props, or other patterns.</cose>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is useRef?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <code>In React, useRef is a hook that provides a way to create and access a mutable reference to a value or a DOM element within a functional component. The useRef hook is commonly used for accessing and manipulating DOM elements directly, managing focus, or storing mutable values that do not trigger re-renders in React components.</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                     What is useMemo?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <code>useMemo is a hook in React that allows you to memoize the result of a computation or function and only recompute it when the dependencies change. This can help optimize performance in certain scenarios by avoiding unnecessary computations or calculations during component rendering.</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
