import React from "react";
import "./App.css";
function App() {
  document.body.className="morning"
  return (
    <div >
      <ul id="background" className="background"></ul>
      <div className="background-overlay"></div>
      <div className="apps">
        <div className="top-row">
          <div id="quicklinks"></div>
          <span id="favlinks">Links</span>
        </div>

        <div id="inputbox" className="inputlink">
          <p className="slinkinput">
            <a href="https://www.google.com">
              <img src="https://www.google.com/s2/favicons?domain=https://www.google.com" />
              <button type="submit" className="chromelink">
                Chrome Tab
              </button>
            </a>
          </p>
          <div id="savedlinks" className="slinkinput"></div>
          <p id="newlinks" className="slinkinput">
            New Link
          </p>

          <form className="linkinputs">
            <input
              id="linkname"
              name="linkname"
              type="text"
              placeholder="Name"
              autoComplete="off"
            />
            <span id="nevermind">x</span>
            <br />
            <input
              type="url"
              id="linkurl"
              name="linkurl"
              placeholder="URL"
              autoComplete="off"
            />
            <button type="submit" id="submitlink">
              ADD
            </button>
          </form>
        </div>

        <div className="top-right"></div>

        <div className="center">
          <div className="app-container clock" id="clockc">
            <div className="milc" id="default-clock"></div>
            <div className="rc" id="clockrc"></div>
            <div className="remove" id="ampm"></div>
          </div>

          <div id="greeting" className="app-container greeting transition">
            Good <span className="period"></span>,
            <span className="name" spellCheck="false">
              CJ
            </span>
            .
          </div>
        </div>
      </div>
      
    <div className="center-below">
        <div className="prompt">
            <h3>What is your main focus for today?</h3>
            <input type="text" id="focus"/>
        </div>
    </div>
    <div className="bottom-right todo" id="todoright">
        <div className="todoheader">
            <div className="todoheaderleft">
                <h1>Today</h1>
            </div>
            <div className="todoheaderright"><button className="options"><i className="fas fa-ellipsis-h"></i></button></div>
        </div>
        <div className="todogreeting">
            <h2>Add a todo to get started</h2>
        </div>
        <div className="todonew">
            <span id="newtodobutton" className="newtodo">New Todo</span>
        </div>
        <div className="contenttodo" id="content">

        </div>
        <input type="text" className="form-control" id="toDoInput" placeholder="New Todo"/>
        <button type="submit" className="button main submit" id="enterData"><i className="fas fa-share"></i></button>
    </div>
    <div id="todo" className="todoicon"><span className="to do icon" id="todospan">Todo</span></div>
    <div className="bottom"></div>
    <div className="quote-container quote-body" >
        <span className="quote-text quote-source" ></span>
    </div>
    </div>
  );
}

export default App;
