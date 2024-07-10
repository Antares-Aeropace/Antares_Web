import Home_Hero from "./Home_Hero"
import Home_Section_1 from "./Home_Section_1"
import "../../styles/Home.css"
import Iniciativas from "./Iniciativas"

const Home = () => {
    return (
        <>
            <Home_Hero />
            <Home_Section_1 />
            <Iniciativas />
        </>
    )
}

export default Home