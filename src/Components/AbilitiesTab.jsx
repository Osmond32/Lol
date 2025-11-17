import { Container } from "react-bootstrap"
import ImagesService from "../Services/ImagesService";

const AbilitiesTab =({champion}) =>{

    return<>

    <Container className="d-flex flex-column gap-3 align-items-center">

        {champion.passive && <>
                <h2 className="text-decoration-underline">Passiva</h2>
                <div className="d-flex align-items-center gap-3 col-10">
                   
                    <div>
                        <h4>{champion.passive.name}</h4>
                        <p>{champion.passive.description}</p>
                    </div>
                </div>
            </>}

             {champion.spells && <>
                <h2 className="text-decoration-underline">Abilità</h2>
                {champion.spells.map((spell, index) => {
                    return <div key={index} className="d-flex align-items-center gap-3 col-10">
                      
                        <div>
                            <h4>{spell.name}</h4>
                            <p>{spell.description}</p>
                            <p className="text-muted">
                                <strong>Cooldown:</strong> {spell.cooldownBurn} secondi | 
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