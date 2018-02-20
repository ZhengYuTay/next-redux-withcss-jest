import React from "react";
import "../styles/style.css";
import styles from "./index.css";
import initStore from "store/store";
import withRedux from "next-redux-wrapper";
import { postLogin } from "utils/api/api";
console.log(postLogin);
const Index = () => <div className={styles.example}>O Hai world!</div>;

export default withRedux(initStore)(Index);
