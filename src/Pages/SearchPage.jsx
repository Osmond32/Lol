import { useLocation } from "react-router-dom";
import ChampionCard from "../Components/ChampionCard";
import { Container } from "react-bootstrap";

import { useEffect, useState } from "react";
import DataDragonService from "../services/DataDragonService";

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
        <Container fluid className="d-flex flex-column align-items-center gap-3 pt-3">
            <h1>Risultati di ricerca per: "{location.state ? location.state.search : ""}"</h1>
            <p>Trovati {filteredChampions.length} champions</p>
            
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {filteredChampions.map((champion) => {
                    return <ChampionCard key={champion.id} champion={champion} />
                })}
            </div>

            {filteredChampions.length === 0 && champions.length > 0 && (
                <p className="text-muted">Nessun champion trovato con questo nome.</p>
            )}
        </Container>
    </>;







}

export default SearchPage