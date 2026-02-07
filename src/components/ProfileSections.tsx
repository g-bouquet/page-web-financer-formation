import { Building, Landmark, Briefcase, UserSearch, Heart } from 'lucide-react';
import ProfileCard from './ProfileCard';

export default function ProfileSections() {
  return (
    <section className="scroll-mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-display mb-8">
        Solutions selon votre profil
      </h2>

      <div className="space-y-8">
        <ProfileCard
          id="independant"
          icon={Briefcase}
          color="amber"
          title="Indépendants / dirigeants / micro-entrepreneurs"
          subtitle="Formation en maïeusthésie"
          options={[
            'Prise en charge possible via un <strong>Fonds d\'assurance formation (FAF)</strong> si la <strong>contribution formation</strong> est payée (URSSAF).',
            'Exemples (selon activité) : <strong>FIF PL</strong>, <strong>AGEFICE</strong>, <strong>FAFCEA</strong>… (dépend du code NAF/APE et des cotisations).',
          ]}
          contacts={[
            'Votre FAF (identifié selon activité/NAF).',
            'URSSAF : pour les attestations et la situation.',
          ]}
          vigilance={[
            'Plafonds annuels, périodes de dépôt, thématiques et critères : variables.',
            'Dépôt souvent avant le début de la formation.',
          ]}
          pieces={['Attestation URSSAF (CFP)', 'devis', 'programme', 'SIRET/NAF']}
          steps="1) Identifier FAF – 2) vérifier critères + formulaire – 3) déposer dossier – 4) accord – 5) formation – 6) facture/attestation."
        />

        <ProfileCard
          id="salarie-prive"
          icon={Building}
          color="brand"
          title="Salariés du secteur privé"
          subtitle="Formation en maïeusthésie"
          options={[
            '<strong>Employeur</strong> : plan de développement des compétences.',
            '<strong>OPCO</strong> : selon règles de branche/entreprise (souvent piloté par l\'employeur).',
            '<strong>Dispositifs liés au CPF</strong> (CPF, PTP…) : <strong>non utilisables ici</strong> car CPF non mobilisable.',
            '<strong>Alternative</strong> : plan employeur et/ou critères OPCO hors CPF.',
          ]}
          contacts={[
            'Manager + RH / responsable formation.',
            'Si besoin : l\'entreprise identifie l\'OPCO (ou via moteur "quel est mon OPCO ?").',
          ]}
          vigilance={[
            'Accord écrit généralement avant le début.',
            'Critères et enveloppes OPCO variables (branche, taille, priorités, budgets, calendrier).',
          ]}
          pieces={['Devis', 'programme', 'objectifs', 'dates/durée']}
          steps="1) Échange manager/RH – 2) demande interne – 3) (si besoin) dépôt OPCO – 4) accord – 5) inscription – 6) justificatifs."
        />

        <ProfileCard
          id="salarie-public"
          icon={Landmark}
          color="sky"
          title="Salariés du secteur public"
          subtitle="État / territorial / hospitalier"
          options={[
            '<strong>Employeur public</strong> : plan de formation / dispositifs internes (variables selon administration, collectivité, établissement).',
            'Exemples d\'acteurs : <strong>CNFPT</strong> (territorial), <strong>ANFH</strong> (hospitalier) – selon règles propres.',
            '<strong>CPF public</strong> : existe, mais <strong>non utilisable ici</strong> (CPF non mobilisable).',
          ]}
          contacts={[
            'Service formation / RH de votre employeur.',
            'Selon versant : CNFPT (territorial) ; ANFH (hospitalier).',
          ]}
          vigilance={[
            'Calendriers, commissions et priorités : variables, parfois avec délais.',
            'Règles différentes selon statut (titulaire/contractuel) et employeur.',
          ]}
          pieces={['Devis', 'programme', 'objectifs', "pièces demandées par l'employeur"]}
          steps="1) Demande interne – 2) transmission des pièces – 3) instruction/validation – 4) inscription – 5) formation – 6) attestations."
        />

        <ProfileCard
          id="demandeur-emploi"
          icon={UserSearch}
          color="rose"
          title="Demandeurs d'emploi"
          subtitle="Formation en maïeusthésie"
          options={[
            '<strong>France Travail</strong> : aides possibles selon dossier (ex. AIF) + aides locales (Région/collectivités).',
            '<strong>CPF</strong> : parfois mobilisé dans certains montages, mais <strong>non utilisable ici</strong>.',
            '<strong>Alternative</strong> : demande AIF et/ou aides locales, selon instruction du conseiller.',
          ]}
          contacts={['Conseiller France Travail.']}
          vigilance={[
            'Décision au cas par cas (cohérence du projet, opportunité, budgets).',
          ]}
          pieces={['Devis', 'programme', 'calendrier', 'éléments de projet']}
          steps="1) Échange conseiller – 2) demande de devis – 3) dépôt demande – 4) décision – 5) inscription – 6) justificatifs."
        />

        <ProfileCard
          id="handicap"
          icon={Heart}
          color="emerald"
          title="Handicap (en complément)"
          subtitle="Formation en maïeusthésie"
          options={[
            '<strong>Secteur privé</strong> : Agefiph (aides financières, notamment compensation/aménagement ; parfois formation).',
            '<strong>Secteur public</strong> : FIPHFP (aides financières, dont compensation ; parfois formation).',
          ]}
          contacts={['Référent handicap employeur + Agefiph / FIPHFP.']}
          vigilance={[
            "Instruction au cas par cas : nature du besoin, justificatifs, cohérence avec l'emploi.",
          ]}
          pieces={["Devis/programme", "éléments décrivant le besoin d'aménagement/compensation"]}
          steps="1) Qualifier le besoin – 2) choisir Agefiph/FIPHFP – 3) déposer dossier – 4) décision – 5) mise en œuvre – 6) justificatifs."
        />
      </div>
    </section>
  );
}
