// Content ported verbatim from the original Claude Design prototype
// (project/JCM Conseil & Partners.dc.html — the Component class).

export const ACCENT = "#8B4513";

// --- Imagery (Lorem Picsum) -----------------------------------------------
// Placeholder photos from Lorem Picsum (https://picsum.photos). Seeded URLs
// are deterministic and always resolve — no API key required. Grayscale keeps
// the imagery sober and consistent with the firm's warm, minimal palette.
//
// NOTE: this build sandbox blocks external image hosts, so images can't be
// render-tested here — they load fine once the site runs outside the sandbox.
// Each <FallbackImage> degrades to the original placeholder if a URL fails.
// Swap any photo by changing its seed, or point src at a real photo later.
export const picsumSrc = (seed: string, w: number, h: number, grayscale = true) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${grayscale ? "?grayscale" : ""}`;

export const heroImage = {
  seed: "jcm-cabinet-gombe",
  alt: "Ambiance du cabinet — image de démonstration (Lorem Picsum), à remplacer par une photo réelle de Gombe, Kinshasa",
  src: picsumSrc("jcm-cabinet-gombe", 900, 1125),
};

export type Domain = {
  num: string;
  title: string;
  desc: string;
  detail: string;
};

export const domains: Domain[] = [
  {
    num: "01",
    title: "Droit des affaires & OHADA",
    desc: "Constitution et restructuration de sociétés, rédaction et négociation de contrats commerciaux, sûretés, contentieux entre associés.",
    detail: "Réf. : Acte uniforme relatif au droit commercial général (AUDCG)",
  },
  {
    num: "02",
    title: "Droit pénal",
    desc: "Assistance dès la garde à vue, suivi de l'instruction, représentation devant les juridictions répressives.",
    detail: "Réf. : Code de procédure pénale congolais",
  },
  {
    num: "03",
    title: "Droit de la famille",
    desc: "Divorce, filiation, régimes matrimoniaux, successions et partages, y compris volets transfrontaliers.",
    detail: "Réf. : Code de la famille (Loi n°87-010 du 1er août 1987)",
  },
  {
    num: "04",
    title: "Droit immobilier",
    desc: "Sécurisation de titres fonciers, baux commerciaux et d'habitation, litiges de voisinage et d'occupation.",
    detail:
      "Réf. : Loi n°73-021 du 20 juillet 1973 portant régime foncier et immobilier",
  },
  {
    num: "05",
    title: "Droit du travail",
    desc: "Contrats de travail, procédures de licenciement, contentieux devant le tribunal du travail.",
    detail: "Réf. : Code du travail (Loi n°015/2002 du 16 octobre 2002)",
  },
];

export type Member = {
  name: string;
  role: string;
  specialty: string;
  photoAlt: string;
  photoSeed: string;
};

export const team: Member[] = [
  {
    name: "Maître Jean-Claude Mbala",
    role: "Associé fondateur",
    specialty: "Droit des affaires et arbitrage OHADA.",
    photoAlt:
      "Photo de Maître Jean-Claude Mbala — à remplacer par portrait professionnel",
    photoSeed: "jcm-mbala",
  },
  {
    name: "Maître Adèle Nsimba",
    role: "Associée",
    specialty: "Droit pénal et droit du travail.",
    photoAlt:
      "Photo de Maître Adèle Nsimba — à remplacer par portrait professionnel",
    photoSeed: "jcm-nsimba",
  },
  {
    name: "Maître Patrick Kalonji",
    role: "Collaborateur senior",
    specialty: "Droit immobilier et foncier.",
    photoAlt:
      "Photo de Maître Patrick Kalonji — à remplacer par portrait professionnel",
    photoSeed: "jcm-kalonji",
  },
  {
    name: "Maître Grace Ilunga",
    role: "Collaboratrice",
    specialty: "Droit de la famille et successions.",
    photoAlt:
      "Photo de Maître Grace Ilunga — à remplacer par portrait professionnel",
    photoSeed: "jcm-ilunga",
  },
];

export type Fee = {
  num: string;
  service: string;
  low: string;
  high: string;
  delay: string;
  detail: string;
};

export const fees: Fee[] = [
  {
    num: "01",
    service: "Consultation juridique initiale",
    low: "100 USD",
    high: "200 USD",
    delay: "Sous 1 semaine",
    detail:
      "Analyse du dossier, qualification juridique et recommandation de stratégie — préalable à toute prise de mandat.",
  },
  {
    num: "02",
    service: "Constitution de société (OHADA)",
    low: "800 USD",
    high: "2 500 USD",
    delay: "3 à 6 semaines",
    detail:
      "Rédaction des statuts, formalités RCCM, accompagnement jusqu'à l'immatriculation définitive.",
  },
  {
    num: "03",
    service: "Contentieux commercial (par instance)",
    low: "1 500 USD",
    high: "6 000 USD",
    delay: "6 à 18 mois",
    detail:
      "Représentation devant le tribunal de commerce, d'une instance à son terme, hors voies de recours.",
  },
  {
    num: "04",
    service: "Assistance pénale (garde à vue à instruction)",
    low: "1 000 USD",
    high: "4 000 USD",
    delay: "Variable selon la procédure",
    detail:
      "Assistance dès l'interpellation, suivi de l'instruction et représentation à l'audience.",
  },
  {
    num: "05",
    service: "Dossier de droit de la famille",
    low: "500 USD",
    high: "2 000 USD",
    delay: "2 à 8 mois",
    detail:
      "Divorce, succession ou filiation — de la consultation initiale au jugement définitif.",
  },
];
