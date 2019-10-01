import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header__logo">
          <p className="header__logo-text">List</p>
          <img
            src="https://i.ibb.co/qsyyV77/Oval.png"
            className="header__logo-oval"
            alt=""
          />
          <img
            src="https://i.ibb.co/PQSz1WS/menu.png"
            className="header__logo-menu"
          />
        </div>
        <nav>
          <div className="topnav">
            <a href="">
              <img
                src="https://i.ibb.co/x6GsR47/025-mail.png"
                className="topnav-link topnav-mail"
              />
            </a>
            <a href="">
              <img
                src="https://i.ibb.co/rQgmkCN/notif.png"
                className="topnav-link topnav-notifications"
              />
            </a>
            <a href="">
              <img
                src="https://i.ibb.co/whLXx49/009-four.png"
                className="topnav-link topnav-four"
              />
            </a>
            <div className="topnav-dropdown">
              <a href="" className="topnav-link topnav-dropdown-arrow">
                <img src="https://i.ibb.co/GkmQ69H/down.png" />
              </a>
              <span className="topnav-dropdown-text">Luke Brown</span>
              <a href="" className="topnav-avatar">
                <img src="https://i.ibb.co/ynmPHYW/avatar.png" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
      <footer>
        <div className="footer-nav">
          <a href="" className="footer-nav-link">
            Support
          </a>
          <a href="" className="footer-nav-link">
            Help Center
          </a>
          <a href="" className="footer-nav-link">
            Privacy
          </a>
          <a href="" className="footer-nav-link">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
