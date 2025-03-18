"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// export default function NavBar() {
//   const pathname = usePathname();

//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className={clsx(
//               'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md-flex-none md:justify-start md:p-2 md:px-3'
//               {
//                 'bg-sky-100 text-blue-600': pathname === link.href,
//               }
//           )}

//         )
//       })}
//     </>
//   )
// }

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="text-2x1 font-bold">ChoreSync logo</h1>
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/calendar" className="hover:text-blue-500">
          Calendar
        </Link>
        <Link href="/list" className="hover:text-blue-500">
          Chores Lists
        </Link>
      </div>
    </nav>
  );
}
