 // app/tests/page.tsx

const tests = [
  {
    classNo: "Class 01",
    title: "SIGMA Speed Maths Challenge – Level 01",
    topic: "ADDITION TRICKS + ×11 Shortcut",
    duration: "10 Minutes",
    questions: "20 Questions",
    link: "https://web.examin8.com/testpaper/assessment/detail/2804097/180791780395253",
    status: "live",
  },
  {
    classNo: "Class 02",
    title: "SIGMA Speed Maths Challenge – Level 02",
    topic: "SUBTRACTION TRICKS + ×9 Shortcut",
    duration: "10 Minutes",
    questions: "10 Questions",
    link: "https://web.examin8.com/testpaper/assessment/detail/2805755/292771780486102",
    status: "live",
  },
  {
    classNo: "Class 03",
    title: "SIGMA Speed Maths Challenge – Level 03",
    topic: "Multiplication 2 digtit by 2 digit",
    duration: "15 Minutes",
    questions: "10 Questions",
    link: "https://web.examin8.com/testpaper/assessment/detail/2806735/652561780556210",
    status: "live",
  },
  {
    classNo: "Class 04",
    title: "SIGMA Speed Maths Challenge – Level 04",
    topic: "Squares Near 100",
    duration: "10 Minutes",
    questions: "20 Questions",
    link: "https://web.examin8.com/testpaper/assessment/detail/2819266/909831781252998",
    status: "live",
  },
  {
    classNo: "Class 05",
    title: "SIGMA Speed Maths Challenge – Level 05",
    topic: "Division Tricks",
    duration: "10 Minutes",
    questions: "20 Questions",
    link: "https://web.examin8.com/testpaper/assessment/detail/2820670/442751781329633",
    status: "live",
  },
  {
    classNo: "Class 06",
    title: "SIGMA Weekly Test 01",
    topic: "Revision Test",
    duration: "15 Minutes",
    questions: "25 Questions",
    link: "https://web.examin8.com/testpaper/assessment/detail/2822557/399581781417485",
    status: "live",
  },
];

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full bg-yellow-400 px-5 py-2 text-sm font-extrabold text-black">
            EDUFI CLASSES
          </span>

          <h1 className="mt-6 text-4xl font-black md:text-6xl">
            SIGMA Test Portal
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            30 Classes • 30 Tests • Track your speed, accuracy and confidence
            after every Sigma class.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl bg-white/10 px-6 py-4">
              <h3 className="text-2xl font-black text-yellow-300">30</h3>
              <p className="text-sm text-slate-300">Class Tests</p>
            </div>

            <div className="rounded-2xl bg-white/10 px-6 py-4">
              <h3 className="text-2xl font-black text-yellow-300">100+</h3>
              <p className="text-sm text-slate-300">Math Tricks</p>
            </div>

            <div className="rounded-2xl bg-white/10 px-6 py-4">
              <h3 className="text-2xl font-black text-yellow-300">900+</h3>
              <p className="text-sm text-slate-300">Practice Questions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black">Available Tests</h2>
            <p className="mt-2 text-slate-400">
              Start with Class 01. New tests will be added after every lecture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tests.map((test, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-black text-black">
                    {test.classNo}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      test.status === "live"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {test.status === "live" ? "LIVE" : "COMING SOON"}
                  </span>
                </div>

                <h3 className="text-xl font-black">{test.title}</h3>

                <p className="mt-2 text-slate-600">{test.topic}</p>

                <div className="mt-5 space-y-2 text-sm font-semibold text-slate-700">
                  <p>⏱️ Duration: {test.duration}</p>
                  <p>📝 Questions: {test.questions}</p>
                  <p>⚡ Focus: Speed + Accuracy</p>
                </div>

                {test.status === "live" ? (
                  <a
                    href={test.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block rounded-2xl bg-black py-3 text-center font-black text-yellow-300 transition hover:bg-slate-800"
                  >
                    Start Test
                  </a>
                ) : (
                  <button
                    disabled
                    className="mt-6 w-full cursor-not-allowed rounded-2xl bg-slate-200 py-3 font-black text-slate-500"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}