import Collaboration from "./AppOffers/Collaboration";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import Interesting from "./Interesting";

const LandingPage = () => {
  return (
    <main className="my-10 flex flex-col gap-10">
      <HeroSection />
      <Collaboration />
      <FAQ />
      <Interesting />
    </main>
  );
};

export default LandingPage;
