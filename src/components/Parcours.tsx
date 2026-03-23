import { Search, Target, FolderOpen, Send, BookCheck, FileCheck, AlertTriangle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnostic',
    desc: 'Votre statut (privé/public/indépendant/demandeur d\'emploi) + votre objectif (compétences, évolution, reconversion…).',
  },
  {
    icon: Target,
    title: 'Choisir le bon financeur',
    desc: 'Employeur / OPCO / FAF / France Travail / employeur public / aides handicap / aides locales.',
  },
  {
    icon: FolderOpen,
    title: 'Constituer le dossier',
    desc: 'Pièces "socle" + pièces statutaires (URSSAF, accord employeur, etc.).',
  },
  {
    icon: Send,
    title: 'Demander la validation',
    desc: 'Dépôt en ligne ou via RH/conseiller, en respectant les délais.',
  },
  {
    icon: BookCheck,
    title: 'Entrer en formation',
    desc: "Une fois l'accord obtenu.",
  },
  {
    icon: FileCheck,
    title: 'Justificatifs',
    desc: 'Émargements/attestations, facture, attestation de réalisation (selon financeur).',
  },
];

export default function Parcours() {
  return (
    <section id="parcours" className="scroll-mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display mb-8">
        Parcours simple en 6 étapes
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center transition-colors">
                <step.icon className="w-5 h-5 text-brand-500" />
              </div>
              <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
                Étape {i + 1}
              </span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1.5">{step.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-900 mb-1">Points de vigilance</h4>
            <ul className="space-y-1">
              <li className="text-sm text-amber-800">
                - Les demandes déposées après le démarrage sont souvent refusées.
              </li>
              <li className="text-sm text-amber-800">
                - Les plafonds et périodes de dépôt (FAF/OPCO) peuvent limiter la prise en charge.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
