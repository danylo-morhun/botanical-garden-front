import "./scss/app.scss";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import WelcomeNews from "./components/WelcomeNews";

function App() {
  return (
    <div className="container">
      <Header />
      <Welcome />
      <WelcomeNews />
    </div>
  );
}

export default App;
