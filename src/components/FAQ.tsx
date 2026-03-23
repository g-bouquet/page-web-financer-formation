import { useState, useCallback } from 'react';
import { ChevronDown, HelpCircle, ChevronsUpDown } from 'lucide-react';

const faqs = [
  {
    q: "Pourquoi le CPF n'est-il pas possible ici ?",
    a: 'Parce que ces formations ne sont pas éligibles CPF.',
  },
  {
    q: 'Mon employeur peut-il financer même sans CPF ?',
    a: 'Oui, via le plan de développement des compétences (décision employeur).',
  },
  {
    q: "L'OPCO finance-t-il directement ?",
    a: "Parfois, selon les règles de votre branche/OPCO et la situation de l'entreprise.",
  },
  {
    q: 'Comment trouver mon OPCO ?',
    a: 'Via l\'entreprise, ou via le moteur officiel "quel est mon OPCO ?".',
  },
  {
    q: 'Je suis micro-entrepreneur : ai-je des droits ?',
    a: 'Oui si la contribution formation est payée : demande possible via un FAF.',
  },
  {
    q: 'Où trouver mon attestation URSSAF "formation" ?',
    a: 'Sur votre espace URSSAF/auto-entrepreneur (attestation CFP).',
  },
  {
    q: 'France Travail peut-il financer ?',
    a: 'Possible selon dossier (ex. AIF) via votre conseiller.',
  },
  {
    q: 'Puis-je passer par Transitions Pro (PTP) ?',
    a: "Non : c'est lié au CPF, non mobilisable ici.",
  },
  {
    q: 'Quelles sont les pièces les plus demandées ?',
    a: 'Devis + programme + objectifs + dates/durée + coût + infos OF.',
  },
  {
    q: "Dois-je attendre l'accord avant inscription ?",
    a: "En pratique oui : beaucoup de financeurs exigent un accord préalable.",
  },
  {
    q: 'Et si mon dossier est refusé ?',
    a: 'Demandez le motif et envisagez une alternative (employeur/OPCO/FAF/France Travail/aides locales).',
  },
  {
    q: 'Agefiph/FIPHFP financent-ils la formation ?',
    a: 'Ils peuvent aider au cas par cas (compensation/aménagement, parfois formation).',
  },
  {
    q: 'Fonction publique : le CPF public existe, donc pourquoi pas ?',
    a: "Il existe, mais ici il ne s'applique pas (formation non éligible CPF).",
  },
  {
    q: 'Combien de temps prévoir ?',
    a: 'Variable (circuits internes, commissions, calendriers, plafonds). Anticipez.',
  },
  {
    q: "S'agit-il d'une formation professionnelle en maïeusthésie ?",
    a: "Oui, il s'agit d'une formation professionnelle en maïeusthésie, pouvant relever de la formation continue, selon votre statut et les critères du financeur.",
  },
  {
    q: "À qui s'adresse une formation en maïeusthésie ?",
    a: "À des professionnels ou futurs professionnels de l'accompagnement (salariés, indépendants, agents publics), selon les prérequis définis dans le programme.",
  },
  {
    q: "Que disent les participants ayant suivi la formation ?",
    a: "Vous pouvez consulter les <a href='/avis-temoignages-formation-maieusthesie/' class='text-brand-500 hover:text-brand-600 underline'>témoignages sur la formation</a> pour découvrir les retours d'expérience.",
  },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-start gap-3 py-4 text-left group"
      >
        <ChevronDown
          className={`w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <span className="font-medium text-gray-800 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
          {q}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-gray-600 pl-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = useCallback((index: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const allOpen = openIndices.size === faqs.length;

  const toggleAll = useCallback(() => {
    if (allOpen) {
      setOpenIndices(new Set());
    } else {
      setOpenIndices(new Set(faqs.map((_, i) => i)));
    }
  }, [allOpen]);

  return (
    <section id="faq" className="scroll-mt-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-brand-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display">FAQ</h2>
        </div>
        <button
          onClick={toggleAll}
          className="flex items-center gap-1.5 text-sm text-brand-500 hover:text-brand-600 transition-colors font-medium"
        >
          <ChevronsUpDown className="w-4 h-4" />
          <span className="hidden sm:inline">{allOpen ? 'Tout replier' : 'Tout déplier'}</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            q={faq.q}
            a={faq.a}
            isOpen={openIndices.has(i)}
            toggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
