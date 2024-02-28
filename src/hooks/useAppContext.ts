import {useContext} from "react";
import {ThemeContext} from "../hoc/ThemeProvider";

const useAppContext = () => useContext(ThemeContext)

export {
    useAppContext
}