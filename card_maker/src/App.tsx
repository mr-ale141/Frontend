import "./App.css";
import Header from "./components/Header/Header";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import Data from "../src/data/max_data";
function App() {
    const template = Data.templateSource[1];
    return (
        <div className="app">
            <Header />
            <ToolsPanel />
            <WorkSpace template={template} />
        </div>
    );
}
export default App;
// header     #043f45
// ToolsPanel #211d1d
// WorkSpace  #2e2411
