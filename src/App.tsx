import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/404";

import Pomodoro from "./pages/Pomodoro";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="settings" element={<Settings />} />
          <Route path="pomodoro" element={<Pomodoro />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
