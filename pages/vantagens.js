import NavBar from "../src/components/navbar/NavBar";
// ...existing code...
import Footer from "../src/components/footer/Footer";
import Nossasvantagens from "../src/components/vantagens/Nossasvantagens";

export default function Page () {
  return (
    <main>
      <NavBar />
// ...existing code...
      <Nossasvantagens />
      <Footer />
    </main>
  );
}
