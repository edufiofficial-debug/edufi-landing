export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-yellow-100">
        <h1 className="text-4xl font-bold">
          Crack SSC CGL Maths & Reasoning 🚀
        </h1>
        <p className="mt-4 text-lg">
          Learn from Edufi Classes – Complete Video Course
        </p>

        <a
          href="https://your-classplus-link.com"
          target="_blank"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Enroll Now
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold">What You Get</h2>

        <div className="mt-6 space-y-2">
          <p>✔ 200+ Video Lectures</p>
          <p>✔ SSC CGL + DSSSB PYQs</p>
          <p>✔ Shortcut Tricks</p>
          <p>✔ Mock Tests</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="text-center py-12 bg-orange-100">
        <h2 className="text-2xl font-bold">Course Price</h2>
        <p className="text-xl mt-2">₹999 (Limited Offer 🔥)</p>

        <a
          href="https://your-classplus-link.com"
          target="_blank"
          className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-xl"
        >
          Join Now
        </a>
      </section>

    </main>
  );
}
