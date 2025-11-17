import { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import ChampionRelations from "../Services/ChampionRelations";
import { useNavigate } from "react-router-dom";
import ImagesService from "../Services/ImagesService";

const RelationsPage = () => {
    const navigate = useNavigate();
    const [allRelations, setAllRelations] = useState({});

    useEffect(() => {
        const relations = ChampionRelations.getAllRelations();
        setAllRelations(relations);
    }, [])

    return <>
        <Container fluid className="relation-page-background d-flex flex-column align-items-center pt-3 gap-3">
            <h1>Relazioni tra Champions</h1>
            <p style={{fontSize : "20px"}}>Esplora le alleanze e le rivalità dell'universo di League of Legends</p>

            <div className="d-flex flex-column gap-5 col-10">
                {Object.keys(allRelations).map((championId) => {
                    const relations = allRelations[championId];
                    return <Card key={championId}>
                        <Card.Body>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img 
                                    src={ImagesService.getChampionImageUrl(championId)}
                                    alt={championId}
                                    style={{ width: "80px", cursor: "pointer" }}
                                    onClick={() => navigate("/champion/" + championId)}
                                />
                                <div>
                                    <h3 
                                        style={{ cursor: "pointer" }}
                                        onClick={() => navigate("/champion/" + championId)}
                                    >
                                        {championId}
                                    </h3>
                                    <p className="mb-0">{relations.lore}</p>
                                </div>
                            </div>

                            <div className="d-flex gap-5">
                                {relations.allies.length > 0 && (
                                    <div>
                                        <h5 className="text-success">Alleati:</h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            {relations.allies.map((ally) => (
                                                <span 
                                                    key={ally}
                                                    className="btn btn-sm btn-outline-success"
                                                    onClick={() => navigate("/champion/" + ally)}
                                                >
                                                    {ally}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {relations.rivals.length > 0 && (
                                    <div>
                                        <h5 className="text-danger">Rivali:</h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            {relations.rivals.map((rival) => (
                                                <span 
                                                    key={rival}
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => navigate("/champion/" + rival)}
                                                >
                                                    {rival}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                })}
            </div>
        </Container>
    </>;
}

export default RelationsPage;