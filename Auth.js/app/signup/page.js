'use client';
import { useState } from "react";
import {useRouter} from "next/navigation"

export default function SignupPage() {
  const [error, setError]= useState("");
  const router= useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const formData= new FormData(event.currentTarget);
    const name= formData.get("name");
    const email= formData.get("email");
    const password= formData.get("password");

    console.log( name, email, password )

    const response= await fetch("/api/auth/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({name,email,password}),
    });
    const data= await response.json();
    if(!response.ok){
      console.log("Signup failed",data.message)
      setError(data.message)
    }else{
      router.push("/dashboard")
      console.log("Signup failed",data.message)
    }
  }


  return (
    // <main className='min-h-screen flex flex-col justify-center items-center gap-5 '>
    //   <h1>SignUp Page</h1>

    //   <form onSubmit={handleSubmit}>
    //   {error && <h1>{error}</h1>}

    //     <div>
    //       <label htmlFor="name">
    //         <input type="text" name='name' id='name' placeholder=' Usrname ... ' />
    //       </label>
    //     </div>

    //     <div>
    //       <label htmlFor="email">
    //         <input type="email" name='email' id='email' placeholder=' Email ... ' />
    //       </label>
    //     </div>

    //     <div>
    //       <label htmlFor="password">
    //         <input type="password" name='password' id='password' placeholder=' Password ... ' />
    //       </label>
    //     </div>

    //     <button type='submit'>SignIn</button>

    //   </form>
    // </main>

    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-4">
  <div className="w-full max-w-md">
    <div className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-2xl shadow-lg">
          ✨
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          Create an account
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Sign up to get started with us
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Username */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Username
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your username"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        {/* Email */}
        <div>
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
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        {/* Password */}
        <div>
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
            placeholder="Create a password"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/30 transition duration-200 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/20 active:scale-[0.98]"
        >
          Create Account
        </button>

      </form>

      {/* Footer */}
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

    <p className="mt-6 text-center text-xs text-slate-600">
      By creating an account, you agree to our Terms & Privacy Policy.
    </p>
  </div>
</main>

  )
}
