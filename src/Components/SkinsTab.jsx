import { Container } from "react-bootstrap"
import ImagesService from "../Services/ImagesService"

const SkinsTab = ({ champion }) => {
    return <>
        <Container className="d-flex flex-column gap-3 align-items-center">
            <h2 style={{color: '#d4af37', fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'}}>✨ Skins Disponibili</h2>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
                {champion.skins && champion.skins.map((skin) => {
                    return <div key={skin.num} className="text-center cursor" style={{transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        <img
                            src={ImagesService.getChampionSplashUrl(champion.id, skin.num)}
                            alt={skin.name}
                            style={{ width: "280px", borderRadius: "8px", border: "2px solid #d4af37", boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)" }}
                        />
                        <p className="mt-3" style={{color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '0.5px'}}>{skin.name}</p>
                    </div>
                })}
            </div>




        </Container>

    </>
}

export default SkinsTab