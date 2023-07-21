import { useSelector } from "react-redux";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";

function App() {
  const loginMode = useSelector((state) => state.auth.loginMode);
  return (
    <div className="App">
      {loginMode && <Register />}
      {!loginMode && <Homepage />}
    </div>
  );
}

export default App;
