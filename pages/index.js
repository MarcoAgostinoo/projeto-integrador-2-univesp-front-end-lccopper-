import NavBar from "../src/components/navbar/NavBar";
import BannerTop from "../src/components/Bannertop/Bannertop";
import Presentation from "../src/components/prensentation/Presentation";
import Structure from "../src/components/structure/Structure";
import Apresentation from "../src/components/structure/Apresentation";
import Faqitens from "../src/components/faqitens/Faqitens";
import Footer from "../src/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
  <BannerTop />
      <Presentation />
      <Apresentation /> 
      <Structure />
      <Faqitens />
      <Footer />
    </div>
  );
}
