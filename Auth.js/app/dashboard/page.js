import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "../../components/LogoutButton";

export default async function DashboardPage() {
  const user= await getCurrentUser();
  if(!user) {
    redirect("/login");
  }
  return( 
    <>
      {/* <main>
        <h1>Dashboard</h1>
        <p>Welcome , {user.name}</p>
        <p>Email : {user.email}</p>
        <LogoutButton/>
      </main> */}

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-12">
  <div className="mx-auto max-w-4xl">

    <div className="mb-8">
      <p className="mb-2 text-sm font-medium text-blue-400">
        Dashboard
      </p>

      <h1 className="text-4xl font-bold text-white">
        Welcome, {user.name}
      </h1>

      <p className="mt-2 text-slate-400">
        Manage your account and information.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

      <div className="mb-6">
        <p className="text-sm text-slate-400">
          Account email
        </p>

        <p className="mt-1 text-lg font-medium text-white">
          {user.email}
        </p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <LogoutButton />
      </div>

    </div>

  </div>
</main>
</>
  );
}
