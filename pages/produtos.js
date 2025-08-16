import ProdBanner from "../src/components/products/ProdBanner";
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";
// ...existing code...
export default function Page() {
  return (
    <main>
      <NavBar />
// ...existing code...
      <ProdBanner />
      <Footer />
    </main>
  );
}
