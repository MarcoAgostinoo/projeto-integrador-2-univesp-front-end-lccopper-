import NavBar from "../src/components/navbar/NavBar";
import Clientes from "../src/components/clientes/Clientes";
import Footer from "../src/components/footer/Footer";
// ...existing code...



export default function Page ( ) {
    return (
        <main>
            <NavBar />
// ...existing code...
            <Clientes />
            <Footer />
        </main>
    )
}