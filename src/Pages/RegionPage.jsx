import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import DataDragonService from "../services/DataDragonService";
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

        <div>
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

            <Container fluid className="d-flex flex-column align-items-center gap-3 pt-3">
                
                <Container className="col-8">
                    <p style={{ textAlign: "justify", fontSize: "20px"}}>{region.description}</p>
                </Container>

                <h2 className="text-decoration-underline">Champions di {region.name}</h2>
                <p>Trovati {champions.length} champions</p>

                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {champions.map((champion) => {
                        return <ChampionCard champion={champion} key={champion.id} />
                    })}
                </div>

                {champions.length === 0 && (
                    <p className="text-muted">Nessun champion disponibile per questa regione.</p>
                )}
            </Container>
        </div>
    </>;
}

export default RegionPage;