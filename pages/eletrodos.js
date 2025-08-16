import Eletrodos from "../src/components/products/Eletrodos";
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";
// ...existing code...

export default function Page() {
  return (
    <main>
      <NavBar />
// ...existing code...
      <Eletrodos />
      <Footer />
    </main>
  );
}
