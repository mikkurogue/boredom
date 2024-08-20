import Link from "next/link";

const links: { href: string; label: string }[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/profile",
    label: "Profile",
  },
];

export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center bg-gray-600 h-16 text-center">
      <div className="ml-5">Logo</div>

      <div className="mr-5 text-center">
        <ul className="list-none m-0 p-0 overflow-hidden flex gap-5">
          {links.map(function (link) {
            return (
              <li
                key={link.href}
                className="float-left hover:text-cyan-400 transition-colors"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
