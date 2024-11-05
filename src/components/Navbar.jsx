import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Candle.io</h1>
      <div className="space-x-4">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}