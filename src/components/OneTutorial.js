import { useParams, useNavigate } from "react-router-dom"
import { tutorials } from "../data";

export const OneTutorial = ()=>{
    const {name} = useParams();
    const oneTutorial = tutorials.find((tutorial) => tutorial.name === name);
    const back = useNavigate();
     return (
        <>
            <div className="container">
            <button className="btn-back" onClick={() => back(-1)}>🔙</button>
                <div className="card">
                    <h2> Aprende {oneTutorial.name}</h2>
                    <img src={oneTutorial.image} alt={oneTutorial.name} width={150} />
                </div>
            </div>
        </>
    );
}