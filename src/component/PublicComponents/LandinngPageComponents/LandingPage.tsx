import Collaboration from "./AppOffers/Collaboration";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <main className="my-10 flex flex-col gap-10">
      <HeroSection />
      <Collaboration />
      <FAQ />
    </main>
  );
};

export default LandingPage;
