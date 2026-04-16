import { Container } from "react-bootstrap"

const AbilitiesTab =({champion}) =>{

    return<>

    <Container className="d-flex flex-column gap-3 align-items-center">

        {champion.passive && <>
                <h2 style={{color: '#d4af37', fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'}}>⭐ Passiva</h2>
                <div className="fantasy-card col-10" style={{marginBottom: '20px'}}>
                   
                    <div>
                        <h4 style={{color: '#d4af37', marginBottom: '10px', fontWeight: '700'}}>{champion.passive.name}</h4>
                        <p style={{color: '#f5f5f5', lineHeight: '1.6'}}>{champion.passive.description}</p>
                    </div>
                </div>
            </>}

             {champion.spells && <>
                <h2 style={{color: '#d4af37', fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'}}>⚡ Abilità</h2>
                {champion.spells.map((spell, index) => {
                    const spellKeys = ['Q', 'W', 'E', 'R'];
                    return <div key={index} className="fantasy-card col-10" style={{marginBottom: '15px'}}>
                      
                        <div>
                            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                                <span style={{background: '#d4af37', color: '#0a0e27', padding: '5px 12px', borderRadius: '4px', fontWeight: '700', fontFamily: "'Cinzel', serif", fontSize: '12px'}}>
                                    {spellKeys[index]}
                                </span>
                                <h4 style={{color: '#d4af37', margin: '0', fontWeight: '700'}}>{spell.name}</h4>
                            </div>
                            <p style={{color: '#f5f5f5', lineHeight: '1.6', marginBottom: '12px'}}>{spell.description}</p>
                            <p style={{color: '#d4af37', fontSize: '13px', fontStyle: 'italic'}}>
                                <strong>Cooldown:</strong> {spell.cooldownBurn}s | 
                                <strong> Costo:</strong> {spell.costBurn} {spell.resource}
                            </p>
                        </div>
                    </div>
                })}
            </>}



    </Container>
        
    
    
    </>;
    

}

export default AbilitiesTab