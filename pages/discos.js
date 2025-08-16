
import Footer from "../src/components/footer/Footer";
import Discos from "../src/components/products/Discosprod";
import NavBar from "../src/components/navbar/NavBar";
// ...existing code...


export default function Page() {
    return (
        <main>
            <NavBar />
// ...existing code...
            <Discos />
            <Footer />
        </main>
    );
}
