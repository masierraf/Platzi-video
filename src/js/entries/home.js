import React from "react";
import { render } from "react-dom";
import HomePage from '../pages/home-page'
import data from "../../data/api.json";


const App = document.getElementById("home-container");

render(<HomePage data={data} />, App);
