import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Link to="/scatterchart">Scatter Chart</Link>
      <br></br>
      <Link to="/barchart">Bar Chart</Link>
    </>
  );
}

export default Home;
