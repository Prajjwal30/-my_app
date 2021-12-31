import React from "react";
import { FaCompass } from "react-icons/fa";
import { MdOutlinePeople, MdSupportAgent } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border_bottom-2px-solid  ">
      <div className="container-fluid navbar-inner nav_style nav_dec">
        <div>
          <img className="ico" src="log.webp"></img>
        </div>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto list_dec">
            <li className="nav-item hov">
              <ul type="None">
                <li className="nav-item text-center ">
                  {" "}
                  <FaCompass></FaCompass>{" "}
                </li>
                <li className="text_dec">
                  <a
                    className="nav-link active "
                    aria-current="page"
                    href="/"
                  ></a>
                  Discovery
                </li>
              </ul>
            </li>
            <li className="nav-item hov">
              <ul type="None">
                <li className="nav-item text-center ">
                  {" "}
                  <MdOutlinePeople></MdOutlinePeople>
                </li>
                <li>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  ></a>
                  Invite
                </li>
              </ul>
            </li>
            <li className="nav-item hov">
              <ul type="None">
                <li className="nav-item text-center">
                  {" "}
                  <MdSupportAgent></MdSupportAgent>
                </li>
                <li className="text_dec">
                  {" "}
                  <a
                    className="nav-link active "
                    aria-current="page"
                    href="/"
                  ></a>
                  Support
                </li>
              </ul>
            </li>
          </ul>
          <ul type="None" className="navbar-nav">
            <li className="nav-item  ">
              <button className="btn btn-outline-success mx-4" type="submit">
                Post Job
              </button>
            </li>
            <li className="nav-item ">
              <button className="btn btn-success " type="submit">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
