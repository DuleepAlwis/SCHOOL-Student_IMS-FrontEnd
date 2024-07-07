import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { RoutePaths } from "./routes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { OrgAdminDashBoard } from "./pages/OrgAdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
//import "./App.css";

function App() {
  //const [count, setCount] = useState(0)

  /*return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path={RoutePaths.home} element={<Home />} />
            <Route path={RoutePaths.createCompany} element={<Home />} />
            <Route path={RoutePaths.createCompany} element={<Home />} />
            <Route path={RoutePaths.notFound} element={<NotFound />} />
            <Route path="/*" element={<Navigate to={RoutePaths.notFound} />} />
            <Route path={RoutePaths.notFound} element={<NotFound />} />
            <Route
              path={RoutePaths.orgAdminDashBoard}
              element={
                <ProtectedRoute>
                  <OrgAdminDashBoard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
