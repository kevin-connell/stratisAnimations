import { Container } from "reactstrap";
import Temperature from "./components/Temperature";
import "./style.css"



function App() {
  return (
    <>
      <div style={{height: "800px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "65px"}}>Scroll Down!</div>
      <Container className="masterContainer">
        <div className="graphicContainer">
          <Temperature/>
        </div>
        <div className="infoContainer">
          <div className="textContent">
            <div className= "title">HVAC</div>
            <div className="description">Residents can control their thermostat remotely from their phone while Property Managers can control the thermostats in vacant units.</div>
            <button className="controlMoreBtn">CONTROL MORE</button>

          </div>
        </div>

      </Container>
    </>
  );
}

export default App;
