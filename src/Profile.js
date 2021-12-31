import React, { useState } from "react";

import axios from "axios";
import { IoLocationSharp, IoSchoolSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";

export default function Profile() {
  const [user_data, get_data] = useState("");
  const [pre, get_url] = useState("");
  const [exp, get_exp] = useState("");

  const [edu, get_edu] = useState("");
  const [log, get_logo] = useState("");

  axios
    .post("https://api.meetworks.in/users/get_unique_jobseeker_profile", {
      jobseeker_id: "614b410c2c4b197356a37f18",
    })
    .then(function (response) {
      console.log(response);
      get_url(response.data[0].user_image_url);
      get_data(response.data[0]);
      get_exp(response.data[0].user_experiences);
      get_edu(response.data[0].user_qualifications[0]);
      get_logo(response.data[0].user_experiences[0]);
    });

  return (
    <>
      <div className="card_adjust  article-container ">
        <div className="article1">
          <img className="image_adjust" src={pre} />
        </div>
        <div className="article2 scroll">
          <div>
            <p className="font_siz">
              <span className="font_dec">{user_data.jobseeker_name} </span>{" "}
              <span className="dash">|</span>
              <IoLocationSharp className="iconify "></IoLocationSharp>
              {user_data.area},{user_data.city}{" "}
            </p>
            <p className="colorify">
              <FaBriefcase className="iconify"></FaBriefcase> EXPERIENCE{" "}
              <button type="button" className=" btn_dec">
                {exp.length} yrs Exp
              </button>
            </p>
            <img className="logo_adjust" src={log.company_logo} />{" "}
            {log.user_post}
            <div>
              <div className="mr_left">
                <p />
                {log.company_name}

                <p className="date">
                  {log.company_starting_date} <span className="icon"> to</span>{" "}
                  {log.company_ending_date}
                </p>
                <p> {log.role_discription} </p>
              </div>
            </div>
          </div>

          <div>
            <p className="colorify">
              <IoSchoolSharp className="iconify"></IoSchoolSharp>EDUCATION
            </p>
            <div className="mr_left">
              <p className="font_dec ">
                {edu.course_type}- {edu.course_name}
              </p>
              <p>
                {" "}
                {edu.user_college} | {edu.user_passing_year}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className=" bottomDiv btn_share " type="submit">
        <BsShareFill className="mr_right"></BsShareFill>Share
      </button>
    </>
  );
}
