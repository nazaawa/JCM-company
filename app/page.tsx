"use client";

import { CSSProperties, useState } from "react";
import { ACCENT, domains, team, fees } from "./data";

const serif: CSSProperties = { fontFamily: "var(--font-serif)" };
const mono: CSSProperties = { fontFamily: "var(--font-mono)" };

export default function Home() {
  const [view, setView] = useState<"tableau" | "editorial">("tableau");
  const [submitted, setSubmitted] = useState(false);

  const isTableau = view === "tableau";
  const isEditorial = !isTableau;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "#F7F5F0F2",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(26,26,26,0.12)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "18px clamp(20px,4vw,56px)",
        }}
      >
        <a
          href="#hero"
          aria-label="JCM Conseil et Partners, retour en haut de page"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "#1A1A1A",
          }}
        >
          <span
            style={{
              ...serif,
              width: 44,
              height: 44,
              flex: "none",
              border: `1.5px solid ${ACCENT}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.02em",
            }}
          >
            JCM
          </span>
          <span
            style={{
              ...serif,
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            Conseil &amp; Partners
          </span>
        </a>
        <nav
          aria-label="Navigation principale"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(16px,3vw,32px)",
            fontSize: 14,
          }}
        >
          <a href="#domaines" className="link-underline">
            Domaines
          </a>
          <a href="#equipe" className="link-underline">
            Équipe
          </a>
          <a href="#honoraires" className="link-underline">
            Honoraires
          </a>
          <a href="#apropos" className="link-underline">
            À propos
          </a>
          <a href="#contact" className="link-underline">
            Contact
          </a>
          <a
            href="tel:+243800000000"
            aria-label="Appeler le cabinet, numéro provisoire"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              color: ACCENT,
              whiteSpace: "nowrap",
            }}
          >
            +243 8XX XXX XXX
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="hero"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1.15fr) minmax(280px,0.85fr)",
          gap: "clamp(28px,5vw,64px)",
          alignItems: "center",
          padding:
            "clamp(56px,9vw,120px) clamp(20px,4vw,56px) clamp(64px,8vw,96px)",
          maxWidth: 1360,
          margin: "0 auto",
        }}
        className="hero"
      >
        <div>
          <p
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.55)",
              margin: "0 0 20px",
            }}
          >
            Cabinet d&apos;avocats — Gombe, Kinshasa
          </p>
          <h1
            style={{
              ...serif,
              fontWeight: 500,
              fontSize: "clamp(2.4rem,5.4vw,4.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              margin: "0 0 28px",
            }}
          >
            Votre société est bloquée par un litige commercial&nbsp;?
          </h1>
          <p
            style={{
              fontSize: "clamp(16px,1.7vw,19px)",
              maxWidth: "46ch",
              color: "rgba(26,26,26,0.75)",
              margin: "0 0 40px",
            }}
          >
            JCM Conseil &amp; Partners assiste dirigeants d&apos;entreprise et
            particuliers en droit des affaires (OHADA), droit pénal, droit de la
            famille, droit immobilier et droit du travail — à Gombe, au cœur des
            juridictions de Kinshasa.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 24,
            }}
          >
            <a
              href="#contact"
              className="btn-solid"
              style={{
                display: "inline-block",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                padding: "16px 32px",
              }}
            >
              Prendre rendez-vous
            </a>
            <a
              href="#domaines"
              className="link-underline"
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              Voir nos domaines d&apos;intervention
            </a>
          </div>
        </div>
        <div
          role="img"
          aria-label="Emplacement réservé — photo d'ambiance du cabinet ou du quartier de Gombe, Kinshasa, à intégrer"
          style={{
            position: "relative",
            aspectRatio: "4/5",
            width: "100%",
            border: "1px solid rgba(26,26,26,0.15)",
            overflow: "hidden",
            background: "#F7F5F0",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 500"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <defs>
              <pattern
                id="heroStripe"
                width="18"
                height="18"
                patternTransform="rotate(45)"
                patternUnits="userSpaceOnUse"
              >
                <rect width="18" height="18" fill="#F1EBDD" />
                <rect width="9" height="18" fill="#E7DFCC" />
              </pattern>
            </defs>
            <rect width="400" height="500" fill="url(#heroStripe)" />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: 24,
            }}
          >
            <span
              style={{
                ...mono,
                fontSize: 12,
                letterSpacing: "0.04em",
                color: "rgba(26,26,26,0.55)",
                background: "#F7F5F0",
                padding: "8px 12px",
                border: "1px solid rgba(26,26,26,0.15)",
              }}
            >
              photo — façade ou salle de réception
              <br />
              du cabinet, Gombe, Kinshasa
            </span>
          </div>
        </div>
      </section>

      {/* DOMAINES */}
      <section
        id="domaines"
        style={{
          padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)",
          maxWidth: 1080,
          margin: "0 auto",
          borderTop: "1px solid rgba(26,26,26,0.12)",
        }}
      >
        <h2
          style={{
            ...serif,
            fontWeight: 500,
            fontSize: "clamp(1.8rem,3.2vw,2.6rem)",
            margin: "0 0 12px",
          }}
        >
          Domaines d&apos;intervention
        </h2>
        <p
          style={{
            color: "rgba(26,26,26,0.6)",
            maxWidth: "56ch",
            margin: "0 0 56px",
            fontSize: 16,
          }}
        >
          Cinq pratiques, traitées avec la même rigueur procédurale — de la
          consultation initiale à la représentation devant les juridictions
          compétentes.
        </p>
        <div>
          {domains.map((d) => (
            <div
              key={d.num}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                gap: "clamp(16px,3vw,32px)",
                padding: "32px 0",
                borderTop: "1px solid rgba(26,26,26,0.12)",
              }}
            >
              <span
                style={{
                  ...serif,
                  fontSize: 15,
                  color: ACCENT,
                  fontWeight: 500,
                  paddingTop: 4,
                }}
              >
                {d.num}
              </span>
              <div>
                <h3
                  style={{
                    ...serif,
                    fontWeight: 500,
                    fontSize: "clamp(1.15rem,1.8vw,1.5rem)",
                    margin: "0 0 10px",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 12px",
                    color: "rgba(26,26,26,0.75)",
                    maxWidth: "62ch",
                    fontSize: "15.5px",
                  }}
                >
                  {d.desc}
                </p>
                <p
                  style={{
                    ...mono,
                    margin: 0,
                    fontSize: "13.5px",
                    color: "rgba(26,26,26,0.55)",
                  }}
                >
                  {d.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPE */}
      <section
        id="equipe"
        style={{
          padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)",
          background: "#EFEBE1",
          borderTop: "1px solid rgba(26,26,26,0.12)",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <h2
            style={{
              ...serif,
              fontWeight: 500,
              fontSize: "clamp(1.8rem,3.2vw,2.6rem)",
              margin: "0 0 12px",
            }}
          >
            L&apos;équipe
          </h2>
          <p
            style={{
              color: "rgba(26,26,26,0.6)",
              maxWidth: "56ch",
              margin: "0 0 48px",
              fontSize: 16,
            }}
          >
            Une équipe restreinte, chaque dossier suivi directement par un
            associé ou un collaborateur senior.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "clamp(24px,3vw,40px)",
            }}
          >
            {team.map((member) => (
              <div key={member.name}>
                <div
                  role="img"
                  aria-label={member.photoAlt}
                  style={{
                    aspectRatio: "3/4",
                    border: "1px solid rgba(26,26,26,0.18)",
                    background: "#F7F5F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 18,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      ...mono,
                      fontSize: "11.5px",
                      lineHeight: 1.5,
                      color: "rgba(26,26,26,0.55)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {member.photoAlt}
                  </span>
                </div>
                <h3
                  style={{
                    ...serif,
                    fontWeight: 500,
                    fontSize: 18,
                    margin: "0 0 4px",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "13.5px",
                    color: ACCENT,
                    fontWeight: 500,
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14.5px",
                    color: "rgba(26,26,26,0.7)",
                  }}
                >
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONORAIRES */}
      <section
        id="honoraires"
        style={{
          padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)",
          maxWidth: 1080,
          margin: "0 auto",
          borderTop: "1px solid rgba(26,26,26,0.12)",
        }}
      >
        <h2
          style={{
            ...serif,
            fontWeight: 500,
            fontSize: "clamp(1.8rem,3.2vw,2.6rem)",
            margin: "0 0 12px",
          }}
        >
          Honoraires
        </h2>
        <p
          style={{
            color: "rgba(26,26,26,0.75)",
            maxWidth: "64ch",
            margin: "0 0 8px",
            fontSize: 16,
          }}
        >
          Honoraires modulés selon la complexité du dossier — première
          consultation sur rendez-vous.
        </p>
        <p
          style={{
            color: "rgba(26,26,26,0.55)",
            maxWidth: "64ch",
            margin: "0 0 40px",
            fontSize: 14,
          }}
        >
          Les fourchettes ci-dessous sont indicatives et arrêtées définitivement
          lors de l&apos;entretien initial, en fonction du volume de travail et
          de l&apos;urgence du dossier.
        </p>

        <div
          role="tablist"
          aria-label="Format d'affichage des honoraires"
          style={{
            display: "inline-flex",
            gap: 4,
            border: "1px solid rgba(26,26,26,0.2)",
            padding: 4,
            marginBottom: 36,
          }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={isTableau}
            onClick={() => setView("tableau")}
            style={{
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: "13.5px",
              fontWeight: 500,
              padding: "9px 18px",
              background: isTableau ? "#1A1A1A" : "transparent",
              color: isTableau ? "#F7F5F0" : "#1A1A1A",
            }}
          >
            Vue tableau
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isEditorial}
            onClick={() => setView("editorial")}
            style={{
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: "13.5px",
              fontWeight: 500,
              padding: "9px 18px",
              background: isEditorial ? "#1A1A1A" : "transparent",
              color: isEditorial ? "#F7F5F0" : "#1A1A1A",
            }}
          >
            Vue éditoriale
          </button>
        </div>

        {isTableau && (
          <div
            style={{
              overflowX: "auto",
              borderTop: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 560,
              }}
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      ...serif,
                      textAlign: "left",
                      fontWeight: 500,
                      fontSize: "14.5px",
                      padding: "14px 12px 14px 0",
                      borderBottom: "1px solid rgba(26,26,26,0.2)",
                    }}
                  >
                    Prestation
                  </th>
                  <th
                    scope="col"
                    style={{
                      ...serif,
                      textAlign: "left",
                      fontWeight: 500,
                      fontSize: "14.5px",
                      padding: "14px 12px",
                      borderBottom: "1px solid rgba(26,26,26,0.2)",
                    }}
                  >
                    Fourchette basse
                  </th>
                  <th
                    scope="col"
                    style={{
                      ...serif,
                      textAlign: "left",
                      fontWeight: 500,
                      fontSize: "14.5px",
                      padding: "14px 12px",
                      borderBottom: "1px solid rgba(26,26,26,0.2)",
                    }}
                  >
                    Fourchette haute
                  </th>
                  <th
                    scope="col"
                    style={{
                      ...serif,
                      textAlign: "left",
                      fontWeight: 500,
                      fontSize: "14.5px",
                      padding: "14px 0 14px 12px",
                      borderBottom: "1px solid rgba(26,26,26,0.2)",
                    }}
                  >
                    Délai estimé
                  </th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f) => (
                  <tr key={f.num}>
                    <td
                      style={{
                        padding: "16px 12px 16px 0",
                        borderBottom: "1px solid rgba(26,26,26,0.1)",
                        fontSize: 15,
                      }}
                    >
                      {f.service}
                    </td>
                    <td
                      style={{
                        padding: "16px 12px",
                        borderBottom: "1px solid rgba(26,26,26,0.1)",
                        fontSize: 15,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {f.low}
                    </td>
                    <td
                      style={{
                        padding: "16px 12px",
                        borderBottom: "1px solid rgba(26,26,26,0.1)",
                        fontSize: 15,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {f.high}
                    </td>
                    <td
                      style={{
                        padding: "16px 0 16px 12px",
                        borderBottom: "1px solid rgba(26,26,26,0.1)",
                        fontSize: 15,
                        color: "rgba(26,26,26,0.7)",
                      }}
                    >
                      {f.delay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isEditorial && (
          <div>
            {fees.map((f) => (
              <div
                key={f.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: "clamp(16px,3vw,32px)",
                  padding: "28px 0",
                  borderTop: "1px solid rgba(26,26,26,0.12)",
                }}
              >
                <span
                  style={{
                    ...serif,
                    fontSize: 15,
                    color: ACCENT,
                    fontWeight: 500,
                    paddingTop: 2,
                  }}
                >
                  {f.num}
                </span>
                <div>
                  <h3
                    style={{
                      ...serif,
                      fontWeight: 500,
                      fontSize: 18,
                      margin: "0 0 8px",
                    }}
                  >
                    {f.service}
                  </h3>
                  <p
                    style={{
                      margin: "0 0 8px",
                      color: "rgba(26,26,26,0.75)",
                      fontSize: 15,
                      maxWidth: "58ch",
                    }}
                  >
                    {f.detail}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13.5px",
                      color: "rgba(26,26,26,0.55)",
                    }}
                  >
                    Fourchette : {f.low} – {f.high} · Délai estimé : {f.delay}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* A PROPOS */}
      <section
        id="apropos"
        style={{
          padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)",
          background: "#EFEBE1",
          borderTop: "1px solid rgba(26,26,26,0.12)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{
              ...serif,
              fontWeight: 500,
              fontSize: "clamp(1.8rem,3.2vw,2.6rem)",
              margin: "0 0 32px",
            }}
          >
            À propos du cabinet
          </h2>
          <p
            style={{
              fontSize: "16.5px",
              color: "rgba(26,26,26,0.8)",
              margin: "0 0 22px",
            }}
          >
            Fondé en 2011 à Kinshasa, JCM Conseil &amp; Partners s&apos;est
            construit autour d&apos;une conviction simple&nbsp;: un dossier
            juridique se traite avec la même exigence, qu&apos;il s&apos;agisse
            d&apos;un contrat de plusieurs millions de dollars ou d&apos;une
            succession familiale. Le cabinet réunit associés et collaborateurs
            autour de cette exigence commune.
          </p>
          <p
            style={{
              fontSize: "16.5px",
              color: "rgba(26,26,26,0.8)",
              margin: "0 0 22px",
            }}
          >
            Notre pratique du droit des affaires s&apos;est bâtie dans
            l&apos;espace OHADA, depuis l&apos;entrée en vigueur des actes
            uniformes jusqu&apos;à leurs révisions successives&nbsp;:
            constitution de sociétés, sûretés, procédures collectives,
            contentieux entre associés. Cette continuité nous permet
            d&apos;anticiper les points de friction plutôt que de les découvrir
            en audience.
          </p>
          <p
            style={{
              fontSize: "16.5px",
              color: "rgba(26,26,26,0.8)",
              margin: 0,
            }}
          >
            Gombe concentre les juridictions commerciales, les sièges sociaux et
            les administrations de la capitale&nbsp;: c&apos;est un terrain que
            nous connaissons dossier après dossier, pas seulement sur le papier.
            Cette proximité géographique se traduit par des délais de traitement
            plus courts et un accès direct aux greffes et aux registres.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)",
          maxWidth: 1160,
          margin: "0 auto",
          borderTop: "1px solid rgba(26,26,26,0.12)",
        }}
      >
        <h2
          style={{
            ...serif,
            fontWeight: 500,
            fontSize: "clamp(1.8rem,3.2vw,2.6rem)",
            margin: "0 0 12px",
          }}
        >
          Contact
        </h2>
        <p
          style={{
            color: "rgba(26,26,26,0.6)",
            maxWidth: "56ch",
            margin: "0 0 48px",
            fontSize: 16,
          }}
        >
          Décrivez brièvement votre dossier — nous revenons vers vous sous 24
          heures ouvrées pour convenir d&apos;un rendez-vous.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "clamp(32px,5vw,64px)",
          }}
        >
          <form
            aria-label="Formulaire de contact"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="jcm-nom"
                style={{ fontSize: "13.5px", fontWeight: 500 }}
              >
                Nom complet
              </label>
              <input
                id="jcm-nom"
                name="nom"
                type="text"
                required
                aria-required="true"
                style={inputStyle}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="jcm-email"
                style={{ fontSize: "13.5px", fontWeight: 500 }}
              >
                Adresse email
              </label>
              <input
                id="jcm-email"
                name="email"
                type="email"
                required
                aria-required="true"
                style={inputStyle}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="jcm-tel"
                style={{ fontSize: "13.5px", fontWeight: 500 }}
              >
                Téléphone
              </label>
              <input
                id="jcm-tel"
                name="telephone"
                type="tel"
                style={inputStyle}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="jcm-sujet"
                style={{ fontSize: "13.5px", fontWeight: 500 }}
              >
                Sujet
              </label>
              <select id="jcm-sujet" name="sujet" style={inputStyle}>
                <option value="affaires">Droit des affaires / OHADA</option>
                <option value="penal">Droit pénal</option>
                <option value="famille">Droit de la famille</option>
                <option value="immobilier">Droit immobilier</option>
                <option value="travail">Droit du travail</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="jcm-message"
                style={{ fontSize: "13.5px", fontWeight: 500 }}
              >
                Message
              </label>
              <textarea
                id="jcm-message"
                name="message"
                rows={5}
                required
                aria-required="true"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              className="btn-solid"
              style={{
                alignSelf: "flex-start",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 500,
                padding: "15px 32px",
              }}
            >
              Envoyer la demande
            </button>
            <p
              role="status"
              aria-live="polite"
              style={{
                margin: "4px 0 0",
                fontSize: 14,
                color: ACCENT,
                minHeight: 20,
              }}
            >
              {submitted
                ? "Merci — votre demande a bien été enregistrée. Nous revenons vers vous sous 24 heures ouvrées."
                : ""}
            </p>
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <h3
                style={{
                  ...serif,
                  fontWeight: 500,
                  fontSize: 16,
                  margin: "0 0 14px",
                }}
              >
                Coordonnées
              </h3>
              <p style={{ margin: "0 0 6px", fontSize: 15 }}>
                [Adresse complète du cabinet — avenue et numéro], Gombe, Kinshasa
                — RDC
              </p>
              <p style={{ margin: "0 0 6px", fontSize: 15 }}>
                <a
                  href="tel:+243800000000"
                  aria-label="Appeler le cabinet, numéro provisoire"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "rgba(26,26,26,0.3)",
                  }}
                >
                  +243 8XX XXX XXX
                </a>
              </p>
              <p style={{ margin: "0 0 14px", fontSize: 15 }}>
                [adresse email du cabinet]
              </p>
              <p
                style={{
                  ...mono,
                  margin: 0,
                  fontSize: "12.5px",
                  color: "rgba(26,26,26,0.5)",
                }}
              >
                coordonnées provisoires — à remplacer avant mise en ligne
              </p>
            </div>
            <div>
              <h3
                style={{
                  ...serif,
                  fontWeight: 500,
                  fontSize: 16,
                  margin: "0 0 14px",
                }}
              >
                Horaires d&apos;ouverture
              </h3>
              <p style={hoursRow}>
                <span>Lundi – Vendredi</span>
                <span>8h30 – 17h30</span>
              </p>
              <p style={hoursRow}>
                <span>Samedi</span>
                <span>9h00 – 13h00*</span>
              </p>
              <p style={{ ...hoursRow, margin: 0 }}>
                <span>Dimanche</span>
                <span>Fermé</span>
              </p>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "12.5px",
                  color: "rgba(26,26,26,0.5)",
                }}
              >
                *sur rendez-vous uniquement
              </p>
            </div>
            <div
              style={{
                border: "1px solid rgba(26,26,26,0.15)",
                aspectRatio: "4/3",
                overflow: "hidden",
              }}
            >
              <iframe
                title="Localisation approximative du cabinet, Gombe, Kinshasa"
                aria-label="Carte OpenStreetMap centrée sur le quartier de la Gombe à Kinshasa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=15.2820%2C-4.3400%2C15.3480%2C-4.2820&layer=mapnik&marker=-4.3084%2C15.3122"
                style={{ width: "100%", height: "100%", border: "none" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px clamp(20px,4vw,56px)",
          borderTop: "1px solid rgba(26,26,26,0.12)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          fontSize: 13,
          color: "rgba(26,26,26,0.55)",
        }}
      >
        <span>JCM Conseil &amp; Partners — Gombe, Kinshasa, RDC</span>
        <span>© 2026 — Tous droits réservés</span>
      </footer>
    </div>
  );
}

const inputStyle: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  padding: "12px 14px",
  border: "1px solid rgba(26,26,26,0.25)",
  background: "#F7F5F0",
  color: "#1A1A1A",
};

const hoursRow: CSSProperties = {
  margin: "0 0 4px",
  fontSize: 15,
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 280,
};
