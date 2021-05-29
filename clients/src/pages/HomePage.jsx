import Nav from "../components/Nav";
import "../styles/HomePage.css";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage" autoFocusk>
      <Carousel />
    </div>
  );
};

export default HomePage;
