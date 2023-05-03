import {} from "react";
import Navbar from "./Navbar";
import Body from "./Body";

function Home() {
  return (
    <div style={{ backgroundColor: "rgba(54, 55, 58, 1)", height: "100vh" }}>
      <Navbar />
      <Body />
    </div>
  );
}

export default Home;
