import { Container } from "react-bootstrap";

const StatsTab = ({ champion }) => {

    return <>
        <Container className="d-flex flex-column gap-3 align-items-center">
            <h2 className="text-decoration-underline">Statistiche Base</h2>
            
            {champion.stats && <div className="col-8">
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Punti Vita:</strong></span>
                    <span>{champion.stats.hp} (+ {champion.stats.hpperlevel} per livello)</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Mana/Energia:</strong></span>
                    <span>{champion.stats.mp} (+ {champion.stats.mpperlevel} per livello)</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Armatura:</strong></span>
                    <span>{champion.stats.armor} (+ {champion.stats.armorperlevel} per livello)</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Resistenza Magica:</strong></span>
                    <span>{champion.stats.spellblock} (+ {champion.stats.spellblockperlevel} per livello)</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Danno d'Attacco:</strong></span>
                    <span>{champion.stats.attackdamage} (+ {champion.stats.attackdamageperlevel} per livello)</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Velocità d'Attacco:</strong></span>
                    <span>{champion.stats.attackspeed} (+ {champion.stats.attackspeedperlevel}% per livello)</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Raggio d'Attacco:</strong></span>
                    <span>{champion.stats.attackrange}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Velocità di Movimento:</strong></span>
                    <span>{champion.stats.movespeed}</span>
                </div>
            </div>}

            <h2 className="text-decoration-underline">Valutazioni</h2>
            {champion.info && <div className="col-8">
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Attacco:</strong></span>
                    <span>{champion.info.attack}/10</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Difesa:</strong></span>
                    <span>{champion.info.defense}/10</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Magia:</strong></span>
                    <span>{champion.info.magic}/10</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span><strong>Difficoltà:</strong></span>
                    <span>{champion.info.difficulty}/10</span>
                </div>
            </div>}
        </Container>
    </>;
}

export default StatsTab;