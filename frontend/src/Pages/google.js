import React from "react";
import "./google.css"
import GoogleMapReact from "google-map-react";


const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};


export default function googleMap() {
  return (
    <div className="App">  
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAoMepmaehSovY6gCbFNx-2lNyB-yMDCWg",
          language: "fr",
          region: "EU"
        }}
        defaultCenter={{ lat: 48.69250681227935, lng: 6.188288683274327 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
      
      </GoogleMapReact>
    </div>
  );
}
