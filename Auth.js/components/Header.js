"use client";
// import { useState } from "react";
import Link from "next/link";
// import LogoutButton from "./LogoutButton";
import { useState , useEffect } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser]= useState(null)

  useEffect(()=> {
    async function checkUser(){
      const response= await fetch("/api/me");
      if(response.ok){
        const data= await response.json();
        setUser(data.user);
      } else {
        setUser(null)
      }
    }
    checkUser();
  },[])

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MyWebsite
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>

          <Link href="/notes" className="text-gray-700 hover:text-black">
            Notes
          </Link>

          <Link href="/sessions" className="text-gray-700 hover:text-black">
            Sessions
          </Link>

          {user ?(
          <Link href="/dashboard" className="text-gray-700 hover:text-black">
            Dashboard
          </Link>
          ):(
          <Link href="/login" className="text-gray-700 hover:text-black">
            Login
          </Link>
          )}

          <Link href="/cart" className="text-gray-700 hover:text-black">
            Cart
          </Link>

          <Link
            href="/order"
            className="rounded-md bg-black px-5 py-2 text-white hover:bg-gray-800"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="border-t px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              Notes
            </Link>

            <Link href="/sessions" onClick={() => setMenuOpen(false)}>
              Sessions
            </Link>

            <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>

            <Link href="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>

            <Link
              href="/order"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-md bg-black px-5 py-2 text-white"
            >
              Order Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}









// export default function Header() {
//   return (
//     <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

//         {/* Logo */}
//         <Link
//           href="/dashboard"
//           className="text-xl font-bold tracking-tight text-white transition hover:text-blue-400"
//         >
//           MyApp
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden items-center gap-6 md:flex">
//           <Link
//             href="/dashboard"
//             className="text-sm font-medium text-slate-300 transition hover:text-white"
//           >
//             Dashboard
//           </Link>

//           <Link
//             href="/notes"
//             className="text-sm font-medium text-slate-300 transition hover:text-white"
//           >
//             Notes
//           </Link>
//         </nav>

//         {/* Account */}
//         <div>
//           <LogoutButton />
//         </div>

//       </div>
//     </header>
//   );
// }








