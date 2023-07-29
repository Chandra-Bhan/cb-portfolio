import React from "react";
import style from "../style/Home.module.css";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { Link, Element } from "react-scroll";
import Typed from "react-typed";
import "../style/Ho.css";

function Home() {
  const texts = ["Web Developer.", "Skilled Codder."];
  return (
    <Element name="home" id="home" className={style.home_container}>
      <div className={style.intro_div}>
        <p className={style.welcome_para}>WELCOME TO MY WORLD</p>
        <h1 className={style.name_intro_h1}>
          Hi, I'm <span className={style.name_span}>Chandra Bhan a </span>
          <Typed
            strings={texts}
            typeSpeed={70}
            backSpeed={50}
            startDelay={1000}
            backDelay={2000}
            loop
            showCursor
            cursorChar="|"
          />
        </h1>
        <p className={style.brief_intro_para}>
          I am from Uttar Pradesh city Atarra. And I like to take my work as a
          Challenge. My dedication to delivering high-quality code, attention to
          detail, and strong problem-solving skills make me a valuable asset to
          any front- end development team. I am excited about the opportunity to
          contribute my skills and learn from experienced professionals to
          further enhance my abilities.
        </p>
        <div>
          <p className={style.find_with_para}>FIND WITH ME</p>
          <div className={style.find_me_div_contain}>
            <span>
              <a
                className={style.find_me_link}
                target="_blank"
                href="https://www.linkedin.com/in/chandra-bhan-prajapati-5bb668211/"
              >
                <FiLinkedin fontSize={30} />
              </a>
            </span>
            <a
              target="_blank"
              className={style.find_me_link}
              style={{ marginLeft: "20px" }}
              href="https://github.com/Chandra-Bhan"
            >
              <AiOutlineGithub fontSize={30} />
            </a>
          </div>
        </div>
      </div>
      <div className={style.image_div}>
        <div className={style.image_back}></div>
        <div className={style.innner_img_div}>
          <img src="./Chandrabhan_home_Sec_img.png" />
          {/* <img src="./Chandrabhan_trans_img.png" /> */}
        </div>
      </div>
    </Element>
  );
}

export default Home;
