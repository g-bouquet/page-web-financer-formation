import { BookOpen } from 'lucide-react';

const terms = [
  { term: 'CPF', def: 'Compte personnel de formation (privé : en euros ; public : souvent en heures).' },
  { term: 'OPCO', def: 'Opérateur de compétences.' },
  { term: 'FAF', def: 'Fonds d\'assurance formation (indépendants).' },
  { term: 'CFP (URSSAF)', def: 'Contribution à la formation professionnelle.' },
  { term: 'AIF', def: 'Aide individuelle à la formation (France Travail).' },
  { term: 'PPAE', def: "Projet personnalisé d'accès à l'emploi." },
  { term: 'PTP', def: 'Projet de transition professionnelle (Transitions Pro), lié au CPF.' },
  { term: 'CNFPT', def: 'Centre national de la fonction publique territoriale.' },
  { term: 'ANFH', def: 'Association nationale pour la formation permanente du personnel hospitalier.' },
  { term: 'Agefiph', def: "Aide à l'emploi des personnes en situation de handicap (secteur privé)." },
  { term: 'FIPHFP', def: 'Fonds handicap pour la fonction publique.' },
  { term: 'SIRET / NAF-APE', def: 'Identifiants utiles (OPCO/FAF).' },
];

export default function Glossaire() {
  return (
    <section id="glossaire" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-brand-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display">Glossaire</h2>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {terms.map((item, i) => (
            <div
              key={item.term}
              className={`p-4 sm:p-5 border-b border-gray-100 ${
                i % 2 === 0 ? 'sm:border-r' : ''
              } last:border-b-0`}
            >
              <dt className="font-semibold text-brand-600 text-sm mb-1">{item.term}</dt>
              <dd className="text-sm text-gray-600">{item.def}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
