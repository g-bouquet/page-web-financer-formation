import { Handshake, Clock } from 'lucide-react';

export default function Accompagnement() {
  return (
    <section id="accompagnement" className="scroll-mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display mb-6">
        Comment je vous accompagne
      </h2>

      <div className="bg-muted-500 rounded-xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Handshake className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg font-semibold text-white">Un accompagnement neutre et pratique</p>
        </div>

        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white">
              1
            </span>
            <p className="text-white/90 text-sm leading-relaxed">
              Je fournis, sur demande, les éléments généralement nécessaires :{' '}
              <strong>devis, programme de formation</strong>, objectifs pédagogiques, calendrier,
              informations administratives de mon organisme de formation en maïeusthésie.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white">
              2
            </span>
            <p className="text-white/90 text-sm leading-relaxed">
              Je peux vous aider à identifier{' '}
              <strong>le bon interlocuteur</strong> selon votre statut.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white">
              3
            </span>
            <p className="text-white/90 text-sm leading-relaxed">
              Je ne me substitue pas aux financeurs :{' '}
              <strong>seul le financeur</strong> confirme l'éligibilité, les montants et la
              procédure.
            </p>
          </li>
        </ul>

        <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
          <Clock className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 font-medium">
            À retenir : la plupart des blocages viennent de délais trop courts ou d'un accord
            demandé trop tard.
          </p>
        </div>

        <p className="mt-4 text-sm text-white/70">
          Besoin d'en discuter ? Vous pouvez{' '}
          <a href="/30-minutes-pour-echanger-sur-votre-projet-de-formation-en-maieusthesie/" className="underline text-white/90 hover:text-white">
            réserver 30 minutes d'échange
          </a>{' '}
          pour faire le point sur votre situation.
        </p>
      </div>
    </section>
  );
}
