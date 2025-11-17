const championRelations = {
    "Ahri": {
        allies: ["Yasuo", "Shen"],
        rivals: ["Syndra"],
        lore: "Ahri è una vastaya che cerca di scoprire le sue origini. Ha legami con Yasuo attraverso la ricerca della pace interiore."
    },
    "Yasuo": {
        allies: ["Ahri", "Taliyah"],
        rivals: ["Yone", "Riven"],
        lore: "Yasuo è un spadaccino errante accusato ingiustamente. Yone era suo fratello maggiore che ha ucciso per autodifesa."
    },
    "Yone": {
        allies: ["Shen", "Karma"],
        rivals: ["Yasuo"],
        lore: "Yone è il fratello maggiore di Yasuo, tornato dal regno degli spiriti per cacciare gli azakana."
    },
    "Garen": {
        allies: ["Lux", "JarvanIV", "Sylas"],
        rivals: ["Darius", "Katarina"],
        lore: "Garen è il Potere di Demacia. È il fratello di Lux e ha una complicata relazione con Katarina."
    },
    "Lux": {
        allies: ["Garen", "Ezreal", "Sylas"],
        rivals: [],
        lore: "Lux è una maga di Demacia che nasconde i suoi poteri. Ha una relazione complicata con Sylas."
    },
    "Darius": {
        allies: ["Draven", "Swain"],
        rivals: ["Garen"],
        lore: "Darius è la Mano di Noxus, un generale leale all'impero. È il fratello di Draven."
    },
    "Draven": {
        allies: ["Darius"],
        rivals: [],
        lore: "Draven è il fratello minore di Darius, un gladiatore narcisista di Noxus."
    },
    "Katarina": {
        allies: ["Talon", "Cassiopeia"],
        rivals: ["Garen"],
        lore: "Katarina è un'assassina di Noxus, figlia del Generale Du Couteau. È la sorella di Cassiopeia."
    },
    "Cassiopeia": {
        allies: ["Katarina"],
        rivals: ["Sivir"],
        lore: "Cassiopeia è stata trasformata in un serpente a Shurima. È la sorella di Katarina."
    },
    "Vi": {
        allies: ["Caitlyn"],
        rivals: ["Jinx"],
        lore: "Vi è una poliziotta di Piltover. Jinx è sua sorella, ma sono su fronti opposti."
    },
    "Jinx": {
        allies: [],
        rivals: ["Vi", "Caitlyn"],
        lore: "Jinx è una criminale folle di Zaun. È la sorella di Vi ma ha seguito una strada diversa."
    },
    "Caitlyn": {
        allies: ["Vi", "Jayce"],
        rivals: ["Jinx"],
        lore: "Caitlyn è lo sceriffo di Piltover, partner di Vi nella lotta al crimine."
    },
    "Azir": {
        allies: ["Sivir"],
        rivals: ["Xerath", "Renekton"],
        lore: "Azir era l'imperatore di Shurima, tradito da Xerath. Sivir è sua discendente."
    },
    "Xerath": {
        allies: [],
        rivals: ["Azir", "Nasus", "Renekton"],
        lore: "Xerath ha tradito Azir per ottenere il potere dell'Ascensione."
    },
    "Nasus": {
        allies: ["Azir"],
        rivals: ["Renekton", "Xerath"],
        lore: "Nasus è un Asceso, bibliotecario di Shurima. È il fratello di Renekton."
    },
    "Renekton": {
        allies: [],
        rivals: ["Nasus", "Azir"],
        lore: "Renekton è stato corrotto dalla follia. È il fratello di Nasus ma ora lo vede come nemico."
    },
    "Ashe": {
        allies: ["Sejuani", "Braum", "Tryndamere"],
        rivals: ["Lissandra"],
        lore: "Ashe è la Regina della Guerra del Freljord. È sposata con Tryndamere."
    },
    "Sejuani": {
        allies: ["Udyr", "Volibear"],
        rivals: ["Ashe", "Lissandra"],
        lore: "Sejuani è la leader della tribù dell'Inverno. Compete con Ashe per il controllo del Freljord."
    },
    "Lissandra": {
        allies: [],
        rivals: ["Ashe", "Sejuani", "Trundle"],
        lore: "Lissandra è un'antica strega del ghiaccio con piani oscuri per il Freljord."
    },
    "Tryndamere": {
        allies: ["Ashe"],
        rivals: ["Aatrox"],
        lore: "Tryndamere è il Re Barbaro, sposato con Ashe. Cerca vendetta contro Aatrox."
    },
    "Leona": {
        allies: ["Pantheon", "Diana"],
        rivals: [],
        lore: "Leona è l'Aspetto del Sole di Targon. Ha una relazione complicata con Diana."
    },
    "Diana": {
        allies: ["Leona"],
        rivals: [],
        lore: "Diana è l'Aspetto della Luna di Targon. Un tempo era amica di Leona."
    },
    "Rakan": {
        allies: ["Xayah", "Ahri"],
        rivals: ["Zed"],
        lore: "Rakan è un vastaya innamorato di Xayah, con cui combatte per liberare Ionia."
    },
    "Xayah": {
        allies: ["Rakan", "Ahri"],
        rivals: ["Zed"],
        lore: "Xayah è una rivoluzionaria vastaya, partner e amante di Rakan."
    },
    "Viego": {
        allies: [],
        rivals: ["Senna", "Lucian", "Gwen"],
        lore: "Viego è il Re Rovinato, responsabile della Rovina. Cerca disperatamente sua moglie Isolde."
    },
    "Senna": {
        allies: ["Lucian"],
        rivals: ["Thresh", "Viego"],
        lore: "Senna è stata liberata dalla lanterna di Thresh da suo marito Lucian."
    },
    "Lucian": {
        allies: ["Senna"],
        rivals: ["Thresh", "Viego"],
        lore: "Lucian è un cacciatore di non-morti, marito di Senna."
    },
    "Thresh": {
        allies: ["Viego"],
        rivals: ["Lucian", "Senna"],
        lore: "Thresh è un custode sadico delle Isole Ombra che ha imprigionato Senna."
    },
    "Sylas": {
        allies: ["Lux"],
        rivals: ["Garen", "JarvanIV"],
        lore: "Sylas è un rivoluzionario che vuole abbattere Demacia. Ha una connessione con Lux."
    },
    "Ekko": {
        allies: ["Vi", "Jinx"],
        rivals: [],
        lore: "Ekko è un genio di Zaun che ha inventato un dispositivo per manipolare il tempo."
    },
    "Morgana": {
        allies: [],
        rivals: ["Kayle"],
        lore: "Morgana è la sorella caduta di Kayle, che ha rifiutato l'ascensione."
    },
    "Kayle": {
        allies: [],
        rivals: ["Morgana"],
        lore: "Kayle è l'aspetto della giustizia, sorella di Morgana con cui è in conflitto."
    }
};

function getChampionRelations(championId) {
    return championRelations[championId] || null;
}

function getAllRelations() {
    return championRelations;
}

function hasRelationWith(champion1, champion2) {
    const relations = championRelations[champion1];
    if (!relations) return false;
    
    return relations.allies.includes(champion2) || relations.rivals.includes(champion2);
}

function getRelationType(champion1, champion2) {
    const relations = championRelations[champion1];
    if (!relations) return null;
    
    if (relations.allies.includes(champion2)) return "ally";
    if (relations.rivals.includes(champion2)) return "rival";
    return null;
}

export default {
    getChampionRelations,
    getAllRelations,
    hasRelationWith,
    getRelationType
}