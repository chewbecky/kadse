import { HashRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/404";

import Pomodoro from "./pages/Pomodoro";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/kadse" element={<Pomodoro />}>
          <Route path="/kadse/settings" element={<Settings />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
