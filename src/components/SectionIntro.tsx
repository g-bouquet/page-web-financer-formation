import { Info, CheckCircle } from 'lucide-react';

export default function SectionIntro() {
  return (
    <section id="comment-lire" className="scroll-mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display mb-6">
        Comment lire cette page
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Cette page vise à vous aider à <strong className="text-gray-800">vous repérer</strong> parmi
        les financeurs possibles pour une{' '}
        <strong className="text-gray-800">formation professionnelle en maïeusthésie</strong>, selon
        votre situation et votre parcours (salarié, agent public, indépendant ou demandeur d'emploi).
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-50 border border-brand-100">
          <Info className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-brand-900 leading-relaxed">
            <strong>Information générale, pas de conseil juridique</strong> : votre statut, votre
            branche, l'OPCO/FAF, les budgets et les règles locales peuvent changer la réponse.
          </p>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
          <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Toujours valider en amont</strong> : beaucoup de financeurs exigent un accord{' '}
            <strong>avant</strong> le démarrage.
          </p>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-100">
          <Info className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-rose-800 leading-relaxed">
            <strong>CPF</strong> : si vous cherchez une solution "CPF", retenez ceci :{' '}
            <strong>ce n'est pas possible ici</strong>. Orientez-vous vers des voies alternatives
            (employeur, OPCO, FAF, France Travail, employeur public, aides handicap, aides locales…).
          </p>
        </div>
      </div>

      <div className="bg-muted-50 border border-muted-200 rounded-xl p-5 sm:p-6">
        <h3 className="font-bold text-gray-800 mb-3">À retenir</h3>
        <ol className="space-y-2">
          {[
            'Identifier le bon interlocuteur (employeur / OPCO / FAF / France Travail / CNFPT-ANFH / Agefiph-FIPHFP).',
            "Obtenir un accord avant d'engager des frais.",
            'Préparer les pièces standard : devis + programme + objectifs + dates.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
