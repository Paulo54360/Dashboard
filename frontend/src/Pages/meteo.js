import React, { useState, useEffect } from "react";
import "./meteo.css";

function Meteo() {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("london");
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    ifClicked();
  }, []);

  function ifClicked() {
    // fetch(
    //   //`http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID={APP_ID}&units=metric`
    //   //`http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=98b6a08249cdd81f04805ae88d387cba&units=metric`  
    //   'http://localhost:8080/meteo/temperature'    
    // )
    //post("http://localhost:8080/meteo/temperature/" + code  { headers: headers })

    //fetch("http://localhost:8080/meteo/temperature/" + code  + "/" + lieux)
    fetch("http://localhost:8080/meteo/temperature?id=98b6a08249cdd81f04805ae88d387cba&lieux=" + locations)
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          console.log(res);
          return res.json();          
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));
    //fetch(
    //  `https://api.unsplash.com/search/photos?query=${locations}&client_id=ITwKRBGlsdO5cesId8P6It83wUSYktPSX7zI9ChM82g`
    //)
    fetch("http://localhost:8080/meteo/image?id=ITwKRBGlsdO5cesId8P6It83wUSYktPSX7zI9ChM82g&lieux=" + locations)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="app">
      <div className="wrapper">
        <div className="search">
          <input
            type="text"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            placeholder="Enter location"
            className="location_input"
          />
          <button className="location_searcher" onClick={ifClicked}>
            Search Location
          </button>
        </div>
        <div className="app__data">
          <p className="temp">Current Temparature: {weather?.main?.temp}</p>
        </div>
        <img className="app__image" src={photos} alt="" />
      </div>
    </div>
  );
}


export default Meteo;