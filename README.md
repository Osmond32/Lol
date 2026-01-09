# ⚔️ League of Legends Champions Explorer

Une application web interactive pour explorer l'univers de **League of Legends** : découvrez les champions, leurs compétences, les régions de Runeterra et testez vos connaissances sur le lore du jeu !!

---

## 🎮 Fonctionnalités

### **Explorer les Champions**
- Visualisez la liste complète de tous les champions de League of Legends
- Filtrez les champions par rôle (Mage, Tank, Fighter, Support, etc.)
- Découvrez les détails de chaque champion : compétences, statistiques, skins disponibles

### **Découvrir les Relations**
- Visualisez les alliances et rivalités entre les champions
- Lisez le lore de leurs interactions
- Naviguez facilement entre les champions liés

### **Explorer les Régions**
- Découvrez les 10 principales régions de Runeterra (Demacia, Noxus, Ionia, etc...)
- Trouvez quels champions proviennent de chaque région
- Plongez dans l'histoire de chaque lieu

### **Quiz sur le Lore**
- Testez vos connaissances avec un quiz interactif
- 15 questions sur les champions et le lore du jeu
- Recevez un score et un feedback personnalisé

### **Recherche Rapide**
- Recherchez un champion par nom ou titre
- Résultats instantanés pendant la saisie

---

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque pour les interfaces utilisateur
- **Vite** - Outil de build rapide et moderne
- **Bootstrap 5** - Framework CSS pour le design responsive
- **Axios** - Bibliothèque pour les appels HTTP
- **React Router** - Système de routage pour la navigation
- **Data Dragon API** - API officielle de Riot Games pour les données des champions

---

## 📁 Structure du Projet
```
src/
├── assets/                    # Images locales (régions)
│   └── regions/
├── components/                # Composants réutilisables
│   ├── NavBar.jsx
│   ├── ChampionCard.jsx
│   ├── RegionCard.jsx
│   ├── AbilitiesTab.jsx
│   ├── StatsTab.jsx
│   ├── SkinsTab.jsx
│   ├── RelationsTab.jsx
│   └── QuestionCard.jsx
├── pages/                     # Pages complètes
│   ├── HomePage.jsx
│   ├── ChampionsPage.jsx
│   ├── ChampionPage.jsx
│   ├── RegionsPage.jsx
│   ├── RegionPage.jsx
│   ├── QuizPage.jsx
│   ├── RelationsPage.jsx
│   └── SearchPage.jsx
├── services/                  # Logique pour API et données
│   ├── config.js
│   ├── DataDragonService.js
│   ├── ImagesService.js
│   ├── RegionsData.js
│   ├── ChampionRegionMapping.js
│   ├── ChampionRelations.js
│   └── QuizData.js
├── App.jsx                    # Composant principal avec routage
├── App.css                    # Styles globaux
└── main.jsx                   # Point d'entrée
```

---

## 🚀 Démarrage Rapide

### **Prérequis**
- Node.js (v14 ou supérieur)
- npm ou yarn

### **Installation**

1. **Cloner le repository**
```bash
   git clone https://github.com/votreusername/lol-champions-explorer.git
   cd lol-champions-explorer
```

2. **Installer les dépendances**
```bash
   npm install
```

3. **Démarrer le projet**
```bash
   npm run dev
```

4. **Ouvrir dans le navigateur**
```
   http://localhost:5173
```

---

## 📋 Pages Principales

### **🏠 HomePage**
- Page d'accueil avec fond immersif
- Boutons pour naviguer vers les sections principales
- Présentation de champions aléatoires

### **⚔️ ChampionsPage**
- Liste de tous les 160+ champions de League of Legends
- Filtre par rôle
- Barre de recherche intégrée
- Layout responsive (4 cartes sur desktop, responsive sur mobile)

### **👤 ChampionPage**
- Détails complets d'un champion
- **Compétences :** Passive, Q, W, E, R avec descriptions
- **Statistiques :** HP, Mana, Armure, Dégâts, etc.
- **Relations :** Alliés et rivaux du champion
- **Skins :** Toutes les skins disponibles
- Fond immersif avec splash art du champion

### **🗺️ RegionsPage**
- Carte des 10 régions de Runeterra
- Photo immersive de chaque région
- Informations historiques et culturelles

### **🌍 RegionPage**
- Détails d'une seule région
- Liste de tous les champions de cette région
- Header avec image de la région

