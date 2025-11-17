import demaciaImg from "../assets/regions/demacia.jpg";
import noxusImg from "../assets/regions/noxus.jpg";
import freljordImg from "../assets/regions/freljord.jpg";
import ioniaImg from "../assets/regions/ionia.jpg";
import piltoverImg from "../assets/regions/piltover.jpg";
import zaunImg from "../assets/regions/zaun.jpg";
import shadowIslesImg from "../assets/regions/shadow-isles.jpg";
import bilgewaterImg from "../assets/regions/bilgewater.jpg";
import shurimaImg from "../assets/regions/shurima.jpg";
import targonImg from "../assets/regions/targon.jpg";

const regions = [
    {
        id: "demacia",
        name: "Demacia",
        description: "Un regno forte e legale, Demacia è una società autosufficiente e fieramente indipendente con una forte tradizione militare. I suoi abitanti si considerano moralmente superiori e aspirano ai più alti ideali di giustizia, onore e dovere.",
        image:demaciaImg,
        tags: ["Fighter", "Tank"]
    },
    {
        id: "noxus",
        name: "Noxus",
        description: "Noxus è un impero espansionista potente e brutale, ma rispetta la forza soprattutto. Non c'è discriminazione basata sulla razza, il genere, l'orientamento sessuale o lo stato sociale. Tutto ciò che conta è la forza e la determinazione.",
        image:noxusImg,
        tags: ["Fighter", "Assassin"]
    },
    {
        id: "freljord",
        name: "Freljord",
        description: "Il Freljord è una terra aspra e spietata. Le tribù nomadi che vivono in queste terre ghiacciate devono combattere per sopravvivere contro il freddo brutale, le tempeste violente e le bestie feroci.",
        image:freljordImg,
        tags: ["Tank", "Fighter"]
    },
    {
        id: "ionia",
        name: "Ionia",
        description: "Ionia è composta da numerose province sparse in un vasto arcipelago. La ricerca dell'equilibrio con il mondo naturale ha sempre definito la cultura e le società ioniane.",
        image:ioniaImg,
        tags: ["Assassin", "Mage"]
    },
    {
        id: "piltover",
        name: "Piltover",
        description: "Piltover è una fiorente città del progresso che si trova sulle scogliere sopra la Città Sommersa di Zaun. È conosciuta come la Città del Progresso ed è famosa per la sua maestria nella scienza e nella tecnologia.",
        image: piltoverImg,
        tags: ["Marksman", "Support"]
    },
    {
        id: "zaun",
        name: "Zaun",
        description: "Zaun è una grande città sotterranea situata nelle profonde fessure sotto Piltover. Un tempo unita a Piltover, Zaun è ora una zona separata e distinta. La maggior parte degli zaunitani vive nella povertà e nella criminalità.",
        image: zaunImg,
        tags: ["Assassin", "Tank"]
    },
    {
        id: "shadow-isles",
        name: "Isole Ombra",
        description: "Le Isole Ombra sono un luogo macabro, dove gli spettri dei morti abitano. Una misteriosa catastrofe nota come la Rovina ha trasformato queste isole un tempo bellissime in un posto dove aleggia la morte.",
        image:shadowIslesImg,
        tags: ["Mage", "Assassin"]
    },
    {
        id: "bilgewater",
        name: "Bilgewater",
        description: "Bilgewater è una città portuale dove la legge non esiste. Situata su un arcipelago di isole, è un luogo di contrabbandieri, pirati e cacciatori di tesori che sfidano la morte per il bottino.",
        image:bilgewaterImg,
        tags: ["Marksman", "Fighter"]
    },
    {
        id: "shurima",
        name: "Shurima",
        description: "Shurima era un tempo un impero glorioso e potente, ma ora è un deserto arido. Leggende parlano di città sepolte sotto la sabbia e di antichi tesori perduti nel tempo.",
        image:shurimaImg,
        tags: ["Mage", "Fighter"]
    },
    {
        id: "targon",
        name: "Targon",
        description: "Il Monte Targon è la vetta più alta di Runeterra, circondata da un alone di mistero e leggenda. Scalare Targon è una prova quasi impossibile, ma coloro che raggiungono la vetta possono incontrare gli Aspetti.",
        image:targonImg,
        tags: ["Tank", "Support"]
    }
];

function getAllRegions() {
    return regions;
}

function getRegionById(regionId) {
    return regions.find((region) => region.id === regionId);
}

export default {
    getAllRegions,
    getRegionById
}