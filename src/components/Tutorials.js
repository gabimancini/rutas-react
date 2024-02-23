import { Link } from 'react-router-dom';
import { tutorials } from '../data';
export const Tutorials = () => {
  return (
    <>
      <div >
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>Tutoriales</h2>
        <div className="container">
          {
            tutorials.map(tutorial => {
              return (
                <div className="card">
                  <Link key={tutorial.id} to={`${tutorial.name}`}>
                    <img src={tutorial.image} alt={tutorial.name} width={140} />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};