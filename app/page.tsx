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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 py-24 px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_25%)]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="mb-6 inline-flex rounded-full border border-amber-300/30 bg-slate-900/80 px-4 py-2 text-sm uppercase tracking-[0.3em] text-amber-200">
            Premium Maths Academy
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Maths Foundation for <br />
            Grades 6th–10th
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            India’s most premium platform for building strong maths foundations,
            confidence, and classroom success.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="mt-8 bg-amber-500 hover:bg-amber-400 transition-all duration-300 text-slate-950 px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_20px_60px_rgba(249,115,22,0.25)]"
          >
            Join Maths Foundation
          </button>
        </div>
      </section>

      {/* COURSES & PRICING SECTION */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-300 font-semibold">
              Courses
            </p>
            <h2 className="text-4xl font-bold mt-3 text-white">
              Build a strong maths foundation for 6th–10th
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Structured classes, live doubt solving, and focused practice for school maths.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1">
              <span className="inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-900 px-4 py-2 text-sm font-semibold">
                Maths Mastery
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Concepts + Classwork</h3>
              <p className="mt-4 text-slate-300">
                Build confidence in arithmetic, algebra, geometry, and number sense with textbook-aligned lessons.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1">
              <span className="inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-900 px-4 py-2 text-sm font-semibold">
                Reasoning Edge
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Problem Solving</h3>
              <p className="mt-4 text-slate-300">
                Strengthen logical thinking and word-problem skills with step-by-step practice for school maths.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1">
              <span className="inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-900 px-4 py-2 text-sm font-semibold">
                Foundation Support
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Homework & Revision</h3>
              <p className="mt-4 text-slate-300">
                Regular quizzes, revision sessions, and homework help to keep your maths fundamentals strong.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.5)]">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300 font-semibold">
                Pricing
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Choose the right maths plan
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-slate-700 bg-slate-900 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
                <p className="text-sm uppercase tracking-[0.24em] text-amber-300 font-semibold">
                  Starter
                </p>
                <p className="mt-6 text-5xl font-bold text-white">₹999</p>
                <p className="text-slate-400">/ month</p>
                <ul className="mt-6 space-y-3 text-slate-300 text-left">
                  <li>• Core maths lessons</li>
                  <li>• Weekly practice tests</li>
                  <li>• Doubt support</li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-amber-400 bg-slate-900 p-8 text-center shadow-[0_20px_60px_rgba(249,115,22,0.25)]">
                <p className="text-sm uppercase tracking-[0.24em] text-amber-200 font-semibold">
                  Popular
                </p>
                <p className="mt-6 text-5xl font-bold text-white">₹2,499</p>
                <p className="text-slate-400">/ quarter</p>
                <ul className="mt-6 space-y-3 text-slate-300 text-left">
                  <li>• Live doubt sessions</li>
                  <li>• Revision workshops</li>
                  <li>• Progress reports</li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-slate-700 bg-slate-900 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
                <p className="text-sm uppercase tracking-[0.24em] text-amber-300 font-semibold">
                  Complete
                </p>
                <p className="mt-6 text-5xl font-bold text-white">₹7,999</p>
                <p className="text-slate-400">/ year</p>
                <ul className="mt-6 space-y-3 text-slate-300 text-left">
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
      <section className="bg-[#060915] py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-300 font-semibold">
              Student Stories
            </p>
            <h2 className="text-4xl font-bold mt-3 text-white">
              Our students in action
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Real learners sharing progress, confidence, and the energy of classroom success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-start">
            <div className="rounded-[2rem] overflow-hidden bg-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.4)]">
              <div className="relative h-80 w-full">
                <Image
                  src="/student1.jpg"
                  alt="Student 1 smiling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-slate-950 p-6">
                <p className="font-semibold text-lg text-white">Ananya — Grade 8</p>
                <p className="text-slate-400">
                  "The doubt sessions helped me clear every concept quickly and confidently."
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.4)]">
              <div className="relative h-80 w-full">
                <Image
                  src="/student2.jpg"
                  alt="Student 2 studying"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-slate-950 p-6">
                <p className="font-semibold text-lg text-white">Rohan — Grade 9</p>
                <p className="text-slate-400">
                  "Focused practice and guidance gave me the confidence I needed."
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.4)]">
              <div className="relative h-80 w-full">
                <Image
                  src="/student3.jpg"
                  alt="Student 3 happy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-slate-950 p-6">
                <p className="font-semibold text-lg text-white">Priya — Grade 10</p>
                <p className="text-slate-400">
                  "Learning with Edufi made preparation efficient and exam-ready in weeks."
                </p>
              </div>
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
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-2">
              Join Maths Foundation
            </h2>

            <p className="text-gray-600 mb-6">
              Fill your details and connect instantly on WhatsApp.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                handleChange("name", e.target.value)
              }
              className="w-full border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Class / Exam"
              value={formData.studentClass}
              onChange={(e) =>
                handleChange("studentClass", e.target.value)
              }
              className="w-full border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                handleChange("phone", e.target.value)
              }
              className="w-full border border-gray-300 p-3 rounded-xl mb-6 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white py-3 rounded-xl text-lg font-semibold"
            >
              Join Now
            </button>

          </div>
        </div>
      )}
    </main>
  );
}