import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChampionRelations from "../Services/ChampionRelations";
import ImagesService from "../Services/ImagesService";

const RelationsTab = ({ champion }) => {
    const navigate = useNavigate();
    const relations = ChampionRelations.getChampionRelations(champion.id);

    if (!relations) {
        return <>
            <Container className="d-flex flex-column gap-3 align-items-center">
                <p style={{color: '#d4af37', fontStyle: 'italic'}}>Nessuna relazione nota per questo campione.</p>
            </Container>
        </>;
    }

    return <>
        <Container className="d-flex flex-column gap-3 align-items-center">
            
            <div className="fantasy-card col-10">
                <h4 style={{color: '#d4af37', fontFamily: "'Cinzel', serif", fontSize: '18px', fontWeight: '700', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px'}}>📖 Storia delle Relazioni</h4>
                <p style={{ textAlign: "justify", color: '#f5f5f5', lineHeight: '1.7' }}>{relations.lore}</p>
            </div>

            {relations.allies && relations.allies.length > 0 && <>
                <h2 style={{color: '#d4af37', fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: '700', marginTop: '20px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'}}>🤝 Alleati</h2>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {relations.allies.map((allyId) => {
                        return <div key={allyId} className="champion-card champion-card-size cursor" onClick={() => navigate("/champion/" + allyId)}>
                            <img 
                                src={ImagesService.getChampionImageUrl(allyId)}
                                alt={allyId}
                                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0'}}
                            />
                            <div style={{padding: '12px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.9) 0%, rgba(16, 21, 32, 0.9) 100%)', borderTop: '1px solid rgba(212, 175, 55, 0.3)'}}>
                                <p style={{color: '#d4af37', fontSize: '14px', fontWeight: '700', margin: '0'}}>{allyId}</p>
                            </div>
                        </div>
                    })}
                </div>
            </>}

            {relations.rivals && relations.rivals.length > 0 && <>
                <h2 style={{color: '#dc3545', fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: '700', marginTop: '20px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(220, 53, 69, 0.5)'}}>⚔️ Rivali</h2>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {relations.rivals.map((rivalId) => {
                        return <div key={rivalId} className="champion-card champion-card-size cursor" onClick={() => navigate("/champion/" + rivalId)} style={{borderColor: '#dc3545'}}>
                            <img 
                                src={ImagesService.getChampionImageUrl(rivalId)}
                                alt={rivalId}
                                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0'}}
                            />
                            <div style={{padding: '12px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.9) 0%, rgba(16, 21, 32, 0.9) 100%)', borderTop: '1px solid rgba(220, 53, 69, 0.3)'}}>
                                <p style={{color: '#dc3545', fontSize: '14px', fontWeight: '700', margin: '0'}}>{rivalId}</p>
                            </div>
                        </div>
                    })}
                </div>
            </>}

        </Container>
    </>;
}

export default RelationsTab;