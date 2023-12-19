/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import ReactNotificationAlert from "react-notification-alert";
// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import {
  BackgroundColorContext,
  backgroundColors,
} from "contexts/BackgroundColorContext";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  // verifies if routeName is the one active (in browser input)
  const notificationAlertInstance = new ReactNotificationAlert();
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const renderDropdownContent = () => {
    if (isDropdownOpen) {
      // Your dropdown content (welcomeNavLink) goes here
      return (
        <div>
          {/* Your dropdown content */}
          {welcomeNavLink}
        </div>
      );
    }
    return null;
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  const linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  const { routes, rtlActive, logo } = props;
  
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    }
  }
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={'dark'}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            {logoImg !== null || logoText !== null ? (
              <div className="logo">
                {logoImg}
                {logoText}
              </div>
            ) : null}
            <Nav>
              {routes.map((prop, key) => {
                if (prop.redirect) return null;
  
                let welcomeNavLink = null;
  
                switch (prop.name) {
                  // case 'DATA':
                  //   welcomeNavLink = (
                  //     <ul>
                  //       <li>
                  //         <NavLink className="nav-link" to={prop.layout + prop.path}>
                  //           DATA TABLES
                  //         </NavLink>
                  //       </li>
                  //       <li>
                  //         <NavLink to={prop.layout + prop.path}>
                  //           INTEGRATION
                  //         </NavLink>
                  //       </li>
                  //       <li>
                  //         <NavLink to={prop.layout + prop.path}>
                  //           ADD DEVICE
                  //         </NavLink>
                  //       </li>
                  //     </ul>
                  //   );
                  //   break;
                  // case 'SUIT CONNECT':
                  //   welcomeNavLink = (
                  //     <ul>
                  //       <li>
                  //         <NavLink to={prop.layout + prop.path}>
                  //           SUIT BRIDGE
                  //         </NavLink>
                  //       </li>
                  //       <li>
                  //         <NavLink to={prop.layout + prop.path}>
                  //           WIFI
                  //         </NavLink>
                  //       </li>
                  //       <li>
                  //         <NavLink to={prop.layout + prop.path}>
                  //           API
                  //         </NavLink>
                  //       </li>
                  //     </ul>
                  //   );
                  //   break;

                    // case 'SESSION SUMMARY':
                    //   welcomeNavLink = (
                    //     <ul>
                    //       <li>
                    //         <NavLink to={prop.layout + prop.path}>
                    //           SESSION HISTORY
                    //         </NavLink>
                    //       </li>
                    //       <li>
                    //         <NavLink to={prop.layout + prop.path}>
                    //           EXPORT SESSION
                    //         </NavLink>
                    //       </li>
                    //       <li>
                    //         <NavLink to={prop.layout + prop.path}>
                    //           LOAD SESSION
                    //         </NavLink>
                    //       </li>
                    //     </ul>
                    //   );
                    //   break;

                      // case 'USER GUIDE':
                      // welcomeNavLink = (
                      //   <ul>
                      //     <li>
                      //       <NavLink to={prop.layout + prop.path}>
                      //         ARTICLES
                      //       </NavLink>
                      //     </li>
                      //     <li>
                      //       <NavLink to={prop.layout + prop.path}>
                      //         USER INTERFACE
                      //       </NavLink>
                      //     </li>
                      //     <li>
                      //       <NavLink to={prop.layout + prop.path}>
                      //         FUNCTIONS
                      //       </NavLink>
                      //     </li>
                      //   </ul>
                      // );
                      // break;

                      // case 'DOWNLOADS':
                      // welcomeNavLink = (
                      //   <ul>
                      //     <li>
                      //       <NavLink to={prop.layout + prop.path}>
                      //         TOOLS
                      //       </NavLink>
                      //     </li>
                      //     <li>
                      //       <NavLink to={prop.layout + prop.path}>
                      //         DEV GUIDE
                      //       </NavLink>
                      //     </li>
                      //   </ul>
                      // );
                      // break;
                  // Add cases for other menu items similarly
  
                  default:
                    break;
                }
  
                return (
                  <li
                    className={activeRoute(prop.path) + (prop.pro ? ' active' : '')}
                    key={key}
                  >
                    <NavLink
                      style={{ fontSize: 'small' }}
                      to={prop.layout + prop.path}
                      className="nav-link"
                      onClick={() => {
                        props.toggleSidebar();
                        if (prop.notify) {  // Change props.prop.notify to prop.notify
                          prop.notify("tc")
                        }
                      }}
                    >
                      <i className={prop.icon} />
                      <p>{rtlActive ? prop.rtlName : prop.name}</p>
                      {welcomeNavLink && (
                        <span onClick={(e) => { e.preventDefault(); setDropdownOpen(!isDropdownOpen) }}>
                          {isDropdownOpen ? 
                          <div>
                           <i class="down fas fa-angle-down" style={{position:'absolute', top:"10px", left:"173px"}}></i>
                          </div> : <div> <i class="right fas fa-angle-left" style={{position:'absolute', top:"10px", left:"173px"}}></i></div>}
                        </span>
                      )}
                      {isDropdownOpen && welcomeNavLink}
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </div>
      )}
      
    </BackgroundColorContext.Consumer>
  );
}

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string,
  }),
};

export default Sidebar;
