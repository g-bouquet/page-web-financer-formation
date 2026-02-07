import { Wallet, Layers, XCircle } from 'lucide-react';

export default function CasTransverses() {
  return (
    <section id="cas-transverses" className="scroll-mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display mb-8">
        Cas transverses
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="w-10 h-10 rounded-xl bg-muted-50 flex items-center justify-center mb-4">
            <Wallet className="w-5 h-5 text-muted-500" />
          </div>
          <h3 className="font-bold text-gray-800 mb-3">Autofinancement</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              Possible quel que soit le statut (si aucun financeur ne peut intervenir ou si vous
              choisissez cette voie).
            </li>
            <li>
              Des modalités de paiement (échelonnement, acompte, etc.) sont possibles :
              n'hésitez pas à me contacter pour en discuter.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
            <Layers className="w-5 h-5 text-brand-500" />
          </div>
          <h3 className="font-bold text-gray-800 mb-3">Co-financements</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              Certains parcours combinent plusieurs contributeurs (employeur + OPCO ; France
              Travail + aide locale…).
            </li>
            <li>
              Les règles de cumul varient : faites valider le montage par l'interlocuteur
              principal.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center mb-4">
            <XCircle className="w-5 h-5 text-rose-500" />
          </div>
          <h3 className="font-bold text-gray-800 mb-3">CPF : non utilisable ici</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              CPF (privé/public) : <strong className="text-rose-600">non utilisable</strong> ici.
            </li>
            <li>
              PTP / Transitions Pro : dispositif lié au CPF,{' '}
              <strong className="text-rose-600">non utilisable</strong> ici.
            </li>
            <li>
              Alternatives : employeur/OPCO (privé), circuits employeur public (public), FAF
              (indépendant), aides France Travail/aides locales (demandeur d'emploi).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
