"use client";
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router= useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout",{
      method:"POST"
    })
    router.push("/login");
    router.refresh();
  }
  return (
    <button onClick={handleLogout}   className="rounded-lg border border-red-500/50 bg-red-500/50 px-5 py-2 font-medium text-red-100 transition hover:border-red-500/50 hover:bg-red-500/20 hover:text-red-200 active:scale-95" >
      Logout
    </button>
  )
}
