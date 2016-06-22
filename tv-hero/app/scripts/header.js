import React from "react";
class Header extends React.Component {
   render() {
      return (
        <div className="row">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo appHeaderLogo">TV Hero</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="#/trending">Trending</a>
                        </li>
                        <li>
                            <a href="#/showCase">Showcase</a>
                        </li>
                        <li>
                            <a href="#/recentUpload">Recent Upload</a>
                        </li>
                        <li>
                            <a className="dropdown-button" href="#!" data-activates="loginMenu">
                                <span>User</span>
                                <i className="material-icons right">arrow_drop_down</i>
                            </a>
                            <ul id="loginMenu" className="dropdown-content" style={{display:"none"}}>
                                <li>
                                    <a href="#!">Log In</a>
                                </li>
                                <li>
                                    <a href="#!">Sign Up</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
               </div>
            </nav>
        </div>
      );
   }
   componentDidMount() {
        $(".dropdown-button").dropdown();
   }
}

export default Header;
