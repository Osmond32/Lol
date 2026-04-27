import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import DataDragonService from "../Services/DataDragonService";
import ChampionCard from "../Components/ChampionCard";
import ChampionRegionMapping from "../Services/ChampionRegionMapping";
import RegionData from "../Services/RegionData";



const RegionPage = () => {
    const { id } = useParams();
    const [region, setRegion] = useState({});
    const [champions, setChampions] = useState([]);

    const fetchRegionChampions = async () => {
        try {
            const response = await DataDragonService.getAllChampions();
            const championsArray = Object.values(response.data.data);

            const regionChampions = championsArray.filter((champion) => {
                const championRegion = ChampionRegionMapping.getChampionRegion(champion.id);
                return championRegion === id;
            });

            setChampions(regionChampions);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const regionData = RegionData.getRegionById(id);
        setRegion(regionData);
        fetchRegionChampions();
    }, [id])

    return <>

        <div style={{background: "linear-gradient(135deg, #0a0e27 0%, #16213e 100%)", minHeight: '100vh'}}>
            <div
                className="region-header-image"
                style={{
                    backgroundImage: region.image ? "url(" + region.image + ")" : "none"
                }}
            >
                <div className="region-header-overlay">
                    <h1 className="region-header-title">{region.name}</h1>
                </div>
            </div>

            <Container fluid className="d-flex flex-column align-items-center gap-3 pt-5 pb-5" style={{position: 'relative', zIndex: '1'}}>
                
                <Container className="col-8 fantasy-card" style={{marginBottom: '40px'}}>
                    <p style={{ textAlign: "justify", fontSize: "16px", color: '#f5f5f5', lineHeight: '1.8'}}>{region.description}</p>
                </Container>

                <h2 className="section-title">⚔️ Campioni di {region.name}</h2>
                <span className="counter-badge">
                    {champions.length} Campioni
                </span>

                <div className="d-flex flex-wrap gap-3 justify-content-center" style={{width: "100%", maxWidth: "1400px", margin: "0 auto", marginTop: "30px"}}>
                    {champions.map((champion) => {
                        return <ChampionCard champion={champion} key={champion.id} />
                    })}
                </div>

                {champions.length === 0 && (
                    <p style={{color: '#d4af37', fontSize: '18px', marginTop: '40px', textAlign: 'center', fontStyle: 'italic'}}>Nessun campione disponibile per questa regione.</p>
                )}
            </Container>
        </div>
    </>;
}

export default RegionPage;