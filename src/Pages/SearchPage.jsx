import { useLocation } from "react-router-dom";
import ChampionCard from "../Components/ChampionCard";
import { Container } from "react-bootstrap";

import { useEffect, useState } from "react";
import DataDragonService from "../Services/DataDragonService";

const SearchPage = () => {
    const location = useLocation();
    const [champions, setChampions] = useState([]);
    const [filteredChampions, setFilteredChampions] = useState([]);

     const fetchChampions = async () => {
        try {
            const response = await DataDragonService.getAllChampions();
            const championsArray = Object.values(response.data.data);
            setChampions(championsArray);
        } catch (error) {
            console.error(error);
        }
    }

    const filterChampions = () => {
        if (location.state && location.state.search) {
            const searchTerm = location.state.search.toLowerCase();
            const filtered = champions.filter((champion) => {
                return champion.name.toLowerCase().includes(searchTerm) ||
                       champion.title.toLowerCase().includes(searchTerm);
            });
            setFilteredChampions(filtered);
        }
    }

    useEffect(() => {
        fetchChampions();
    }, [])

    useEffect(() => {
        filterChampions();
    }, [champions, location.state])

    return <>
        <Container fluid className="search-page-container d-flex flex-column align-items-center pt-5 pb-5">
            <h1 className="search-title">Risultati per: "{location.state ? location.state.search : ""}"</h1>
            
            <span className="counter-badge">
                {filteredChampions.length} Campioni trovati
            </span>
            
            <div className="d-flex flex-wrap gap-3 justify-content-center" style={{width: "100%", maxWidth: "1400px", margin: "0 auto", marginTop: "40px"}}>
                {filteredChampions.map((champion) => {
                    return <ChampionCard key={champion.id} champion={champion} />
                })}
            </div>

            {filteredChampions.length === 0 && champions.length > 0 && (
                <p style={{color: '#d4af37', fontSize: '18px', marginTop: '40px', textAlign: 'center', fontStyle: 'italic'}}>Nessun campione trovato. Prova un'altra ricerca.</p>
            )}
        </Container>
    </>;







}

export default SearchPage