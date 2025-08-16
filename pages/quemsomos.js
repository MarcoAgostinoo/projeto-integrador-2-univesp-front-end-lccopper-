import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import QuemSomos from "../src/components/quemsomoscomp/Quemsomoscomp";
import Section1 from "../src/components/section1/Section1";
// ...existing code...
import Clientes from "../src/components/clientes/Clientes";
import CompanyOverview from "../src/components/company/CompanyOverview";

export default function Page() {
  return (
    <main>
      <NavBar />
// ...existing code...
      <QuemSomos />
      <CompanyOverview />
      <Section1 />
      <Clientes />
      <Footer />
    </main>
  );
}
