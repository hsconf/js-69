import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import NavBar from "./containers/NavBar/NavBar";
import Show from "./containers/Show/Show";

const App = () => {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="show/:id" element={<Show />} />
                </Route>
            </Routes>
        </main>
        </>
    );
};

export default App;