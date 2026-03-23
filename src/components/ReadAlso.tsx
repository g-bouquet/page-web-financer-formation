export default function ReadAlso() {
  const links = [
    { href: '/formation-maieusthesie/', label: 'La formation en maïeusthésie : présentation complète' },
    { href: '/maieusthesie-formation-en-ligne/', label: 'Se former à la maïeusthésie en ligne' },
    { href: '/evenements-categorie/formations-maieusthesie/', label: 'Prochaines sessions de formation' },
    { href: '/30-minutes-pour-echanger-sur-votre-projet-de-formation-en-maieusthesie/', label: 'Échanger sur votre projet de formation' },
    { href: '/avis-temoignages-formation-maieusthesie/', label: 'Avis et témoignages de participants' },
  ];

  return (
    <section className="scroll-mt-8">
      <h3 className="text-lg font-bold text-gray-800 font-display mb-4">À lire aussi</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-brand-500 hover:text-brand-600 underline transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
