import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReCaptcha from "./Components/ReCaptcha/ReCaptcha";
import Main from "./Components/Main/Main";

if (localStorage.getItem("redirecta")) {
  window.location.href = "https://pagespeed.web.dev/";
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/recaptcha" element={<ReCaptcha />} />
    </Routes>
  );
}

export default App;
