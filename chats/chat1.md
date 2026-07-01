# JCM Conseil & Partners Kinshasa

_Started 2026-07-01 05:47 UTC_

---

## User

Tu es un designer-développeur frontend senior. Tu conçois un site vitrine 
pour JCM Conseil & Partners, cabinet d'avocats à Kinshasa (Gombe), RDC.

OBJECTIF MÉTIER
Un particulier ou un dirigeant d'entreprise à Kinshasa arrive sur ce site 
à 22h, inquiet, avec un problème juridique concret. En 10 secondes, il doit 
comprendre : « Ce cabinet peut m'aider. Ils sont ici, à Gombe. Je peux les 
joindre demain matin. » Pas de confiance abstraite — de la preuve de 
proximité et de compétence.

IDENTITÉ
- Nom : JCM Conseil & Partners
- Adresse : [À compléter — quartier précis, Gombe, Kinshasa]
- Téléphone : [À compléter — numéro RDC avec indicatif +243]
- Email : [À compléter]
- Domaines : droit des affaires/OHADA, droit pénal, droit de la famille, 
  droit immobilier, droit du travail

ARCHITECTURE DE LA PAGE (une seule page, scroll vertical)
1. Hero : pas de slider, pas de vidéo. Un bloc typographique massif avec 
   le nom du cabinet, une accroche d'une ligne qui nomme le problème 
   (ex: « Votre contrat OHADA est bloqué ? »), un CTA unique « Prendre 
   rendez-vous ». Photo d'ambiance du cabinet ou de Gombe — placeholder 
   clair si absente.
2. Domaines d'intervention : 5 domaines, présentés comme une liste 
   éditoriale numérotée (01 à 05), pas une grille de cartes identiques. 
   Chaque domaine : titre, 2 lignes de description, un détail concret 
   (ex: pour OHADA : « Acte uniforme relatif au droit commercial général »).
3. L'équipe : 3 à 4 avocats max. Format portrait vertical, nom + fonction 
   + une phrase de spécialité. Pas de photo générée par IA — placeholder 
   textuel explicite : « Photo de Maître [Nom], à remplacer par portrait 
   professionnel ».
4. Honoraires : UNE SEULE section, présentée comme un tableau clair 
   (prestation / fourchette / délai estimé). PAS de panier, PAS de 
   bouton « acheter », PAS de prix fixe sans contexte. Mentionner 
   « Honoraires modulés selon complexité — première consultation sur 
   rendez-vous ».
5. À propos : 3 paragraphes max. Le cabinet en 1998 ? En 2015 ? 
   L'expérience OHADA ? Kinshasa comme terrain d'expertise. Pas de 
   « passionnés par le droit ».
6. Contact : formulaire minimal (nom, email, téléphone, sujet, message), 
   carte de localisation (OpenStreetMap ou iframe Google Maps avec 
   coordonnées réelles de Gombe), horaires d'ouverture, numéro de 
   téléphone cliquable sur mobile.

DIRECTION ARTISTIQUE
- Palette : sombre ou très clair, pas de milieu. Si sombre : fond 
  #0A0A0C, texte #F5F2EB, accent #C9A96E (or mat — référence institution 
  africaine, pas doré clinquant). Si clair : fond #F7F5F0, texte #1A1A1A, 
  accent #8B4513 (terre de Sienne).
- Typographie : serif pour les titres (Canela, Source Serif Pro ou 
  équivalent — autorité, tradition juridique), sans-serif propre pour 
  le corps (Inter, Geist). Pas de typography display grotesque — ce n'est 
  pas un portfolio tech.
- Layout : grille stricte, beaucoup de vide, lignes fines 1px comme 
  séparateurs. Pas de cartes arrondies, pas d'ombres portées, pas de 
  glassmorphism.
- Motion : aucune. Ou presque. Un hover discret sur les liens 
  (soulignement qui glisse). Respect strict de prefers-reduced-motion.

ANTI-PATTERNS (interdits)
- Pas de slider hero auto-play
- Pas de compteur d'années d'expérience en gros chiffres
- Pas de témoignages clients sans source
- Pas de photo de poignée de main ou de balance de la justice 
  générée par IA
- Pas de langue anglaise mêlée au français
- Pas de prix sans fourchette ni contexte
- Pas de « Nous sommes une équipe dynamique et passionnée »

CONTRAINTES TECHNIQUES
- HTML + CSS + JS vanilla. Pas de framework. Un seul fichier HTML 
  autonome, responsive (mobile-first).
- Aucune dépendance externe sauf police web (Google Fonts) et carte 
  (OpenStreetMap iframe).
- Accessible : contraste AA minimum, focus visibles, labels de 
  formulaire explicites, aria-labels sur les liens et boutons.
- Performance : pas d'image lourde, pas de CLS, pas de font-display 
  block.

VARIATIONS DEMANDÉES
Proposer 2 versions de la section honoraires :
- Version A : tableau horizontal (prestation | fourchette basse | 
  fourchette haute | délai)
- Version B : liste verticale éditoriale (numérotée 01 à 05, chaque 
  prestation comme un bloc avec détails)

CONTENU
Tout le texte en français. Aucune section vide. Si une information 
est manquante (adresse exacte, numéro de téléphone, nom des avocats), 
utiliser un placeholder explicite et réaliste : 
« [Adresse complète du cabinet, Gombe] » — pas de « Lorem ipsum ».

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- palette: Claire (#F7F5F0 / #1A1A1A / terre de Sienne #8B4513)
- honoraires_presentation: Décide pour moi
- police_serif: Newsreader
- identite_visuelle: Monogramme simple « JCM » + wordmark
- carte: OpenStreetMap centré sur Gombe (générique)

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

