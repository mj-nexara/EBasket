import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const pillars = [
    {
      title: 'Digital Pillar',
      href: '/home/three-pillars/digital',
      image: '/images/digital-overview.jpg',
      description: 'Tools and platforms for ethical development, collaboration, and innovation.',
    },
    {
      title: 'Governance Pillar',
      href: '/home/three-pillars/governance',
      image: '/images/governance-overview.jpg',
      description: 'Frameworks and tools for transparent, community-driven decision-making.',
    },
    {
      title: 'Vital Assets Pillar',
      href: '/home/three-pillars/vital-assets',
      image: '/images/vital-assets-overview.jpg',
      description: 'Essential goods for sustainable living, well-being, and ethical consumption.',
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">

      {/* Hero Banner */}
      <section className="relative h-[60vh] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/hero-banner.jpg"
          alt="EthicBasket Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4">Welcome to EthicBasket</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Building a future of ethical commerce, transparency, and community-powered innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          EthicBasket is more than a marketplace — it's a movement. We empower individuals and communities
          to engage in transparent, ethical commerce through modular tools, governance frameworks, and vital assets.
          Every product, every decision, every interaction is rooted in conscience and innovation.
        </p>
      </section>

      {/* Three Pillars Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">Explore Our Pillars</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ title, href, image, description }) => (
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
        </div>
      </section>
    </main>
  );
}
