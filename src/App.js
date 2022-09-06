import "./scss/app.scss";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import WelcomeNews from "./components/WelcomeNews";
import Location from "./components/Location";
import Schedule from "./components/Schedule";
import React from "react";
import axios from 'axios';

function App() {

  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/feedback/all-reviews/`
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
      <Schedule />
    </div>
  );
}

export default App;
