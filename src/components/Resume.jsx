import React, { useState } from "react";
import style from "../style/Resume.module.css";
import { Link, Element } from "react-scroll";

function Resume() {
  const [educationOrSkill, setEducationOrSkill] = useState(false);
  return (
    <Element
      name="resume"
      id="resume"
      style={{ padding: "10px", paddingTop: "120px" }}
      className={style.resume_container_div}
    >
      <div className={style.resume_sec_header_div}>
        <p className={style.resume_section_heading}>EDUCATIONAL BACKGROUND</p>
        <h1 className={style.resume_sec_head}>My Resume</h1>
      </div>
      <div>
        <div className={style.rs_sec_btn_div}>
          <button
            onClick={() => setEducationOrSkill(false)}
            className={style.resume_sec_btn}
          >
            Professional Skills
          </button>
          <button
            onClick={() => setEducationOrSkill(true)}
            className={style.resume_sec_btn}
          >
            Education
          </button>
        </div>

        {/* Skills section*/}
        <div style={{ display: educationOrSkill ? "block" : "none" }}>
          <h1 className={style.resume_sec_head1}>Education Quality</h1>
          <div className={style.resume_edu_card_container}>
            {/* Education_Card_1 */}
            <div className={style.resume_card}>
              <div className={style.resume_card_img}>
                <img src="https://www.yourlegalcareercoach.com/wp-content/uploads/2022/02/channels4_profile.jpg" />
              </div>
              <div className={style.card_edu_info}>
                <h4>Trained as Front-end Developer</h4>
                <hr className={style.horizontal_line} />
                <p>FunctionUp (Feb/2023 - June/2023)</p>
              </div>
            </div>

            {/* Education_Card_2 */}
            <div className={style.resume_card}>
              <div className={style.resume_card_img}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/MCU_logo.svg/1200px-MCU_logo.svg.png" />
              </div>
              <div className={style.card_edu_info}>
                <h4>
                  B. C. A. <span className={style.edu_card_grad}>8.58/10</span>
                </h4>
                <hr className={style.horizontal_line} />
                <p>
                  MAKHANLAL CHATURVEDI NATIONAL UNIVERSITY OF JOURNALISM &
                  COMMUNICATION (2018 - 2021){" "}
                </p>
              </div>
            </div>

            {/* Education_Card_3 */}
            <div className={style.resume_card}>
              <div className={style.resume_card_img}>
                <img src="https://pbs.twimg.com/profile_images/1626848996416446468/1ZcFoLD5_400x400.jpg" />
              </div>
              <div className={style.card_edu_info}>
                <h4>
                  Intermediate{" "}
                  <span className={style.edu_card_grad}>60.4%</span>
                </h4>
                <hr className={style.horizontal_line} />
                <p>SARASWATI INTER COLLEGE - ATARRA (BANDA) (2016 - 2017) </p>
              </div>
            </div>

            {/* Education_Card_4 */}
            <div className={style.resume_card}>
              <div className={style.resume_card_img}>
                <img src="https://pbs.twimg.com/profile_images/1626848996416446468/1ZcFoLD5_400x400.jpg" />
              </div>
              <div className={style.card_edu_info}>
                <h4>
                  High School{" "}
                  <span className={style.edu_card_grad}>66.67%</span>
                </h4>
                <hr className={style.horizontal_line} />
                <p>SARASWATI INTER COLLEGE - ATARRA (BANDA) (2014 - 2015) </p>
              </div>
            </div>
          </div>
        </div>
        <p className={style.resume_skills_heading}>FEATURES</p>
        <h1 className={style.resume_skills_head_line}>Development Skills</h1>
        <div className={style.resume_skills_progress_container}>
          {/* Skill section 1 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>HTML</h6>
            <div className={style.progress}>
              <div className={style.progress_bar}></div>
              <span className={style.percent_label}>95%</span>
            </div>
          </div>
          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>JAVASCRIPT</h6>
            <div className={style.progress}>
              <div className={`${style.progress_bar} ${style.js_bar}`}></div>
              <span className={style.percent_label}>85%</span>
            </div>
          </div>
          {/* Skill_JS section 3 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>CSS</h6>
            <div className={style.progress}>
              <div className={`${style.progress_bar} ${style.css_bar}`}></div>
              <span className={style.percent_label}>80%</span>
            </div>
          </div>
          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>ReactJS</h6>
            <div className={style.progress}>
              <div
                className={`${style.progress_bar} ${style.reactjs_bar}`}
              ></div>
              <span className={style.percent_label}>99%</span>
            </div>
          </div>
          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>Bootstrap</h6>
            <div className={style.progress}>
              <div
                className={`${style.progress_bar} ${style.bootstrap_bar}`}
              ></div>
              <span className={style.percent_label}>75%</span>
            </div>
          </div>
          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>JQuery</h6>
            <div className={style.progress}>
              <div
                className={`${style.progress_bar} ${style.jquery_bar}`}
              ></div>
              <span className={style.percent_label}>75%</span>
            </div>
          </div>
          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>Redux</h6>
            <div className={style.progress}>
              <div className={`${style.progress_bar} ${style.redux_bar}`}></div>
              <span className={style.percent_label}>80%%</span>
            </div>
          </div>
          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>ExpressJS</h6>
            <div className={style.progress}>
              <div
                className={`${style.progress_bar} ${style.expressJS_bar}`}
              ></div>
              <span className={style.percent_label}>70%</span>
            </div>
          </div>

          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>MongoDB</h6>
            <div className={style.progress}>
              <div
                className={`${style.progress_bar} ${style.mongodb_bar}`}
              ></div>
              <span className={style.percent_label}>70%</span>
            </div>
          </div>

          {/* Skill_JS section 2 */}
          <div className={style.progress_chart}>
            <h6 className={style.skill_sec_heading6}>Oops</h6>
            <div className={style.progress}>
              <div className={`${style.progress_bar} ${style.oops_bar}`}></div>
              <span className={style.percent_label}>90%</span>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Resume;