### **🤝 RelationsPage**
- Visualisez toutes les relations entre champions
- Alliances (vertes) et rivalités (rouges)
- Lore des interactions

### **🎲 QuizPage**
- Quiz interactif avec 15 questions sur le lore
- Questions aléatoires à chaque partie
- Difficultés variables (facile, moyenne, difficile)
- Feedback visuel (réponse correcte/incorrecte)
- Score final avec message personnalisé

---

## 🎨 Caractéristiques de Design

### **UI/UX Moderne**
- ✨ Navbar noire élégante avec effet hover
- 🎯 Layout responsive fonctionnant sur tous les appareils
- 🖱️ Cartes interactives avec effets hover
- 🎬 Fonds immersifs avec overlays dégradés
- 📱 Design mobile-first

### **Effets Visuels**
- Transitions fluides entre éléments
- Zoom et ombre au survol
- Dégradé sur les tags des rôles
- Effet parallaxe sur les fonds
- Backdrop filter (effet verre)

---

## 🔄 Fonctionnement Technique

### **Connexion à l'API**
L'application utilise **Data Dragon API** de Riot Games pour obtenir :
- Données sur les 160+ champions
- Compétences et statistiques
- Images et splash arts

### **Organisation du Code**
- **Services :** Tous les appels API sont organisés dans des fichiers séparés
- **Components :** Composants petits et réutilisables
- **Pages :** Pages complètes utilisant les composants
- **CSS :** Styles globaux pour cohérence visuelle

### **Données Statiques**
Certaines informations ne sont pas disponibles dans l'API, donc elles ont été créées manuellement :
- **Régions :** 10 régions de Runeterra avec descriptions
- **Relations :** Mapping alliances et rivalités entre champions
- **Quiz :** 15 questions sur le lore

---

## 📱 Design Responsive

L'application s'adapte parfaitement à :
- 💻 **Desktop** (1200px+) - 4 cartes par ligne
- 📱 **Tablet** (768px-1200px) - 3 cartes par ligne
- 📲 **Mobile** (< 768px) - 1-2 cartes par ligne

---

## 🎓 Apprentissages

Si vous étudiez ce code, vous découvrirez :
- Comment intégrer une API REST dans React
- Gestion de l'état avec les Hooks (`useState`, `useEffect`)
- Routage client-side avec React Router
- Séparation des responsabilités (Services)
- Design responsive avec CSS et Bootstrap
- Composition de composants et réutilisabilité
- Gestion d'erreurs et états de chargement
- Best practices d'organisation du code

---

## 📝 Notes Importantes

### **API Data Dragon**
- ✅ API publique et gratuite
- ✅ Aucune authentification requise
- ✅ Données statiques du jeu (pas de données live)
- ℹ️ Mise à jour à chaque patch de League of Legends

### **Données Manquantes**
Certaines données ne sont pas fournies par l'API, elles ont donc été créées manuellement :
- Descriptions des régions
- Relations entre champions (alliances et rivalités)
- Quiz sur le lore

---

## 🚀 Améliorations Futures Possibles

- 🔐 Système de connexion utilisateur
- ❤️ Sauvegarder les champions favoris
- 📊 Historique du quiz
- 🌙 Mode Dark/Light
- 🎬 Animations plus élaborées (Framer Motion)
- 📦 Backend pour données persistantes
- 🧪 Tests automatisés

---

## 📄 Licence

Ce projet est un fan-made et N'EST PAS affilié à Riot Games.
League of Legends est une marque déposée de Riot Games, Inc.

Données et images de : [Data Dragon](https://developer.riotgames.com/docs/lol)

---

## 👤 Auteur

Développé comme projet de formation en React.

---

## 📞 Questions ou Suggestions ?

Si vous trouvez des bugs ou avez des suggestions, vous pouvez :
- Ouvrir une issue sur GitHub
- Me contacter directement

---

**Amusez-vous à explorer l'univers de League of Legends !** ⚔️

---

### 📌 Disclaimer

Ce projet utilise les données publiques de Riot Games via Data Dragon API.
Ce n'est pas un produit officiel et il est créé uniquement à des fins éducatives.

*League of Legends Champions Explorer n'est pas approuvé par Riot Games et ne reflète pas les vues ou opinions de Riot Games ou de toute personne officiellement impliquée dans la production ou la gestion des propriétés de Riot Games. Riot Games et toutes les propriétés associées sont des marques commerciales ou des marques déposées de Riot Games, Inc.*
