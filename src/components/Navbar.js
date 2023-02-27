import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';


//rcc-react class component 
// rcp- react class component with proptype
export default class Navbar extends PureComponent {
  
  render() {
   return  (
    <> 
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News24
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  id="userInput"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  
                  className="btn btn-outline-success"
                  type="submit"
                  category={this.category}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      </>
    );

  }
}
