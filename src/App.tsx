import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/404";

import Pomodoro from "./pages/Pomodoro";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter basename="/kadse/">
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
