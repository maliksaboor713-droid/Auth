<main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-400">
            Your Notes
          </p>

          <h1 className="text-4xl font-bold text-white">
            Notes
          </h1>

          <p className="mt-2 text-slate-400">
            Create, edit, and manage your personal notes.
          </p>
        </div>

        {/* Create Note */}
        <section className="mb-8 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Create a new note
          </h2>

          <form>
            <textarea
              name="text"
              placeholder="Write your note here..."
              rows="5"
              maxLength="500"
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Maximum 500 characters
              </p>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500 active:scale-95"
              >
                Add Note
              </button>
            </div>
          </form>
        </section>

        {/* Notes List */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">
              Your Notes
            </h2>

            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
              3 Notes
            </span>
          </div>

          <div className="grid gap-4">

            {/* Note Card */}
            <article className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-xl transition hover:border-blue-500/30">

              <p className="leading-7 text-slate-200">
                This is an example note. Your API data will eventually appear
                here.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                <p className="text-xs text-slate-500">
                  Created recently
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
                  >
                    Delete
                  </button>
                </div>

              </div>
            </article>

            {/* Another Note Card */}
            <article className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-xl transition hover:border-blue-500/30">

              <p className="leading-7 text-slate-200">
                Another example note that will later come from MongoDB.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                <p className="text-xs text-slate-500">
                  Created recently
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
                  >
                    Delete
                  </button>
                </div>

              </div>
            </article>

          </div>
        </section>

      </div>
    </main>