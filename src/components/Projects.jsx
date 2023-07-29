import React from "react";
import style from "../style/Projects.module.css";
import { Link, Element } from "react-scroll";

function Projects() {
  return (
    <Element name="projects" id="projects" style={{ paddingTop: "120px" }}>
      <div className={style.project_sec_header_div}>
        <p className={style.project_section_heading}>
          VISITS MY PROJECTS AND KEEP YOUR FEEDBACK
        </p>
        <h1 className={style.Project_sec_head}>My Projects</h1>
      </div>
      <div className={style.pcards_container}>
        {/* Project 1 */}
        <div className={style.pcard}>
          <div className={style.pcard_img_div1}>
            <img src="./Kanban-board_project_img.png" />
          </div>
          <p
            className={`${style.project_section_heading} ${style.center} ${style.pro_nam}`}
          >
            KANBAN-BOARD
          </p>
          <h3>
            The Kanban Board project aims to develop an efficient and
            user-friendly digital tool for Task managing workflows.
            Drag-and-Drop Functionality: The project will leverage the power of
            drag-and-drop functionality, allowing users to effortlessly move
            tasks between columns. This feature makes it easy to update task
            statuses, assign tasks to team members, and prioritize work items by
            simply dragging them to the desired location on the board.
          </h3>
          <div className={style.project_link_container}>
            <a
              href="https://kanban-board-ohin.onrender.com"
              target="_blank"
              className={style.project_link}
            >
              view - project
            </a>
            <a
              href="https://github.com/Chandra-Bhan/KanbanProject.git"
              target="_blank"
              className={style.project_link}
            >
              view - git
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div className={style.pcard}>
          <div className={style.pcard_img_div1}>
            <img src="./Twitter-clone_project_img.png" />
          </div>
          <p
            className={`${style.project_section_heading} ${style.center} ${style.pro_nam}`}
          >
            TWITTER-CLONE
          </p>
          <h3>
            The Twitter-Clone project aims to develop a social media platform
            that replicates the functionalities and user experience of Twitter.
            This Twitter clone will provide users with a familiar and engaging
            platform for sharing thoughts, following others. Key Features:- 1.
            User Registration and Authentication 2. Tweet Creation 3. Follow and
            unfollow 4. Likes, Retweets, and Comments (Counting). 5. Search
            Functionality 6. Login and Logout Functionality 7. Responsive for
            mobile view.
          </h3>
          <div className={style.project_link_container}>
            <a
              href="https://twitter-clone-4vum.onrender.com"
              target="_blank"
              className={style.project_link}
            >
              view - project
            </a>
            <a
              href="https://github.com/Chandra-Bhan/Twitter-clone-Project.git"
              target="_blank"
              className={style.project_link}
            >
              view - git
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className={style.pcard}>
          <div className={style.pcard_img_div1}>
            <img src="./Google_doc_project_img.png" />
          </div>
          <p
            className={`${style.project_section_heading} ${style.center} ${style.pro_nam}`}
          >
            GOOGLE-DOC
          </p>
          <h3>
            The Google Doc project aims to create a web-based application that
            replicates the features and functionalities of Google Docs,
            providing to users document editing experience. The project involves
            developing a rich text editor, Users can create new documents,
            format text, insert images, and apply various styling options such
            as font styles, colors, alignments. The editor should support common
            editing operations like copy, paste, undo, and redo. And also user
            can print the document and can save the document as pdf format.
          </h3>
          <div className={style.project_link_container}>
            <a
              href="https://google-doc-csj9.onrender.com"
              target="_blank"
              className={style.project_link}
            >
              view - project
            </a>
            <a
              href="https://github.com/Chandra-Bhan/GoogleDocProject.git"
              target="_blank"
              className={style.project_link}
            >
              view - git
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className={style.pcard}>
          <div className={style.pcard_img_div1}>
            <img src="./Gym_website_project_img.png" />
          </div>
          <p
            className={`${style.project_section_heading} ${style.center} ${style.pro_nam}`}
          >
            GYM-WEBSITE
          </p>
          <h3>
            The gym website project involves creating a website for a gym or
            fitness center to provide information, showcase services, and engage
            with potential and existing members. The website serves as a digital
            platform that promotes the gym, attracts new customers, and provides
            valuable resources to support the fitness journey of its members. 1.
            Home Page 2. About Us 3. Membership and Pricing 4. Contact and
            Location 5. Mobile Responsiveness
          </h3>
          <div className={style.project_link_container}>
            <a
              href="https://websitegym.onrender.com"
              target="_blank"
              className={style.project_link}
            >
              view - project
            </a>
            <a
              href="https://github.com/Chandra-Bhan/Project-1-Gym-Website/tree/alldemodata"
              target="_blank"
              className={style.project_link}
            >
              view - git
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className={style.pcard}>
          <div className={style.pcard_img_div1}>
            <img src="./Responsive_design_project_img.png" />
          </div>
          <p
            className={`${style.project_section_heading} ${style.center} ${style.pro_nam}`}
          >
            RESPONSIVE-WEB-APP
          </p>
          <h3>
            This Web application is fully based on Responsiveness this is
            compatible with all types of devices there has a Responsive navbar,
            Responsive Header, Responsive Cards, and Responsive Footer.
          </h3>
          <div className={style.project_link_container}>
            <a
              href="https://rapid-assignment-ui.onrender.com"
              target="_blank"
              className={style.project_link}
            >
              view - project
            </a>
            <a
              href="https://github.com/Chandra-Bhan/rapid-assignment.git"
              target="_blank"
              className={style.project_link}
            >
              view - git
            </a>
          </div>
        </div>

        {/* Project 6 */}
        <div className={style.pcard}>
          <div className={style.pcard_img_div1}>
            <img src="./Full_stack_application_project_img.png" />
          </div>
          <p
            className={`${style.project_section_heading} ${style.center} ${style.pro_nam}`}
          >
            FULL_STACK-WEB-APP
          </p>
          <h3>
            This is the Mern Project there perform CRUD operation used RestApi
            and store data in Mongodb. In this aplication I used Bootstrap for
            designing there we can Register the student info and in another page
            we can manipulate the data.
          </h3>
          <div className={style.project_link_container}>
            <a
              href="https://mern-stack-crud-op-client.onrender.com"
              target="_blank"
              className={style.project_link}
            >
              view - project
            </a>
            <a
              href="https://github.com/Chandra-Bhan/full-stack-app-test.git"
              target="_blank"
              className={style.project_link}
            >
              view - git
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
