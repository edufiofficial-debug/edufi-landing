"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    phone: "",
  });
  const [couponCode, setCouponCode] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateCoupon = () => {
    const code = `EDUFI50-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCouponCode(code);
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.studentClass ||
      !formData.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    const message = `
*New Edufi Classes Enquiry*

👤 Name: ${formData.name}
📘 Class/Exam: ${formData.studentClass}
📞 Phone: ${formData.phone}
    `;

    const whatsappURL = `https://wa.me/919501941186?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setShowForm(false);

    setFormData({
      name: "",
      studentClass: "",
      phone: "",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-700 via-orange-500 to-orange-100 text-slate-950">

      <div className="bg-red-950/95 text-white py-3 text-center text-sm tracking-[0.18em] uppercase">
        <span className="font-semibold text-base sm:text-lg">Edufi Classes</span>
        <span className="mx-2 hidden sm:inline">•</span>
        <span className="text-sm sm:text-base">
          Contact on WhatsApp: <a href="https://wa.me/919501941186" className="font-semibold underline decoration-white/70 underline-offset-2">9501941186</a>
        </span>
      </div>

      <section className="relative overflow-hidden bg-red-700 text-white py-4 px-6 border-b-4 border-orange-300/70">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_15%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_20%)]" />
        <div className="relative mx-auto flex flex-col gap-3 items-center justify-between text-center md:flex-row md:text-left md:gap-0 md:items-center max-w-6xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-100/90">Exclusive launch</p>
            <p className="text-lg font-bold tracking-[0.1em] uppercase">50% OFF Limited Offer</p>
            <p className="text-sm text-orange-100 mt-1">
              Click now to join and grab your exclusive coupon.
            </p>
          </div>

          <button
            onClick={generateCoupon}
            className="relative overflow-hidden rounded-full bg-white px-6 py-3 text-red-700 font-semibold transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:bg-orange-100 hover:text-red-900 focus:outline-none focus:ring-4 focus:ring-white/40 animate-pulse"
          >
            Click Now to Join
          </button>
        </div>
      </section>

      {couponCode && (
        <section className="bg-orange-50 py-6 px-6">
          <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-orange-200 bg-gradient-to-br from-white via-orange-50 to-orange-100 p-6 text-center shadow-[0_20px_80px_rgba(251,146,60,0.18)] ring-1 ring-orange-200/80 animate-pulse">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
              Coupon Generated
            </p>
            <p className="mt-3 inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-3xl font-bold text-white shadow-[0_15px_40px_rgba(220,38,38,0.35)]">
              {couponCode}
            </p>
            <p className="mt-3 text-slate-600">
              Use this code for 50% off when you join via WhatsApp.
            </p>
          </div>
        </section>
      )}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-orange-500 to-orange-100 py-24 px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(254,71,41,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.18),_transparent_25%)]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="mb-6 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white">
            Premium Maths Academy
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Maths Foundation for <br />
            Grades 6th–10th
          </h1>

          <p className="mt-6 text-lg text-white/85 max-w-2xl">
            India’s most premium platform for building strong maths foundations,
            confidence, and classroom success.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="mt-8 bg-white text-red-700 hover:bg-slate-100 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_20px_60px_rgba(251,146,60,0.25)]"
          >
            Join Maths Foundation
          </button>
        </div>
      </section>

      {/* COURSES & PRICING SECTION */}
      <section className="bg-red-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
              Courses
            </p>
            <h2 className="text-4xl font-bold mt-3 text-slate-950">
              Build a strong maths foundation for 6th–10th
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Structured classes, live doubt solving, and focused practice for school maths.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-red-100 bg-red-50 p-8 shadow-[0_24px_80px_rgba(251,146,60,0.12)] transition-all duration-300 hover:-translate-y-1">
              <span className="inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 px-4 py-2 text-sm font-semibold">
                Maths Mastery
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">Concepts + Classwork</h3>
              <p className="mt-4 text-slate-600">
                Build confidence in arithmetic, algebra, geometry, and number sense with textbook-aligned lessons.
              </p>
            </div>

            <div className="rounded-[2rem] border border-orange-100 bg-orange-50 p-8 shadow-[0_24px_80px_rgba(251,146,60,0.12)] transition-all duration-300 hover:-translate-y-1">
              <span className="inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-700 px-4 py-2 text-sm font-semibold">
                Reasoning Edge
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">Problem Solving</h3>
              <p className="mt-4 text-slate-600">
                Strengthen logical thinking and word-problem skills with step-by-step practice for school maths.
              </p>
            </div>

            <div className="rounded-[2rem] border border-red-100 bg-red-50 p-8 shadow-[0_24px_80px_rgba(251,146,60,0.12)] transition-all duration-300 hover:-translate-y-1">
              <span className="inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 px-4 py-2 text-sm font-semibold">
                Foundation Support
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">Homework & Revision</h3>
              <p className="mt-4 text-slate-600">
                Regular quizzes, revision sessions, and homework help to keep your maths fundamentals strong.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-red-100 bg-red-100/80 p-8 shadow-[0_24px_80px_rgba(251,146,60,0.18)]">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-700 font-semibold">
                Pricing
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-950">
                Choose the right maths plan
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-8 text-center shadow-[0_20px_60px_rgba(251,146,60,0.18)]">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
                  Starter
                </p>
                <p className="mt-6 text-5xl font-bold text-red-700">₹999</p>
                <p className="text-slate-500">/ month</p>
                <ul className="mt-6 space-y-3 text-slate-600 text-left">
                  <li>• Core maths lessons</li>
                  <li>• Weekly practice tests</li>
                  <li>• Doubt support</li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-orange-300 bg-orange-50 p-8 text-center shadow-[0_20px_60px_rgba(251,146,60,0.18)]">
                <p className="text-sm uppercase tracking-[0.24em] text-orange-600 font-semibold">
                  Popular
                </p>
                <p className="mt-6 text-5xl font-bold text-red-700">₹2,499</p>
                <p className="text-slate-500">/ quarter</p>
                <ul className="mt-6 space-y-3 text-slate-600 text-left">
                  <li>• Live doubt sessions</li>
                  <li>• Revision workshops</li>
                  <li>• Progress reports</li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-8 text-center shadow-[0_20px_60px_rgba(251,146,60,0.18)]">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
                  Complete
                </p>
                <p className="mt-6 text-5xl font-bold text-red-700">₹7,999</p>
                <p className="text-slate-500">/ year</p>
                <ul className="mt-6 space-y-3 text-slate-600 text-left">
                  <li>• Year-round maths support</li>
                  <li>• Full curriculum coverage</li>
                  <li>• Premium student guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT PHOTOS */}
      <section className="bg-red-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
              Student Stories
            </p>
            <h2 className="text-4xl font-bold mt-3 text-slate-950">
              Our students in action
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Real learners sharing progress, confidence, and the energy of classroom success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-start">
            <div className="rounded-[2rem] overflow-hidden bg-red-50 shadow-[0_24px_80px_rgba(251,146,60,0.18)]">
              <div className="relative h-80 w-full">
                <Image
                  src="/student1.jpg"
                  alt="Student 1 smiling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-white p-6">
                <p className="font-semibold text-lg text-red-700">Ananya — Grade 8</p>
                <p className="text-slate-600">
                  "The doubt sessions helped me clear every concept quickly and confidently."
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-red-50 shadow-[0_24px_80px_rgba(251,146,60,0.18)]">
              <div className="relative h-80 w-full">
                <Image
                  src="/student2.jpg"
                  alt="Student 2 studying"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-red-50 p-6">
                <p className="font-semibold text-lg text-red-700">Rohan — Grade 9</p>
                <p className="text-slate-600">
                  "Focused practice and guidance gave me the confidence I needed."
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-red-50 shadow-[0_24px_80px_rgba(251,146,60,0.18)]">
              <div className="relative h-80 w-full">
                <Image
                  src="/student3.jpg"
                  alt="Student 3 happy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-red-50 p-6">
                <p className="font-semibold text-lg text-red-700">Priya — Grade 10</p>
                <p className="text-slate-600">
                  "Learning with Edufi made preparation efficient and exam-ready in weeks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="bg-white/90 py-20 px-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-red-100 bg-red-50 p-8 shadow-[0_24px_80px_rgba(251,146,60,0.12)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
                Location
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950">
                Visit us at Edufi Classes
              </h2>
              <p className="mt-4 inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 text-lg font-semibold text-red-700 shadow-sm">
                <span className="text-xl">📍</span>
                202, Lajpat Nagar, Hisar
              </p>
              <p className="mt-4 text-slate-600 max-w-xl">
                Reach us on WhatsApp at <a href="https://wa.me/919501941186" className="font-semibold text-red-700 underline">9501941186</a> for admissions and enquiries.
              </p>
            </div>

            <div className="h-72 overflow-hidden rounded-[1.75rem] border border-red-200 shadow-[0_20px_60px_rgba(251,146,60,0.15)] lg:h-80">
              <iframe
                title="Edufi Classes Hisar Location"
                src="https://www.google.com/maps?q=202%2C%20Lajpat%20Nagar%2C%20Hisar&output=embed"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">

          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-fadeIn">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-2xl text-red-600 hover:text-red-800"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-2 text-slate-950">
              Join Maths Foundation
            </h2>

            <p className="text-slate-600 mb-6">
              Fill your details and connect instantly on WhatsApp.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                handleChange("name", e.target.value)
              }
              className="w-full border border-red-200 p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="text"
              placeholder="Class / Exam"
              value={formData.studentClass}
              onChange={(e) =>
                handleChange("studentClass", e.target.value)
              }
              className="w-full border border-red-200 p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                handleChange("phone", e.target.value)
              }
              className="w-full border border-red-200 p-3 rounded-xl mb-6 outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-3 rounded-xl text-lg font-semibold"
            >
              Join Now
            </button>

          </div>
        </div>
      )}
    </main>
  );
}