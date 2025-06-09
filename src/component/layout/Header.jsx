import { NavLink } from "react-router-dom";

export const Header = () => {


  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>JenFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movie"
                  className="nav-link"
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};