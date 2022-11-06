"use client";

import styles from "../styles/Home.module.css";
import { Main, More, New, NavBar } from "../components";
//import NavBar from "../app/navBar";

export default function Home() {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.mainGrid}>
                <Main />
                <New />
                <More />
            </div>
        </div>
    );
}
