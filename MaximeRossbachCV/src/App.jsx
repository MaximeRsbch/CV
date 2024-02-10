import Navbar from "./Navbar";
import Accueil from "./home/Accueil";
import Professionnel from "./xp/professionnel";
import Portfolio from "./portfolio/portfolio";

function App() {
    return (
        <div>
            <Navbar />
            <Accueil />
            <Professionnel />
            <Portfolio />
        </div>
    );
}

export default App;
