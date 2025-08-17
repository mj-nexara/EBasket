import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/three-pillars">Three Pillars</Link></li>
      </ul>
    </nav>
  );
}
