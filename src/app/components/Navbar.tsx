import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-end p-6 gap-8 text-sm font-medium">
      <Link href="/" className="hover:underline transition">Home</Link>
      <Link href="/projects" className="hover:underline transition">Projects</Link>
      <Link href="/experiences" className="hover:underline transition">Experiences</Link>
      <Link href="#contact" className="hover:underline transition">Contact</Link>
    </nav>
  );
}
