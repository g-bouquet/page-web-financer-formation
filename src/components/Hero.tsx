import { AlertTriangle, BookOpen, Users, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-muted-500/70" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-display">
            Financer une formation
            <br />
            en maïeusthésie
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Toutes les solutions de financement selon votre profil : salarié, agent public,
            indépendant ou demandeur d'emploi.
          </p>
        </div>

        <div className="mt-10 p-5 sm:p-6 rounded-xl bg-white max-w-3xl mx-auto shadow-md">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 text-base">
                CPF non mobilisable pour ces formations
              </p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Les formations de maïeusthésie ne sont pas éligibles au CPF.
                Pas d'achat/inscription via Mon Compte Formation, pas de financement via un dispositif
                qui exige l'usage du CPF (ex. PTP / Transitions Pro). D'autres solutions existent.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-white/80 max-w-3xl mx-auto">
          Consultez la{' '}
          <a href="/formation-maieusthesie/" className="underline text-white hover:text-white/90">
            présentation de la formation en maïeusthésie
          </a>{' '}
          et le{' '}
          <a href="/evenements-categorie/formations-maieusthesie/" className="underline text-white hover:text-white/90">
            calendrier des prochaines sessions
          </a>.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Users, label: 'Tous profils', desc: 'Salarié, indépendant, public, DE' },
            { icon: GraduationCap, label: 'Formation pro', desc: 'Accompagnement & maïeusthésie' },
            { icon: BookOpen, label: 'Guide pratique', desc: 'Étapes, pièces, contacts' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/90 backdrop-blur-sm"
            >
              <item.icon className="w-8 h-8 text-brand-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
