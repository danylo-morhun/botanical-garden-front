import "./scss/app.scss";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="container">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
