import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import RegionCard from "../Components/RegionCard";
import RegionData from "../Services/RegionData";


const RegionsPage = () => {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        const allRegions = RegionData.getAllRegions();
        setRegions(allRegions);
    }, [])

    return <>
        <Container fluid className="regions-page-container d-flex flex-column align-items-center pt-5 pb-5">
            <h1 className="section-title">Regioni di Runeterra</h1>
            <p style={{color: '#f5f5f5', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', textAlign: 'center', lineHeight: '1.6'}}>Esplora i misteriosi regni dell'universo di League of Legends</p>
            
            <Row className="g-4 justify-content-center" style={{width: "100%", maxWidth: "1400px", margin: "0 auto"}}>
                {regions.map((region) => {
                    return (
                        <Col xs={12} sm={6} md={4} lg={3} key={region.id} className="d-flex justify-content-center">
                            <RegionCard region={region} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    </>;
}

export default RegionsPage;