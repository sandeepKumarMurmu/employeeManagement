import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { RegistrationForm } from "./components/registration/registration";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RegistrationForm />
    </div>
  );
}

export default App;
