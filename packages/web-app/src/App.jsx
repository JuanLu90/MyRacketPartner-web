import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserRoutes from "./routes/Routes";
import "./i18n";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<UserRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
