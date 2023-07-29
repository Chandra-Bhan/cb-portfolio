import React from "react";
import style from "../style/Features.module.css";
import { FiMenu } from "react-icons/fi";
import { PiTelevisionSimple, PiSelectionForegroundBold } from "react-icons/pi";
import { BsBook } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineWifi } from "react-icons/ai";
import { GiSurroundedEye } from "react-icons/gi";
import { SiTestcafe, SiFuturelearn } from "react-icons/si";
import { Link, Element } from "react-scroll";

function Features() {
  return (
    <Element name="features" id="features" style={{ paddingTop: "120px" }}>
      <p className={style.features_heading}>FEATURES</p>
      <h1 className={style.features_head_line}>What I Do</h1>
      <div className={style.fcards_container}>
        {/* //Card 1 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <FiMenu className={style.fcard_icon} />

            <h3>Web Design Implementation</h3>
            <p>
              I take web design files (usually in the form of PSDs, Sketch, or
              Figma designs) created by web designers and convert them into
              functional web pages using HTML, CSS, and JavaScript.
            </p>
          </div>
        </a>
        {/* Card2 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <BsBook className={style.fcard_icon} />

            <h3>HTML/CSS Coding</h3>
            <p>
              I can write clean, semantic, and accessible HTML markup to
              structure the content of a web page. CSS is used to style the HTML
              elements, defining layout, typography, colors, and other visual
              aspects.{" "}
            </p>
          </div>
        </a>
        {/* Card3 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <PiTelevisionSimple className={style.fcard_icon} />

            <h3>Responsive Design</h3>
            <p>
              I ensure that websites are responsive and can adapt to different
              screen sizes and devices, providing an optimal user experience on
              desktops, tablets, and mobile devices.
            </p>
          </div>
        </a>
        {/* Card4 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <BiMessageDots className={style.fcard_icon} />

            <h3>User Interaction and Experience</h3>
            <p>
              I can implement interactive elements using JavaScript, making the
              website dynamic and user-friendly. I can use React library to
              build complex UI components and manage application state.{" "}
            </p>
          </div>
        </a>
        {/* Card5 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <AiOutlineWifi className={style.fcard_icon} />

            <h3>Performance Optimization</h3>
            <p>
              I can work to optimize website performance, loading times, and
              resource usage to ensure a smooth and fast user experience.
            </p>
          </div>
        </a>
        {/* Card6 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <GiSurroundedEye className={style.fcard_icon} />

            <h3>Version Control and Collaboration</h3>
            <p>
              I can use version control systems like Git to manage code changes
              and collaborate with other developers and team members.{" "}
            </p>
          </div>
        </a>
        {/* Card7 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <PiSelectionForegroundBold className={style.fcard_icon} />

            <h3>Integration with Back-End</h3>
            <p>
              I can often work closely with back-end developers to integrate the
              user interface with the server-side functionality and APIs{" "}
            </p>
          </div>
        </a>
        {/* Card8 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <SiTestcafe className={style.fcard_icon} />

            <h3>Testing and Debugging</h3>
            <p>
              I can test the code, identify bugs, and troubleshoot issues to
              deliver a bug-free and functional website.{" "}
            </p>
          </div>
        </a>
        {/* Card9 */}
        <a href="#" className={style.card}>
          <div className={style.card_inner_div}>
            <SiFuturelearn className={style.fcard_icon} />

            <h3>Continuous Learning</h3>
            <p>
              As web technologies evolve rapidly, I am stay up-to-date with the
              latest trends, tools, and best practices in web development.{" "}
            </p>
          </div>
        </a>
      </div>
    </Element>
  );
}

export default Features;
