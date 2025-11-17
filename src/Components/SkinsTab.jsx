import { Container } from "react-bootstrap"
import ImagesService from "../Services/ImagesService"

const SkinsTab = ({ champion }) => {
    return <>
        <Container className="d-flex flex-column gap-3 align-items-center">
            <h2 className="text-decoration-underline">Skins Disponibili</h2>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
                {champion.skins && champion.skins.map((skin) => {
                    return <div key={skin.num} className="text-center">
                        <img
                            src={ImagesService.getChampionSplashUrl(champion.id, skin.num)}
                            alt={skin.name}
                            style={{ width: "300px", borderRadius: "10px" }}
                        />
                        <p className="mt-2"><strong>{skin.name}</strong></p>
                    </div>
                })}
            </div>




        </Container>

    </>
}

export default SkinsTab