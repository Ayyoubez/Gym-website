import Equipments from "./Componnents/Equipments/Equipments";
import Hero from "./Componnents/Hero/Hero";
import Navbar from "./Componnents/Navbar/Navbar";
import bgImage from "./assets/bg.png";

const bgStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
    </div>
  );
};

export default App;
