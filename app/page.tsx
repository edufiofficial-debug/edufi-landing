export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="text-center py-20 bg-yellow-100">
        <h1 className="text-5xl font-bold">
          Crack SSC CGL Maths & Reasoning 🚀
        </h1>
        <p className="mt-4 text-lg">
          Learn Fast with Tricks, PYQs & Concept Clarity
        </p>

        <a
          href="https://your-classplus-link.com"
          target="_blank"
          className="mt-6 inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg"
        >
          Enroll Now
        </a>
      </section>

      {/* COURSE SECTION */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Our Courses</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="shadow-xl rounded-2xl p-4">
            <img src="/course1.jpg" className="rounded-xl" />
            <h3 className="text-xl font-semibold mt-3">
              Maths Complete Course
            </h3>
            <p>200+ Lectures + PYQs</p>
          </div>

          <div className="shadow-xl rounded-2xl p-4">
            <img src="/course2.jpg" className="rounded-xl" />
            <h3 className="text-xl font-semibold mt-3">
              Reasoning Mastery
            </h3>
            <p>Tricks + Practice Sets</p>
          </div>

          <div className="shadow-xl rounded-2xl p-4">
            <img src="/course3.jpg" className="rounded-xl" />
            <h3 className="text-xl font-semibold mt-3">
              SSC Combo Course
            </h3>
            <p>Maths + Reasoning Full Pack</p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center">
          Our Students Results ⭐
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-4 rounded-2xl shadow">
            <img src="/student1.jpg" className="rounded-xl" />
            <p className="mt-3">
              "Best maths teacher! Cleared SSC with 95% marks."
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <img src="/student2.jpg" className="rounded-xl" />
            <p className="mt-3">
              "Tricks helped me solve questions very fast!"
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <img src="/student3.jpg" className="rounded-xl" />
            <p className="mt-3">
              "Highly recommended for DSSSB preparation."
            </p>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="text-center py-16 bg-orange-100">
        <h2 className="text-3xl font-bold">Limited Time Offer 🔥</h2>
        <p className="text-2xl mt-4">₹999 Only</p>

        <a
          href="https://your-classplus-link.com"
          target="_blank"
          className="mt-6 inline-block bg-orange-500 text-white px-8 py-4 rounded-2xl text-lg"
        >
          Join Now
        </a>
      </section>

      {/* WHATSAPP CTA */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold">
          Have Questions? Chat with Us
        </h2>

        <a
          href="https://wa.me/919501941186"
          target="_blank"
          className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-xl"
        >
          Chat on WhatsApp
        </a>
      </section>

    </main>
  );
}