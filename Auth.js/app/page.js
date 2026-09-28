
// export default function Home() {
//   return (
//     <div>Hello World!</div>
//   )
// }





export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      {/* Navbar */}
      {/* <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-xl font-bold tracking-tight">
          Luma<span className="text-violet-600">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
          <a href="#features" className="hover:text-zinc-900">
            Features
          </a>
          <a href="#about" className="hover:text-zinc-900">
            About
          </a>
          <a href="#pricing" className="hover:text-zinc-900">
            Pricing
          </a>
        </nav>

        <button className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700">
          Get Started
        </button>
      </header> */}

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-500 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Now available for everyone
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Build something
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              beautiful.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
            A simple and elegant starting point for your next project.
            Beautiful by default, flexible when you need it.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-zinc-900 px-7 py-3.5 font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700">
              Get Started →
            </button>

            <button className="rounded-full border border-zinc-200 bg-white px-7 py-3.5 font-medium text-zinc-700 transition hover:bg-zinc-100">
              Explore Features
            </button>
          </div>
        </div>

        {/* Product Preview */}
        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/60">
          {/* Browser bar */}
          <div className="flex items-center gap-2 border-b border-zinc-100 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          {/* Dashboard */}
          <div className="grid min-h-[420px] grid-cols-12 bg-zinc-50">
            <aside className="col-span-3 hidden border-r border-zinc-200 bg-white p-5 sm:block">
              <div className="mb-10 text-sm font-bold">Dashboard</div>

              <div className="space-y-2">
                <div className="rounded-xl bg-zinc-900 px-4 py-3 text-sm text-white">
                  Overview
                </div>
                <div className="rounded-xl px-4 py-3 text-sm text-zinc-500">
                  Analytics
                </div>
                <div className="rounded-xl px-4 py-3 text-sm text-zinc-500">
                  Projects
                </div>
                <div className="rounded-xl px-4 py-3 text-sm text-zinc-500">
                  Settings
                </div>
              </div>
            </aside>

            <div className="col-span-12 p-6 sm:col-span-9 md:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Welcome back</p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Good morning 👋
                  </h2>
                </div>

                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500" />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Revenue", "$24,580"],
                  ["Users", "12,480"],
                  ["Growth", "+24.8%"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-zinc-200 bg-white p-5"
                  >
                    <p className="text-sm text-zinc-400">{label}</p>
                    <p className="mt-2 text-2xl font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Overview</p>
                  <span className="text-sm text-zinc-400">Last 30 days</span>
                </div>

                <div className="mt-8 flex h-32 items-end gap-2">
                  {[35, 55, 42, 70, 52, 80, 65, 95, 72, 88, 76, 100].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-600 to-indigo-400"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Everything you need.
            </h2>

            <p className="mt-4 leading-7 text-zinc-500">
              Powerful features wrapped in a simple, beautiful interface.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Feature
              icon="✦"
              title="Beautiful Design"
              description="A clean interface with thoughtful typography, spacing, and subtle animations."
            />

            <Feature
              icon="⚡"
              title="Lightning Fast"
              description="Built with performance in mind so your users get a fast experience."
            />

            <Feature
              icon="◈"
              title="Easy to Customize"
              description="Tailwind CSS makes it incredibly easy to adapt everything to your brand."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-zinc-900 px-6 py-20 text-center text-white">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Start building today.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-zinc-400">
            Turn your idea into a beautiful product with a simple starting
            point.
          </p>

          <button className="mt-8 rounded-full bg-white px-7 py-3.5 font-medium text-zinc-900 transition hover:bg-zinc-200">
            Get Started →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Luma. All rights reserved.</p>
          <p>Built with Next.js + Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}
// : {
//   icon: string;
//   title: string;
//   description: string;
// }
)
  {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-zinc-200 transition group-hover:bg-zinc-900 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-7 text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-500">{description}</p>
    </div>
  );
}


