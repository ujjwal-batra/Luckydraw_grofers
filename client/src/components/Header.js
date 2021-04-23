import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div>
        <header className="headerContainer">
          <div className="heading">
            <span>
              <a className="techvault" hreaf="#">
                LuckyDraw Game
              </a>
            </span>
          </div>
          <div className="headerLinks">
            <span className="loginButtonHeader">
              <span>
                <Link className="loginButton" to="/purchase">
                  Purchase
                </Link>
              </span>
              <span>
                {/* <a className="loginButton" href="#">
                  /Register
                </a> */}
              </span>
            </span>
          </div>
        </header>
      </div>
    );
  };
  
  export default Header;