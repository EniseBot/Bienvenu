# Portfolio Personnel - Documentation

Portfolio en ligne moderne et minimaliste, conçu pour mettre en valeur vos projets et compétences de manière professionnelle et élégante.

## 📋 Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Personnalisation](#personnalisation)
- [Déploiement](#déploiement)
- [Structure du Projet](#structure-du-projet)
- [Technologies](#technologies)
- [Intégrations Recommandées](#intégrations-recommandées)

---

## 🎯 Aperçu

Ce portfolio est construit avec des technologies web simples mais modernes :
- **HTML5** sémantique pour la structure
- **CSS3** avec variables CSS pour le design system
- **JavaScript Vanilla** pour les interactions fluides

Le design suit des principes de minimalisme et d'élégance, sans effets kitsch ou surcharge visuelle.

---

## ✨ Fonctionnalités

- ✅ Design moderne et épuré
- ✅ Entièrement responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec smooth scroll
- ✅ Animations subtiles au scroll
- ✅ Menu hamburger pour mobile
- ✅ Cartes de projets interactives
- ✅ Formulaire de contact
- ✅ Optimisé pour les performances
- ✅ Code sémantique et accessible

---

## 🚀 Installation

### Option 1 : Utilisation locale simple

1. Clonez ou téléchargez ce repository
2. Ouvrez `index.html` dans votre navigateur

Aucune installation nécessaire ! Le site fonctionne directement.

### Option 2 : Serveur local (recommandé pour le développement)

```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js (si http-server est installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

---

## 🎨 Personnalisation

### 1. Informations Personnelles

Modifiez ces sections dans `index.html` :

#### En-tête (Hero Section)
```html
<h1 class="hero-title">Bonjour, je suis <span class="accent">Votre Nom</span></h1>
<p class="hero-subtitle">Développeur Web Full-Stack</p>
<p class="hero-description">
    Votre description personnelle...
</p>
```

#### Liens Sociaux
```html
<!-- Remplacez les URLs par les vôtres -->
<a href="https://github.com/votrepseudo">GitHub</a>
<a href="https://linkedin.com/in/votrepseudo">LinkedIn</a>
<a href="mailto:votre.email@example.com">Email</a>
```

### 2. Vos Projets

Dupliquez et modifiez les blocs `.project-card` dans la section `#projects` :

```html
<article class="project-card">
    <div class="project-image">
        <img src="./assets/votre-projet.jpg" alt="Nom du projet">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://github.com/vous/projet">Code</a>
                <a href="https://demo.com">Demo</a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Nom du Projet</h3>
        <p class="project-description">Description...</p>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
        </div>
    </div>
</article>
```

### 3. Compétences

Modifiez les compétences dans la section `#skills` :

```html
<div class="skill-category">
    <h3 class="skill-category-title">Frontend</h3>
    <div class="skill-tags">
        <span class="skill-tag">HTML5</span>
        <span class="skill-tag">CSS3</span>
        <!-- Ajoutez vos compétences -->
    </div>
</div>
```

### 4. Couleurs & Design

Modifiez les variables CSS dans `styles.css` :

```css
:root {
    /* Couleurs principales */
    --color-accent: #2563EB; /* Votre couleur d'accent */
    --color-accent-hover: #1D4ED8;

    /* Personnalisez selon vos préférences */
}
```

#### Exemples de palettes alternatives :

```css
/* Palette Verte */
--color-accent: #10B981;
--color-accent-hover: #059669;

/* Palette Violette */
--color-accent: #8B5CF6;
--color-accent-hover: #7C3AED;

/* Palette Orange */
--color-accent: #F59E0B;
--color-accent-hover: #D97706;
```

### 5. Images

Créez un dossier `assets/` et ajoutez-y :
- `profile.jpg` - Photo de profil (optionnel)
- `project1.jpg`, `project2.jpg`, etc. - Captures d'écran des projets
- `favicon.png` - Icône du site
- `og-image.jpg` - Image pour partages sociaux (1200x630px recommandé)

**Optimisation des images :**
- Format WebP pour de meilleures performances
- Compressez vos images (utilisez TinyPNG ou Squoosh)
- Tailles recommandées :
  - Projets : 800x450px
  - OG Image : 1200x630px

---

## 🌐 Déploiement

### GitHub Pages (Gratuit)

1. Créez un repository GitHub
2. Poussez votre code
3. Allez dans Settings → Pages
4. Sélectionnez la branche `main` et `/root`
5. Votre site sera disponible à `https://votrepseudo.github.io/nom-repo`

### Netlify (Gratuit, Recommandé)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez votre dossier de projet
3. Votre site est en ligne en quelques secondes !
4. Configurez un domaine personnalisé (optionnel)

**Ou via Git :**
```bash
# Connectez votre repository GitHub à Netlify
# Déploiement automatique à chaque push
```

### Vercel (Gratuit)

```bash
npm i -g vercel
vercel
```

Suivez les instructions interactives.

---

## 📁 Structure du Projet

```
portfolio/
├── index.html          # Structure HTML principale
├── styles.css          # Tous les styles
├── script.js           # Interactions JavaScript
├── PROPOSAL.md         # Document de proposition détaillée
├── README.md           # Ce fichier
└── assets/             # Images et médias (à créer)
    ├── favicon.png
    ├── og-image.jpg
    ├── profile.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

---

## 🛠️ Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Variables CSS, Flexbox, Grid, Animations
- **JavaScript (ES6+)** - Vanilla JS, Intersection Observer API
- **Google Fonts** - Inter (typographie moderne)

**Aucune dépendance externe requise** ✨

---

## 🔌 Intégrations Recommandées

### 1. Formulaire de Contact

Le formulaire est actuellement en mode simulation. Pour le rendre fonctionnel :

#### Option A : Formspree (Gratuit, Simple)

```html
<form action="https://formspree.io/f/votre-id" method="POST">
    <!-- Vos champs de formulaire -->
</form>
```

#### Option B : EmailJS (Gratuit, Personnalisable)

```javascript
// Dans script.js
emailjs.send("service_id", "template_id", formData)
    .then(() => console.log('Message envoyé !'));
```

#### Option C : Netlify Forms (Si hébergé sur Netlify)

```html
<form name="contact" method="POST" data-netlify="true">
    <!-- Vos champs -->
</form>
```

### 2. Google Analytics (Optionnel)

Ajoutez avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Mode Sombre (Optionnel)

Le code est préparé dans `script.js`. Décommentez la section "Mode sombre" pour l'activer automatiquement selon les préférences système.

---

## ✅ Checklist Avant Mise en Ligne

- [ ] Toutes les informations personnelles sont à jour
- [ ] Les liens sociaux fonctionnent
- [ ] Les images sont optimisées et chargées
- [ ] Le formulaire de contact est configuré
- [ ] Les meta tags sont remplis (SEO)
- [ ] Favicon ajouté
- [ ] Testé sur mobile et desktop
- [ ] Testé sur différents navigateurs
- [ ] Vérifié l'accessibilité (contraste, alt text)
- [ ] Google Analytics configuré (si souhaité)

---

## 📚 Ressources Utiles

- [Google Fonts](https://fonts.google.com) - Typographies
- [Heroicons](https://heroicons.com) - Icônes SVG
- [TinyPNG](https://tinypng.com) - Compression d'images
- [Coolors](https://coolors.co) - Générateur de palettes
- [Can I Use](https://caniuse.com) - Compatibilité navigateurs

---

## 🤝 Support

Pour toute question ou suggestion d'amélioration, n'hésitez pas à ouvrir une issue ou à me contacter.

---

## 📄 Licence

Ce portfolio est libre d'utilisation. Personnalisez-le à votre guise !

---

**Créé avec ❤️ et du code propre**

Bon courage pour votre portfolio ! 🚀
