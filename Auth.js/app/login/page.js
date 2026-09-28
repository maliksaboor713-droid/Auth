"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");

  const router= useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    console.log("form submitted")

    const formData= new FormData(event.currentTarget);

    const email= formData.get("email");
    const password= formData.get("password");

    const response= await fetch("/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({email,password}),
    })
    const data= await response.json();

    if(!response.ok){
      setError(data.message)
    }else{
      // router.push("/dashboard");
      // window.location.href='/dashboard';
      // window.location.reload();
      window.location.assign("/dashboard");
    }
  }

  return (
    // <main className=" min-h-screen flex flex-col justify-center items-center "> 
    //   <h1> LoginPage </h1> 

    //   <form className="flex flex-col bg-blue-900" onSubmit={handleSubmit}>

    //     {error && <p>{error}</p>}

    //     <div>
    //       <label htmlFor="email">
    //         <input type="email" name="email" id="email" placeholder=" Email ..." />
    //       </label>
    //     </div>

    //     <div>
    //       <label htmlFor="password">
    //         <input type="password" name="password" id="password" placeholder=" Password ... " />
    //       </label>
    //     </div>

    //     <button type="submit">Login</button>
    //   </form>
    // </main>


    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4">
  <div className="w-full max-w-md">

    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="mt-2 text-sm text-slate-400">
        Sign in to your account
      </p>
    </div>

    <form
      className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
      onSubmit={handleSubmit}
    >

      {error && (
        <p className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Email
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Password
        </label>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
      >
        Login
      </button>

    </form>
    
    <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-medium text-purple-400 transition hover:text-purple-300"
        >
          LogIn
        </a>
      </p>

  </div>

</main>

  )
}
