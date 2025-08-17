import Image from 'next/image';
import Link from 'next/link';

export default function GovernancePage() {
  const products = [
    {
      title: 'Constitution Kit',
      href: '/three-pillars/governance/constitution-kit',
      image: '/images/constitution-kit.jpg',
      description: 'Framework drafting software for ethical governance systems.',
    },
    {
      title: 'NexVote',
      href: '/three-pillars/governance/nexvote',
      image: '/images/nexvote.jpg',
      description: 'Transparent voting tools for modular decision-making.',
    },
    {
      title: 'Lumid Vault',
      href: '/three-pillars/governance/lumid-vault',
      image: '/images/lumid-vault.jpg',
      description: 'Secure storage for governance data and proposals.',
    },
    {
      title: 'Nexara SDK',
      href: '/three-pillars/governance/nexara-sdk',
      image: '/images/nexara-sdk.jpg',
      description: 'Developer tools for building ethical governance flows.',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Governance Pillar</h1>
        <p className="text-gray-600 text-lg">
          Frameworks and tools for transparent, community-driven decision-making.
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {products.map(({ title, href, image, description }) => (
          <Link
            key={href}
            href={href}
            className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
