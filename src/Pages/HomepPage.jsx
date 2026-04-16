import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();

    return <>


        <div className="homepage-container">
            <div className="homepage-overlay">
                <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                    <h1 className="homepage-title">L'Universo di Runeterra Ti Attende</h1>
                    <p className="homepage-subtitle">
                        Immergiti nel mondo affascinante di League of Legends. Scopri i campioni leggendari,<br />
                        esplora le mitiche regioni di Runeterra e vivi le loro straordinarie storie.
                    </p>
                    <div className="d-flex gap-4 mt-5">
                        <button
                            className="btn-fantasy"
                            onClick={() => { navigate('/champions') }}
                            style={{padding: "15px 40px", fontSize: "18px", fontWeight: "700"}}
                        >
                            ⚔️ Esplora Champions
                        </button>

                        <button
                            className="btn-fantasy"
                            onClick={() => { navigate('/regions') }}
                            style={{padding: "15px 40px", fontSize: "18px", fontWeight: "700"}}
                        >
                            🗺️ Scopri Regioni
                        </button>

                        <button
                            className="btn-fantasy"
                            onClick={() => { navigate('/quiz') }}
                            style={{padding: "15px 40px", fontSize: "18px", fontWeight: "700"}}
                        >
                            📚 Sfida il Quiz
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    </>
}

export default HomePage;