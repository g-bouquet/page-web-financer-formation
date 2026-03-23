import { List } from 'lucide-react';

const sections = [
  { id: 'comment-lire', label: 'Comment lire cette page' },
  { id: 'parcours', label: 'Parcours simple en 6 étapes' },
  { id: 'pieces', label: 'Pièces à préparer (checklist)' },
  { id: 'independant', label: 'Indépendant / dirigeant' },
  { id: 'salarie-prive', label: 'Salarié du privé' },
  { id: 'salarie-public', label: 'Salarié du public' },
  { id: 'demandeur-emploi', label: 'Demandeur d\'emploi' },
  { id: 'handicap', label: 'Handicap (Agefiph / FIPHFP)' },
  { id: 'cas-transverses', label: 'Cas transverses' },
  { id: 'accompagnement', label: 'Comment je vous accompagne' },
  { id: 'faq', label: 'FAQ' },
  { id: 'glossaire', label: 'Glossaire' },
  { id: 'sources', label: 'Sources' },
];

export default function TableOfContents() {
  return (
    <nav className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
          <List className="w-5 h-5 text-brand-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 font-display">Table des matières</h2>
      </div>
      <ol className="space-y-1">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-brand-50 hover:text-brand-600 transition-colors group"
            >
              <span className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-brand-100 flex items-center justify-center text-xs font-semibold text-gray-500 group-hover:text-brand-600 flex-shrink-0 transition-colors">
                {i + 1}
              </span>
              <span className="text-sm font-medium">{section.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
