import "./App.css";
import Header from "./components/Header/Header";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import React from "react";
import { Theme, ThemeProvider } from "@gravity-ui/uikit";

export const DARK = "dark";
export const LIGHT = "light";
export const DEFAULT_THEME = LIGHT;

function App() {
    const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);
    const isDark = theme === DARK;
    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <Header isDark={isDark} setTheme={setTheme} />
                <ToolsPanel />
                <WorkSpace />
            </div>
        </ThemeProvider>
    );
}
export default App;
