import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ProfileCardProps {
  id: string;
  icon: LucideIcon;
  color: 'brand' | 'sky' | 'amber' | 'rose' | 'emerald';
  title: string;
  subtitle: string;
  options: string[];
  contacts: string[];
  vigilance: string[];
  pieces: string[];
  steps: string;
}

const colorMap = {
  brand: {
    headerBg: 'bg-muted-500',
    iconBg: 'bg-white/20',
    iconText: 'text-white',
    accent: 'text-brand-600',
    dotBg: 'bg-brand-200',
    stepsBg: 'bg-brand-50',
    stepsBorder: 'border-brand-200',
  },
  sky: {
    headerBg: 'bg-muted-400',
    iconBg: 'bg-white/20',
    iconText: 'text-white',
    accent: 'text-brand-600',
    dotBg: 'bg-brand-200',
    stepsBg: 'bg-brand-50',
    stepsBorder: 'border-brand-200',
  },
  amber: {
    headerBg: 'bg-muted-500',
    iconBg: 'bg-white/20',
    iconText: 'text-white',
    accent: 'text-brand-600',
    dotBg: 'bg-brand-200',
    stepsBg: 'bg-brand-50',
    stepsBorder: 'border-brand-200',
  },
  rose: {
    headerBg: 'bg-muted-400',
    iconBg: 'bg-white/20',
    iconText: 'text-white',
    accent: 'text-brand-600',
    dotBg: 'bg-brand-200',
    stepsBg: 'bg-brand-50',
    stepsBorder: 'border-brand-200',
  },
  emerald: {
    headerBg: 'bg-muted-500',
    iconBg: 'bg-white/20',
    iconText: 'text-white',
    accent: 'text-brand-600',
    dotBg: 'bg-brand-200',
    stepsBg: 'bg-brand-50',
    stepsBorder: 'border-brand-200',
  },
};

export default function ProfileCard({
  id,
  icon: Icon,
  color,
  title,
  subtitle,
  options,
  contacts,
  vigilance,
  pieces,
  steps,
}: ProfileCardProps) {
  const c = colorMap[color];

  return (
    <article id={id} className="scroll-mt-8 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <div className={`${c.headerBg} px-6 py-5 sm:px-8`}>
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${c.iconText}`} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-white/80">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h4 className={`text-sm font-semibold uppercase tracking-wider ${c.accent} mb-3`}>
            Options de financement
          </h4>
          <ul className="space-y-2">
            {options.map((opt, i) => (
              <li key={i} className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: opt }} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={`text-sm font-semibold uppercase tracking-wider ${c.accent} mb-3`}>
            Interlocuteur(s) à contacter
          </h4>
          <ul className="space-y-1.5">
            {contacts.map((ct, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${c.dotBg} flex-shrink-0 mt-1.5`} />
                {ct}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={`text-sm font-semibold uppercase tracking-wider ${c.accent} mb-3`}>
            Points de vigilance
          </h4>
          <ul className="space-y-1.5">
            {vigilance.map((v, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${c.dotBg} flex-shrink-0 mt-1.5`} />
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={`text-sm font-semibold uppercase tracking-wider ${c.accent} mb-3`}>
            Pièces à préparer
          </h4>
          <p className="text-sm text-gray-600">{pieces.join(' + ')}</p>
        </div>

        <div className={`${c.stepsBg} rounded-xl p-4 border ${c.stepsBorder}`}>
          <h4 className={`text-sm font-semibold ${c.accent} mb-2`}>Étapes rapides</h4>
          <p className="text-sm text-gray-600">{steps}</p>
        </div>
      </div>
    </article>
  );
}
