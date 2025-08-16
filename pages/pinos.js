import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import Pinosguiabuchas from "../src/components/products/Pinosguiabuchas";
// ...existing code...




export default function Page ( ) {
    return (
        <main>
            <NavBar />
// ...existing code...
            <Pinosguiabuchas />
            <Footer />
        </main>
    )
}