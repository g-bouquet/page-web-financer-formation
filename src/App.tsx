import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import SectionIntro from './components/SectionIntro';
import Parcours from './components/Parcours';
import Checklist from './components/Checklist';
import ProfileSections from './components/ProfileSections';
import CasTransverses from './components/CasTransverses';
import Accompagnement from './components/Accompagnement';
import FAQ from './components/FAQ';
import Glossaire from './components/Glossaire';
import Sources from './components/Sources';
import ImageBanner from './components/ImageBanner';
import ReadAlso from './components/ReadAlso';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
          <div className="space-y-16 min-w-0">
            <SectionIntro />
            <Parcours />

            <ImageBanner
              src="https://images.pexels.com/photos/7925558/pexels-photo-7925558.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Groupe de personnes assises en cercle dans une atmosphere detendue et bienveillante"
            />

            <Checklist />
            <ProfileSections />

            <ImageBanner
              src="https://images.pexels.com/photos/7176174/pexels-photo-7176174.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Personnes en conversation chaleureuse dans un cadre accueillant et bienveillant"
            />

            <CasTransverses />
            <Accompagnement />
            <FAQ />

            <ImageBanner
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Tasse de cafe et carnet sur une table en bois dans une ambiance chaleureuse et detendue"
            />

            <Glossaire />
            <ReadAlso />
            <Sources />

            <p className="text-xs text-gray-400 italic border-t border-gray-100 pt-6">
              Information générale, pas de conseil juridique. Vérifiez toujours auprès de
              l'interlocuteur compétent avant toute décision.
            </p>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <TableOfContents />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
