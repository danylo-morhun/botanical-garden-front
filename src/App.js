import "./scss/app.scss";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import WelcomeNews from "./components/WelcomeNews";
import Location from "./components/Location";
import React from "react";
import axios from 'axios';

function App() {

  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/news/?format=json`
      )
      .then((res) => {
        setNews(res.data);
      });
  }, []);

  console.log(news);

  return (
    <div className="container">
      <Header />
      <Welcome />      
      <WelcomeNews />
      <Location />
    </div>
  );
}

export default App;
