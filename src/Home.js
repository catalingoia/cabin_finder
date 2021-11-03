import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import cabana1 from "./img/cabana1.jpg";
import cabana2 from "./img/cabana2.jpg";
import cabana3 from "./img/cabana3.jpg";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home_section">
        <Card
          src={cabana1}
          title="cabana 1"
          description="prima cabana postata"
          price="100"
        />
        <Card
          src={cabana2}
          title="cabana 2"
          description="a doua cabana postata"
        />
        <Card
          src={cabana3}
          title="cabana 3"
          description="a treia cabana postata"
        />
      </div>
      <div className="home_section">
        <Card
          src={cabana1}
          title="cabana 1"
          description="prima cabana postata"
        />
        <Card
          src={cabana2}
          title="cabana 2"
          description="a doua cabana postata"
        />
        <Card
          src={cabana3}
          title="cabana 3"
          description="a treia cabana postata"
        />
      </div>
    </div>
  );
}
export default Home;
