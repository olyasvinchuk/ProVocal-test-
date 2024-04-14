import React from "react";
import Header from "./Header";
import styles from "../styles/CourseStyles.module.css";

import { ReactComponent as MoveBack } from "../assets/secondaryIcons/moveBackIcon.svg";

const Course = () => {

    return (
        <div className={styles.mainCont}>
            <Header theme="dark" />
            <div className={styles.courseContainer}>
                <div className={styles.moveIconCont}>
                    <a href="/">
                        <MoveBack />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Course;
