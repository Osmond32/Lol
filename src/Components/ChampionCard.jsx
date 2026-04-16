import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import ImagesService from "../Services/ImagesService";

const ChampionCard = ({ champion }) => {
    const navigate = useNavigate();

    return <>
        <Card className="champion-card champion-card-size cursor" onClick={() => navigate("/champion/" + champion.id)}>
            <Card.Img variant="top" src={ImagesService.getChampionImageUrl(champion.id)} alt={champion.name} />
            <Card.Body>
                <Card.Title className="text-truncate">{champion.name}</Card.Title>
                <Card.Subtitle className="mb-2">{champion.title}</Card.Subtitle>
            </Card.Body>
        </Card>
    </>
}
export default ChampionCard;