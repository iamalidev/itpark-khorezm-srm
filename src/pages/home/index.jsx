import CourseAccord from "../../components/courseAccord";
import InfoCard from "./components/infoCard";

const HomePage = () => {
  return (
    <div className="home">
      <div className="accordion__wrapper">
        <p className="accordion__title">Kompyuter Savodhonligi</p>
        <CourseAccord />
      </div>
        <InfoCard />
    </div>
  );
};

export default HomePage;
