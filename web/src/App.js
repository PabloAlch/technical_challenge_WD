import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home-screen/HomeScreen";
import PhoneDetail from "./screens/phone-detail/PhoneDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/phones/:id"
          element={
            <PhoneDetail />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
