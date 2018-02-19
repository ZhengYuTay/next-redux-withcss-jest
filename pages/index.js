import React from "react";
import "../style.css";
import styles from "./index.css";
import initStore from "../store/store";
import withRedux from "next-redux-wrapper";

const Index = () => <div className={styles.example}>O Hai world!</div>;

export default withRedux(initStore)(Index);
/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
