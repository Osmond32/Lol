import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChampionRelations from "../Services/ChampionRelations";
import ImagesService from "../Services/ImagesService";

const RelationsTab = ({ champion }) => {
    const navigate = useNavigate();
    const relations = ChampionRelations.getChampionRelations(champion.id);//kk

    if (!relations) {
        return <>
            <Container className="d-flex flex-column gap-3 align-items-center">
                <p className="text-muted">Nessuna relazione nota per questo champion.</p>
            </Container>
        </>;
    }

    return <>
        <Container className="d-flex flex-column gap-3 align-items-center">
            
            <div className="col-10">
                <h4>Storia delle Relazioni</h4>
                <p style={{ textAlign: "justify" }}>{relations.lore}</p>
            </div>

            {relations.allies && relations.allies.length > 0 && <>
                <h2 className="text-decoration-underline">Alleati</h2>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {relations.allies.map((allyId) => {
                        return <Card 
                            key={allyId} 
                            style={{ width: "150px", cursor: "pointer" }}
                            onClick={() => navigate("/champion/" + allyId)}
                        >
                            <Card.Img 
                                variant="top" 
                                src={ImagesService.getChampionImageUrl(allyId)}
                                alt={allyId}
                            />
                            <Card.Body className="text-center p-2">
                                <Card.Title style={{ fontSize: "14px" }}>{allyId}</Card.Title>
                            </Card.Body>
                        </Card>
                    })}
                </div>
            </>}

            {relations.rivals && relations.rivals.length > 0 && <>
                <h2 className="text-decoration-underline">Rivali</h2>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {relations.rivals.map((rivalId) => {
                        return <Card 
                            key={rivalId} 
                            style={{ width: "150px", cursor: "pointer" }}
                            onClick={() => navigate("/champion/" + rivalId)}
                        >
                            <Card.Img 
                                variant="top" 
                                src={ImagesService.getChampionImageUrl(rivalId)}
                                alt={rivalId}
                            />
                            <Card.Body className="text-center p-2">
                                <Card.Title style={{ fontSize: "14px" }}>{rivalId}</Card.Title>
                            </Card.Body>
                        </Card>
                    })}
                </div>
            </>}

        </Container>
    </>;
}

export default RelationsTab;