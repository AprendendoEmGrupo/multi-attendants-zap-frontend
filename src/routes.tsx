import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/App";
import Hello from "./pages/Hello";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <>
                    <Route path="/todos" element={<App />}/>
                    <Route path="/hello" element={<Hello />}/>
                </>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;