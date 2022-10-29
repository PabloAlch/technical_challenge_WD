import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./screens/home-screen/HomeScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
