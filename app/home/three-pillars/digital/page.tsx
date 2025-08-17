import Image from 'next/image';
import Link from 'next/link';

export default function DigitalOverviewPage() {
  const products = [
    {
      title: 'Nexascend CLI',
      href: '/three-pillars/digital/nexascend-cli',
      image: '/images/nexascend-cli.jpg',
      description: 'Command-line interface for digital sovereignty and modular deployment.',
    },
    {
      title: 'Nex API',
      href: '/three-pillars/digital/nex-api',
      image: '/images/nex-api.jpg',
      description: 'Integration interface for ethical development and platform autonomy.',
    },
    {
      title: 'Nex SDLC',
      href: '/three-pillars/digital/nex-sdlc',
      image: '/images/nex-sdlc.jpg',
      description: 'Lifecycle strategy for responsible software and modular governance.',
    },
    {
      title: 'Nex OSS',
      href: '/three-pillars/digital/nex-oss',
      image: '/images/nex-oss.jpg',
      description: 'Open-source platform for collaborative, ethical innovation.',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Digital Pillar</h1>
        <p className="text-gray-600 text-lg">
          Tools and platforms for ethical development, collaboration, and innovation.
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
