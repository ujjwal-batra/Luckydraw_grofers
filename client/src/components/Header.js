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
                <a className="loginButton" href="#">
                  LogIn
                </a>
              </span>
              <span>
                <a className="loginButton" href="#">
                  /Register
                </a>
              </span>
            </span>
          </div>
        </header>
      </div>
    );
  };
  
  export default Header;