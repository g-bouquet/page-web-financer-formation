import { ExternalLink, LinkIcon } from 'lucide-react';

const sources = [
  {
    label: 'Service-Public.fr – Plan de développement des compétences',
    url: 'https://www.service-public.fr/particuliers/vosdroits/F11267',
  },
  {
    label: 'Ministère du Travail – Plan de développement des compétences',
    url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences',
  },
  {
    label: 'Ministère du Travail – CPF',
    url: 'https://travail-emploi.gouv.fr/le-compte-personnel-de-formation-cpf',
  },
  {
    label: 'Ministère du Travail – OPCO',
    url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco',
  },
  {
    label: 'France compétences – Trouver mon OPCO',
    url: 'https://quel-est-mon-opco.francecompetences.fr/',
  },
  {
    label: 'URSSAF – Droits à la formation des indépendants',
    url: 'https://www.urssaf.fr/accueil/independant/connaitre-vos-droits/droits-formation-professionnelle.html',
  },
  {
    label: 'URSSAF Autoentrepreneur – Télécharger mes attestations',
    url: 'https://www.autoentrepreneur.urssaf.fr/portail/accueil/une-question/toutes-les-fiches-pratiques/telecharger-mes-attestations.html',
  },
  {
    label: 'Service-Public (entreprendre) – Contribution formation',
    url: 'https://entreprendre.service-public.gov.fr/vosdroits/F23459',
  },
  {
    label: 'Service-Public (entreprendre) – Prise en charge formation travailleurs indépendants',
    url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31148',
  },
  {
    label: 'France Travail – AIF',
    url: 'https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html',
  },
  {
    label: 'Service-Public – CPF fonction publique',
    url: 'https://www.service-public.fr/particuliers/vosdroits/F18090',
  },
  {
    label: 'CNFPT – CPF (territorial)',
    url: 'https://www.cnfpt.fr/se-former-au-long-sa-carriere/compte-personnel-formation/national',
  },
  {
    label: 'ANFH – Financer un projet de formation',
    url: 'https://www.anfh.fr/agents/financer-un-projet-de-formation',
  },
  {
    label: 'Agefiph – Aides financières',
    url: 'https://www.agefiph.fr/aides-financieres',
  },
  {
    label: 'FIPHFP – Aides financières ponctuelles',
    url: 'https://www.fiphfp.fr/employeurs/nos-services/les-aides-financieres-ponctuelles',
  },
  {
    label: 'Mon Compte Formation – PTP',
    url: 'https://www.moncompteformation.gouv.fr/espace-public/quest-ce-que-le-projet-de-transition-professionnelle',
  },
  {
    label: 'Service-Public – PTP',
    url: 'https://www.service-public.fr/particuliers/vosdroits/F14018',
  },
  {
    label: 'Transitions Pro – PTP (principes)',
    url: 'https://www.transitionspro.fr/nos-dispositifs/projet-de-transition-professionnelle/',
  },
];

export default function Sources() {
  return (
    <section id="sources" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-muted-50 flex items-center justify-center">
          <LinkIcon className="w-5 h-5 text-muted-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display">Sources</h2>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Consulté le 05/02/2026. Les dispositifs et critères pouvant évoluer, vérifiez toujours les
        pages officielles ci-dessous.
      </p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-100">
        {sources.map((source) => (
          <a
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3.5 hover:bg-brand-50 transition-colors group"
          >
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand-500 flex-shrink-0 transition-colors" />
            <span className="text-sm text-gray-600 group-hover:text-brand-600 transition-colors">
              {source.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
