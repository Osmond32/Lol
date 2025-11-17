import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import DataDragonService from "../services/DataDragonService";
import ChampionCard from "../Components/ChampionCard";


const ChampionsPage = () => {
    const [champions, setChampions] = useState([]);
    const [filteredChampions, setFilteredChampions] = useState([]);
    const [selectedRole, setSelectedRole] = useState("all");

    const fetchChampions = async () => {
        try {
            const response = await DataDragonService.getAllChampions();
            const championsArray = Object.values(response.data.data);
            setChampions(championsArray);
            setFilteredChampions(championsArray);
        } catch (error) {
            console.error(error);
        }
    }

    const filterByRole = (role) => {
        if (role === "all") {
            setFilteredChampions(champions);
        } else {
            const filtered = champions.filter((champion) => {
                return champion.tags.includes(role);
            });
            setFilteredChampions(filtered);
        }
    }

    const handleRoleChange = (e) => {
        const role = e.target.value;
        setSelectedRole(role);
        filterByRole(role);
    }

    useEffect(() => {
        fetchChampions();
    }, [])

    return <>
        <Container fluid className="champions-page-container d-flex flex-column align-items-center pt-3 gap-3">
            <h1>Champions di League of Legends</h1>
            
            <Form.Select 
                className="role-select" 
                value={selectedRole} 
                onChange={handleRoleChange}
            >
                <option value="all">Tutti i Ruoli</option>
                <option value="Fighter">Fighter</option>
                <option value="Tank">Tank</option>
                <option value="Mage">Mage</option>
                <option value="Assassin">Assassin</option>
                <option value="Support">Support</option>
                <option value="Marksman">Marksman</option>
            </Form.Select>

            <p>Mostrando {filteredChampions.length} champions</p>

            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {filteredChampions.map((champion) => {
                    return <ChampionCard champion={champion} key={champion.id} />
                })}
            </div>
        </Container>
    </>;
}

export default ChampionsPage;