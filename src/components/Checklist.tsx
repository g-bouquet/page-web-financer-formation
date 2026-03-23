import { CheckSquare, FileText, Briefcase, Building2, User, UserSearch, Heart } from 'lucide-react';

export default function Checklist() {
  return (
    <section id="pieces" className="scroll-mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display mb-8">
        Pièces à préparer (checklist)
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-brand-500" />
            </div>
            <h3 className="font-bold text-gray-800">Pièces "socle"</h3>
          </div>
          <ul className="space-y-3">
            {[
              'Devis (ou proposition)',
              'Programme : contenu + objectifs',
              'Dates, durée, modalités (présentiel/distanciel), lieu',
              'Coût (frais pédagogiques)',
              "Mes coordonnées et SIRET (je vous les fournis)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckSquare className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-muted-50 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-muted-500" />
            </div>
            <h3 className="font-bold text-gray-800">Pièces selon profil</h3>
          </div>
          <ul className="space-y-3">
            {[
              { icon: User, label: 'Salarié', text: 'Accord interne (manager/RH), bon de commande ou validation RH' },
              { icon: Building2, label: 'Entreprise / OPCO', text: 'Formulaire OPCO (variable), convention si demandée' },
              { icon: Briefcase, label: 'Indépendant', text: 'Attestation URSSAF (CFP), SIRET, code NAF/APE' },
              { icon: UserSearch, label: "Demandeur d'emploi", text: 'Éléments projet + devis à transmettre au conseiller' },
              { icon: Heart, label: 'Handicap', text: "Éléments relatifs au besoin d'aménagement/compensation (au cas par cas)" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2.5">
                <item.icon className="w-4 h-4 text-muted-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">
                  <strong className="text-gray-800">{item.label}</strong> : {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        Retrouvez le détail du{' '}
        <a href="/formation-maieusthesie/" className="text-brand-500 hover:text-brand-600 underline">
          contenu et objectifs de la formation
        </a>{' '}
        pour compléter votre dossier.
      </p>
    </section>
  );
}
