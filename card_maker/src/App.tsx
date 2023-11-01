import "./App.css";
import Header from "./components/Header/Header";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import session from "../src/data/max_data";
function App() {
    const template = session.template;
    return (
        <div className="app">
            <Header />
            <ToolsPanel />
            {template && <WorkSpace />}
        </div>
    );
}
export default App;
