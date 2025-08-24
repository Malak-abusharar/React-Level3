import './App.css';

function App() {
  return (
    <>
  <header className="hide-when-mobile">
    <h1>React Course</h1>
    <ul className="flex">
      <li className="main-list">
        <a className="main-link" href="www">
          {" "}
          HTML{" "}
        </a>
        <ul className="sub-ul">
          <li>
            <a href="www">Full Course</a>
          </li>
          <li>
            <a href="www">Crash Course</a>
          </li>
          <li>
            <a href="www">learn in 1h</a>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a className="main-link" href="www">
          {" "}
          CSS{" "}
        </a>
        <ul className="sub-ul">
          <li>
            <a href="www">Full Course</a>
          </li>
          <li>
            <a href="www">CSS Examples</a>
          </li>
          <li className="mini-projects">
            <a href="www">mini projects&nbsp; + </a>
            <ul className="sub-sub-ul">
              <li>
                <a href="www">project 1</a>
              </li>
              <li>
                <a href="www">project 2</a>
              </li>
              <li>
                <a href="www">project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a className="main-link" href="www">
          {" "}
          JavaScript{" "}
        </a>
        <ul className="sub-ul sub-of-js">
          <li>
            <a href="www">coming soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header className="show-when-mobile">
    <h1>React Course</h1>
    <label className="absolute" htmlFor="burger">
      <i className="fas fa-bars" />
    </label>
    <input id="burger" type="checkbox" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html">
          HTML <i className="fas fa-plus" />{" "}
        </label>
        <input id="html" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="www">Full Course</a>
          </li>
          <li>
            <a href="www">Crash Course</a>
          </li>
          <li>
            <a href="www">learn in 1h</a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css">
          CSS <i className="fas fa-plus" />{" "}
        </label>
        <input id="css" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="www">Full Course</a>
          </li>
          <li>
            <a href="www">CSS Examples</a>
          </li>
          <li>
            <label className="mini-projects" htmlFor="mini">
              mini projects <i className="fas fa-plus" />
            </label>
            <input id="mini" type="checkbox" />
            <ul className="sub-sub-div">
              <li>
                <a href="www">project 1</a>
              </li>
              <li>
                <a href="www">project 2</a>
              </li>
              <li>
                <a href="www">project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="js">
          JavaScript <i className="fas fa-plus" />{" "}
        </label>
        <input id="js" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="www">coming soon🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    Responsive Dropdown Menu Bar
    <br />
    Built with HTML &amp; CSS
  </main>
  <footer>
    React Course - Level 1 (session 1)
    <span>🧡</span>
  </footer>
</>

  );
}

export default App;
