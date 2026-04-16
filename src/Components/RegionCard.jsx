import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegionCard = ({ region }) => {
    const navigate = useNavigate();

    return <>
        <Card className="region-card cursor" style={{ width: "calc(25% - 15px)" }} onClick={() => navigate("/region/" + region.id)}>
            <Card.Img
                variant="top"
                src={region.image}
                alt={region.name}
                style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title style={{fontFamily: "'Cinzel', serif", textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700'}}>
                    {region.name}
                </Card.Title>
            </Card.Body>
        </Card>
    </>;
}

export default RegionCard;