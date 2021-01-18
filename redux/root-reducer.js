import { combineReducers } from "redux";
import App from "@iso/redux/app/reducer";
import ThemeSwitcher from "@iso/redux/themeSwitcher/reducer";
import Invoices from "@iso/redux/invoice/reducer";
import LanguageSwitcher from "@iso/redux/languageSwitcher/reducer";
import place from "./place/reducer";
import timeseries from "./timeseries/reducer";
import excel from "./excel/reducer";

export default combineReducers({
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  place,
  timeseries,
  excel,
});
