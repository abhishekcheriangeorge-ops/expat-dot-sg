export const REVIEWED = "2026-09-14";

export const C = {
  momEp: {
    label: "MOM — Employment Pass",
    url: "https://www.mom.gov.sg/passes-and-permits/employment-pass",
  },
  momSpass: {
    label: "MOM — S Pass",
    url: "https://www.mom.gov.sg/passes-and-permits/s-pass",
  },
  momEntre: {
    label: "MOM — EntrePass",
    url: "https://www.mom.gov.sg/passes-and-permits/entrepass",
  },
  momDp: {
    label: "MOM — Dependant's Pass",
    url: "https://www.mom.gov.sg/passes-and-permits/dependant-pass",
  },
  momLtvp: {
    label: "ICA — Long-Term Visit Pass",
    url: "https://www.ica.gov.sg/reside/LTVP",
  },
  momStudent: {
    label: "ICA — Student's Pass",
    url: "https://www.ica.gov.sg/reside/studentpass",
  },
  momCompass: {
    label: "MOM — COMPASS framework",
    url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility",
  },
  momWork: {
    label: "MOM — Work passes overview",
    url: "https://www.mom.gov.sg/passes-and-permits",
  },
  momFdw: {
    label: "MOM — Foreign domestic worker",
    url: "https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker",
  },
  ica: {
    label: "Immigration & Checkpoints Authority (ICA)",
    url: "https://www.ica.gov.sg/",
  },
  icaPr: {
    label: "ICA — Permanent Residence",
    url: "https://www.ica.gov.sg/reside/PR",
  },
  icaCitizen: {
    label: "ICA — Singapore Citizenship",
    url: "https://www.ica.gov.sg/reside/citizenship",
  },
  iras: {
    label: "IRAS — Individual income tax",
    url: "https://www.iras.gov.sg/taxes/individual-income-tax",
  },
  irasRes: {
    label: "IRAS — Tax residency",
    url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individuals-(tax-residency)",
  },
  irasClear: {
    label: "IRAS — Tax clearance for foreigners",
    url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/individuals-(foreigners)-tax-clearance",
  },
  irasSrs: {
    label: "IRAS — Supplementary Retirement Scheme (SRS)",
    url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-reliefs-rebates-and-deductions/tax-reliefs/supplementary-retirement-scheme-(srs)",
  },
  avaPets: {
    label: "NParks / AVS — Bringing pets into Singapore",
    url: "https://www.nparks.gov.sg/avs/pets/bringing-animals-into-singapore/bringing-pets-into-singapore",
  },
  tpDriving: {
    label: "Traffic Police — Convert foreign driving licence",
    url: "https://www.police.gov.sg/Advisories/Traffic/Convert-Foreign-Driving-Licence",
  },
  hdb: {
    label: "HDB — Renting out a flat",
    url: "https://www.hdb.gov.sg/residential/renting-a-flat/renting-from-the-open-market",
  },
  ura: {
    label: "URA — Planning guidelines hub",
    url: "https://www.ura.gov.sg/",
  },
  lta: {
    label: "LTA — Public transport",
    url: "https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport.html",
  },
  neaHaze: {
    label: "NEA — Haze management",
    url: "https://www.nea.gov.sg/our-services/pollution-control/air-pollution/haze",
  },
  scdf: {
    label: "SCDF — Singapore Civil Defence Force",
    url: "https://www.scdf.gov.sg/",
  },
  moh: {
    label: "MOH — Healthcare system",
    url: "https://www.moh.gov.sg/home/our-healthcare-system",
  },
  moe: {
    label: "MOE — Ministry of Education",
    url: "https://www.moe.gov.sg/",
  },
  ecda: {
    label: "ECDA — Early childhood",
    url: "https://www.ecda.gov.sg/",
  },
  mas: {
    label: "MAS — Monetary Authority of Singapore",
    url: "https://www.mas.gov.sg/",
  },
  singpass: {
    label: "Singpass",
    url: "https://www.singpass.gov.sg/",
  },
  spf: {
    label: "Singapore Police Force",
    url: "https://www.police.gov.sg/",
  },
  cpf: {
    label: "CPF Board",
    url: "https://www.cpf.gov.sg/",
  },
};

export function fm(obj) {
  const lines = ["---"];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (Array.isArray(v)) {
      if (v.length === 0) {
        lines.push(`${k}: []`);
      } else if (typeof v[0] === "object") {
        lines.push(`${k}:`);
        for (const item of v) {
          lines.push(`  - label: ${JSON.stringify(item.label)}`);
          lines.push(`    url: ${JSON.stringify(item.url)}`);
        }
      } else {
        lines.push(`${k}:`);
        for (const item of v) lines.push(`  - ${item}`);
      }
    } else if (typeof v === "object" && v !== null) {
      lines.push(`${k}:`);
      for (const [sk, sv] of Object.entries(v)) {
        if (typeof sv === "boolean") lines.push(`  ${sk}: ${sv}`);
        else if (sv !== undefined) lines.push(`  ${sk}: ${JSON.stringify(sv)}`);
      }
    } else if (typeof v === "boolean") {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: ${JSON.stringify(v)}`);
    }
  }
  lines.push("---", "");
  return lines.join("\n");
}

export function guide(meta, body) {
  return {
    pillar: meta.pillar,
    slug: meta.slug,
    content:
      fm({
        title: meta.title,
        description: meta.description,
        slug: meta.slug,
        pillar: meta.pillar,
        journey: meta.journey ?? "both",
        segments: meta.segments ?? [],
        lastReviewed: REVIEWED,
        citations: meta.citations ?? [],
        relatedGuides: meta.relatedGuides ?? [],
        relatedEntities: meta.relatedEntities ?? [],
        sponsorSlot: meta.sponsorSlot,
        draft: false,
      }) +
      body.trim() +
      "\n",
  };
}
