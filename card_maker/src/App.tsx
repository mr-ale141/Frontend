import "./App.css";
import Header from "./components/Header/Header";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import Data from "../src/data/max_data";
function App() {
    const template = Data.session.template;
    return (
        <div className="app">
            <Header />
            <ToolsPanel />
            {template && (
                <WorkSpace
                    template={template}
                    selectedBlocks={Data.session.selectedBlocks}
                />
            )}
        </div>
    );
}
export default App;
