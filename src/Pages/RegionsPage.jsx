import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import RegionCard from "../Components/RegionCard";
import RegionData from "../Services/RegionData";


const RegionsPage = () => {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        const allRegions = RegionData.getAllRegions();
        setRegions(allRegions);
    }, [])

    return <>
        <Container fluid className="regions-page-container d-flex flex-column align-items-center pt-3 gap-3">
            <h1>Regioni di Runeterra</h1>
            <p>Esplora le diverse regioni dell'universo di League of Legends</p>
            
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {regions.map((region) => {
                    return <RegionCard region={region} key={region.id} />
                })}
            </div>
        </Container>
    </>;
}

export default RegionsPage;