import Image from 'next/image';
import Link from 'next/link';

export default function VitalAssetsOverviewPage() {
  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Vital Assets</h1>
      <p className="text-gray-600 mb-8">
        Explore essential goods designed for sustainable living, well-being, and ethical consumption.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* LifeFuel */}
        <AssetCard
          href="/three-pillars/vital-assets/lifefuel"
          src="/images/LifeFuel.jpg"
          title="LifeFuel"
          description="Daily nourishment and vitality through ethically sourced wellness products."
        />

        {/* Soléa Moringa Powder */}
        <AssetCard
          src="/images/Soléa-Moringa-Powder.jpg"
          title="Soléa Moringa Powder"
          description="Nature’s clarity in a nutrient-rich superfood for energy and focus."
        />

        {/* Soléa Organic Honey */}
        <AssetCard
          src="/images/Soléa-Organic-Honey.jpg"
          title="Soléa Organic Honey"
          description="Pure sweetness from ethical sources, crafted for daily vitality."
        />

        {/* Symbolic Threads */}
        <AssetCard
          href="/three-pillars/vital-assets/symbolic-threads"
          src="/images/symbolic-threads.jpg"
          title="Symbolic Threads"
          description="Wearable expressions of values, identity, and ethical alignment."
        />

        {/* Essential Kits */}
        <AssetCard
          href="/three-pillars/vital-assets/essential-kits"
          src="/images/essential-kits.jpg"
          title="Essential Kits"
          description="Preparedness and resilience through curated emergency essentials."
        />

        {/* Recovery Essence */}
        <AssetCard
          href="/three-pillars/vital-assets/recovery-essence"
          src="/images/recovery-essence.jpg"
          title="Recovery Essence"
          description="Digital sovereignty and key recovery tools for secure asset management."
        />
      </div>
    </div>
  );
}

function AssetCard({
  href,
  src,
  title,
  description,
}: {
  href?: string;
  src: string;
  title: string;
  description: string;
}) {
  const content = (
    <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
      <Image src={src} alt={title} width={400} height={250} className="mx-auto rounded" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
