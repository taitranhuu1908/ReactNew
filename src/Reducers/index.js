import { combineReducers } from "redux";
import slider from "./slider";
import navItem from "./navItem";
import gearSlides from "./gearSlides";
import exploreSlides from "./exploreSlides";
import changeLogin from "./changeLogin";
import register from "./register";
import logged from "./logged";
import products from "./products";

const myReducers = combineReducers({
  slider,
  navItem,
  gearSlides,
  exploreSlides,
  changeLogin,
  register,
  logged,
  products,
});

export default myReducers;
