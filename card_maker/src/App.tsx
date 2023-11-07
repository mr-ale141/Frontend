import "./App.css";
import Header from "./components/Header/Header";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import WorkSpace from "./components/WorkSpace/WorkSpace";
function App() {
    return (
        <div className="app">
            <Header />
            <ToolsPanel />
            <WorkSpace />
        </div>
    );
}
export default App;
