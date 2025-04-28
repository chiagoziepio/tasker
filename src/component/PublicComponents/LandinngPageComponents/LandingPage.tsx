import Collaboration from "./AppOffers/Collaboration";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <main className="my-10 flex flex-col gap-10">
      <HeroSection />
      <Collaboration />
    </main>
  );
};

export default LandingPage;
