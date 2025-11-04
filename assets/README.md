# Dossier Assets - Images et Médias

Ce dossier contient tous les fichiers médias de votre portfolio.

## 📸 Images Requises

### 1. Favicon
- **Nom** : `favicon.png`
- **Dimensions** : 32x32px ou 64x64px
- **Format** : PNG avec transparence
- **Utilisation** : Icône du navigateur

### 2. Photo de Profil (Optionnel)
- **Nom** : `profile.jpg`
- **Dimensions** : 400x400px minimum
- **Format** : JPG ou WebP
- **Utilisation** : Section "À propos"

### 3. Images de Projets
- **Noms** : `project1.jpg`, `project2.jpg`, etc.
- **Dimensions** : 800x450px (ratio 16:9)
- **Format** : JPG ou WebP
- **Poids** : < 200KB après compression
- **Utilisation** : Cartes de projets

### 4. Image Open Graph
- **Nom** : `og-image.jpg`
- **Dimensions** : 1200x630px
- **Format** : JPG
- **Utilisation** : Partages sur réseaux sociaux (Twitter, LinkedIn, Facebook)

## 🛠️ Outils Recommandés

### Compression d'Images
- [TinyPNG](https://tinypng.com) - Compression PNG/JPG
- [Squoosh](https://squoosh.app) - Outil Google
- [ImageOptim](https://imageoptim.com) - Mac

### Conversion WebP
```bash
# Avec cwebp (Google)
cwebp -q 80 image.jpg -o image.webp
```

### Redimensionnement
- [BIRME](https://www.birme.net) - Redimensionnement par lot
- Photoshop / GIMP

## 📋 Structure Recommandée

```
assets/
├── favicon.png          # Favicon du site
├── og-image.jpg         # Image pour partages sociaux
├── profile.jpg          # Photo de profil (optionnel)
├── project1.jpg         # Capture projet 1
├── project2.jpg         # Capture projet 2
├── project3.jpg         # Capture projet 3
└── README.md            # Ce fichier
```

## ✅ Checklist

- [ ] Toutes les images sont optimisées (< 200KB)
- [ ] Les dimensions correspondent aux recommandations
- [ ] Les noms de fichiers correspondent à ceux dans `index.html`
- [ ] Les images ont des `alt` descriptions dans le HTML
- [ ] Testé le chargement sur connexion lente

## 💡 Conseils

1. **Utilisez WebP** : Format moderne, meilleur ratio qualité/poids
2. **Lazy loading** : Déjà implémenté dans le HTML avec `loading="lazy"`
3. **Texte alternatif** : Important pour l'accessibilité et le SEO
4. **Noms descriptifs** : `portfolio-app.jpg` plutôt que `img1.jpg`

---

**Note** : Ce dossier contient actuellement uniquement ce README. Ajoutez vos images selon les instructions ci-dessus.
