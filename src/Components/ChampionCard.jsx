import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import ImagesService from "../Services/ImagesService";

const ChampionCard = ({ champion }) => {
    const navigate = useNavigate();

    return <>
        <Card className="champion-card-size champion-card" onClick={() => navigate("/champion/" + champion.id)}>
            <Card.Img variant="top" src={ImagesService.getChampionImageUrl(champion.id)} />
            <Card.Body>
                <Card.Title className="text-truncate">{champion.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{champion.title}</Card.Subtitle>
               

            </Card.Body>

        </Card>



    </>
}
export default ChampionCard;