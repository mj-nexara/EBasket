'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/home" className="text-2xl font-bold text-emerald-700">
          EthicBasket
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link href="/home">Home</Link>
          <Dropdown label="Three Pillars" />
          <Link href="/about">About</Link>
          <Link href="/buy">Buy Now</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-4 text-sm font-medium text-gray-700">
          <Link href="/home">Home</Link>
          <Dropdown label="Three Pillars" mobile />
          <Link href="/about">About</Link>
          <Link href="/buy">Buy Now</Link>
        </nav>
      )}
    </header>
  );
}

function Dropdown({ label, mobile = false }: { label: string; mobile?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      >
        {label}
      </button>

      {(open || !mobile) && (
        <div
          className={`${
            mobile ? 'mt-2 space-y-4' : 'absolute bg-white border rounded shadow-lg mt-2 p-4 z-10 w-64 space-y-4'
          }`}
        >
          <div>
            <div className="mb-2 font-semibold text-gray-800">Digital</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/three-pillars/digital/nexascend-cli">Nexascend CLI</Link></li>
              <li><Link href="/three-pillars/digital/nex-api">Nex API</Link></li>
              <li><Link href="/three-pillars/digital/nex-sdlc">Nex SDLC</Link></li>
              <li><Link href="/three-pillars/digital/nex-oss">Nex OSS</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-semibold text-gray-800">Vital Assets</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/three-pillars/vital-assets/lifefuel">LifeFuel</Link></li>
              <li><Link href="/three-pillars/vital-assets/symbolic-threads">Symbolic Threads</Link></li>
              <li><Link href="/three-pillars/vital-assets/essential-kits">Essential Kits</Link></li>
              <li><Link href="/three-pillars/vital-assets/recovery-essence">Recovery Essence</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-semibold text-gray-800">Governance</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/three-pillars/governance/constitution-kit">Constitution Kit</Link></li>
              <li><Link href="/three-pillars/governance/nexvote">NexVote</Link></li>
              <li><Link href="/three-pillars/governance/lumid-vault">Lumid Vault</Link></li>
              <li><Link href="/three-pillars/governance/nexara-sdk">Nexara SDK</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
