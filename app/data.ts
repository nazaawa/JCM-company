// Content ported verbatim from the original Claude Design prototype
// (project/JCM Conseil & Partners.dc.html — the Component class).

export const ACCENT = "#8B4513";

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
};

export const team: Member[] = [
  {
    name: "Maître Jean-Claude Mbala",
    role: "Associé fondateur",
    specialty: "Droit des affaires et arbitrage OHADA.",
    photoAlt:
      "Photo de Maître Jean-Claude Mbala — à remplacer par portrait professionnel",
  },
  {
    name: "Maître Adèle Nsimba",
    role: "Associée",
    specialty: "Droit pénal et droit du travail.",
    photoAlt:
      "Photo de Maître Adèle Nsimba — à remplacer par portrait professionnel",
  },
  {
    name: "Maître Patrick Kalonji",
    role: "Collaborateur senior",
    specialty: "Droit immobilier et foncier.",
    photoAlt:
      "Photo de Maître Patrick Kalonji — à remplacer par portrait professionnel",
  },
  {
    name: "Maître Grace Ilunga",
    role: "Collaboratrice",
    specialty: "Droit de la famille et successions.",
    photoAlt:
      "Photo de Maître Grace Ilunga — à remplacer par portrait professionnel",
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
