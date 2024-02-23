import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Tutorials } from "./components/Tutorials";
import { NotFound } from "./components/NotFound";
import { Navigation } from "./components/Navigation";
import { OneTutorial } from "./components/OneTutorial";

export const Routers = ()=>{
    return(
        <Router>
        <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/tutorials" element={<Tutorials/>} />
                <Route path="/tutorials/:name" element={<OneTutorial/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}