import "./App.css";
import Header from "./components/Header/Header";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import React from "react";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";
function App() {
    const dispatch = useDispatch();
    document.body.onkeyup = (e) => {
        if (e.ctrlKey && e.key === "z") dispatch(ActionCreators.undo());
        if (e.ctrlKey && e.key === "y") dispatch(ActionCreators.redo());
    };
    return (
        <div className="app">
            <Header />
            <ToolsPanel />
            <WorkSpace />
        </div>
    );
}
export default App;
