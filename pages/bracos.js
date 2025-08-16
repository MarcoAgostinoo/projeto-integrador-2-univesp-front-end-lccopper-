import Footer from "../src/components/footer/Footer";
import Bracos from "../src/components/products/Bracos";
import NavBar from "../src/components/navbar/NavBar";
// ...existing code...


export default function Page() {
    return (
        <main>
            <NavBar />
// ...existing code...
            <Bracos />
            <Footer />
        </main>
    )
}