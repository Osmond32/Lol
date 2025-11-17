import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { Container, Tab, Tabs, } from "react-bootstrap";
import ImagesService from "../Services/ImagesService";
import AbilitiesTab from "../Components/AbilitiesTab";
import StatsTab from "../Components/StatsTab";
import SkinsTab from "../Components/SkinsTab";
import DataDragonService from "../services/DataDragonService";
import RelationsTab from "../Components/RelationsTab";


const ChampionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate;
    const [champion, setChampion] = useState({});
    const [key, setKey] = useState("abilities")

    const fetchChampion = async () => {
        try {
            const response = await DataDragonService.getChampionDetail(id);
            setChampion(response.data.data[id]);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchChampion();
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [id])





    return <>
        <div
            className="champion-page-background"
            style={{
                backgroundImage: "url(" + ImagesService.getChampionSplashUrl(champion.id) + ")"
            }} >

            <div className="champion-page-overlay">
                <Container fluid className="d-flex flex-column align-items-center gap-3 col-10">

                    <Container className="d-flex gap-4 mb-5">

                        <div className="champion-profile-image">
                            <img
                                src={ImagesService.getChampionSplashUrl(champion.id)}
                                alt={champion.name}
                                className="w-100 rounded"
                            />
                        </div>

                        <div className="champion-info-box">
                            <h1 className="champion-name">{champion.name ? champion.name : "Non disponibile"}</h1>
                            <h3 className="champion-title">{champion.title ? champion.title : ""}</h3>

                            <div className="champion-info-section">
                                <h5 className="info-label">Lore</h5>
                                <p className="info-text">
                                    {champion.lore ? champion.lore : "Non disponibile"}
                                </p>
                            </div>

                            <div className="champion-info-section">
                                <h5 className="info-label">Ruoli</h5>
                                <div className="d-flex gap-2 flex-wrap">
                                    {champion.tags ? champion.tags.map((tag, index) => {
                                        return <span key={index} className="champion-tag">{tag}</span>
                                    }) : <span>Non disponibile</span>}
                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div className="champion-info-section flex-fill">
                                    <h5 className="info-label">Tipo di risorsa</h5>
                                    <p className="info-text">{champion.partype ? champion.partype : "Non disponibile"}</p>
                                </div>

                                <div className="champion-info-section flex-fill">
                                    <h5 className="info-label">Difficoltà</h5>
                                    <p className="info-text">{champion.info ? champion.info.difficulty + "/10" : "Non disponibile"}</p>
                                </div>
                            </div>
                        </div>

                    </Container>

                    <div className="champion-tabs-container">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 col">


                            <Tab eventKey="abilities" title="Abilità">
                                <AbilitiesTab champion={champion} />
                            </Tab>
                            <Tab eventKey="stats" title="Statistiche">
                                <StatsTab champion={champion} />
                            </Tab>
                            <Tab eventKey="relations" title="Relazioni">
                                <RelationsTab champion={champion} />
                            </Tab>
                            <Tab eventKey="skins" title="Skins">
                                <SkinsTab champion={champion} />
                            </Tab>
                        </Tabs>
                    </div>


                </Container>
            </div>
        </div>
    </>;













}
export default ChampionPage;
