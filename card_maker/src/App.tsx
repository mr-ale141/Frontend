import "./App.css";
import Header from "./components/Header/Header";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import React, { useEffect } from "react";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";

const keyUndo: string = "z";
const keyRedo: string = "y";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        document.body.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key === keyUndo) dispatch(ActionCreators.undo());
            if (e.ctrlKey && e.key === keyRedo) dispatch(ActionCreators.redo());
        });
    }, []);
    return (
        <div className="app">
            <Header />
            <ToolsPanel />
            <WorkSpace />
        </div>
    );
}
export default App;
