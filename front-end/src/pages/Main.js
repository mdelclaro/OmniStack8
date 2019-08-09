import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src={logo} alt="" />
          <footer>
            <strong>Matheus Del Claro</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda rerum quae inventore qui voluptatibus expedita eveniet,
              dicta reprehenderit voluptatem error aut laborum id a perferendis
              ipsum nulla odio quas porro.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src={logo} alt="" />
          <footer>
            <strong>Matheus Del Claro</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda rerum quae inventore qui voluptatibus expedita eveniet,
              dicta reprehenderit voluptatem error aut laborum id a perferendis
              ipsum nulla odio quas porro.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src={logo} alt="" />
          <footer>
            <strong>Matheus Del Claro</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda rerum quae inventore qui voluptatibus expedita eveniet,
              dicta reprehenderit voluptatem error aut laborum id a perferendis
              ipsum nulla odio quas porro.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src={logo} alt="" />
          <footer>
            <strong>Matheus Del Claro</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda rerum quae inventore qui voluptatibus expedita eveniet,
              dicta reprehenderit voluptatem error aut laborum id a perferendis
              ipsum nulla odio quas porro.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Main;
