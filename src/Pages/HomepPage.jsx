import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();

    return <>


        <div className="homepage-container">
            <div className="homepage-overlay">
                <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                    <h1 className="home-title" style={{color:"#FFFFFF"}}>Benvenuto nell'Universo di League of Legends</h1>
                    <p className="home-subtitle" style={{color:"#FFFFFF"}}>
                        Esplora il mondo di Runeterra, scopri i suoi eroi leggendari e immergiti
                        nelle loro storie epiche. Ogni champion ha una storia unica da raccontare.
                    </p>
                    <div className="d-flex gap-3 mt-4">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => { navigate('/champions') }}
                        > Esplora Champions
                        </button>

                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => { navigate('/regions') }}
                        > Scopri le Regioni
                        </button>


                    </div>
                </Container>
            </div>
        </div>
    </>
}

export default HomePage;