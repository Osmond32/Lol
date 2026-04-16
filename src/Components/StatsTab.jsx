import { Container, ProgressBar } from "react-bootstrap";

const StatsTab = ({ champion }) => {

    const renderStat = (label, value, max = 10) => {
        const percentage = (value / max) * 100;
        return (
            <div style={{marginBottom: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{color: '#d4af37', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                        {label}
                    </span>
                    <span style={{color: '#f5f5f5', fontWeight: '600'}}>{value.toFixed(1)}</span>
                </div>
                <ProgressBar 
                    now={percentage} 
                    style={{height: '8px', background: 'rgba(212,175,55,0.2)', border: '1px solid #d4af37'}}
                />
            </div>
        );
    };

    return <>
        <Container className="d-flex flex-column gap-3 align-items-center">
            <h2 style={{color: '#d4af37', fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'}}>📊 Statistiche Base</h2>
            
            {champion.stats && <div className="fantasy-card col-8">
                {renderStat('Punti Vita', champion.stats.hp, 800)}
                {renderStat('Mana/Energia', champion.stats.mp, 500)}
                {renderStat('Armatura', champion.stats.armor, 50)}
                {renderStat('Resistenza Magica', champion.stats.spellblock, 50)}
                {renderStat('Danno d\'Attacco', champion.stats.attackdamage, 250)}
                {renderStat('Velocità d\'Attacco', champion.stats.attackspeed, 2)}
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'rgba(212,175,55,0.1)', borderRadius: '4px', marginBottom: '10px'}}>
                    <span style={{color: '#d4af37', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase'}}>Raggio d'Attacco</span>
                    <span style={{color: '#f5f5f5', fontWeight: '600'}}>{champion.stats.attackrange}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'rgba(212,175,55,0.1)', borderRadius: '4px'}}>
                    <span style={{color: '#d4af37', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase'}}>Velocità di Movimento</span>
                    <span style={{color: '#f5f5f5', fontWeight: '600'}}>{champion.stats.movespeed}</span>
                </div>
            </div>}

            <h2 style={{color: '#d4af37', fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: '700', marginTop: '30px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'}}>⭐ Valutazioni</h2>
            {champion.info && <div className="fantasy-card col-8">
                {renderStat('Attacco', champion.info.attack, 10)}
                {renderStat('Difesa', champion.info.defense, 10)}
                {renderStat('Magia', champion.info.magic, 10)}
                {renderStat('Difficoltà', champion.info.difficulty, 10)}
            </div>}
        </Container>
    </>;
}

export default StatsTab;