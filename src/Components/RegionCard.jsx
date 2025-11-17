import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegionCard = ({ region }) => {
    const navigate = useNavigate();

    return <>
        <Card className="region-card col-3" style={{ cursor: "pointer" }} onClick={() => navigate("/region/" + region.id)}>
            <Card.Img
                variant="top"
                src={region.image}
                alt={region.name}
                style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title className="text-truncate">{region.name}</Card.Title>
               
                
            </Card.Body>
        </Card>
    </>;
}

export default RegionCard;