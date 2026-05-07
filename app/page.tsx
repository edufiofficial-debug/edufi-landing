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
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white text-black">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Crack SSC CGL <br />
          Maths & Reasoning 🚀
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl">
          India’s smartest preparation platform for SSC CGL,
          DSSSB & Government Exams.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-8 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
        >
          Enroll Now
        </button>
      </section>

      {/* COURSES SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-600 font-semibold">
              Courses
            </p>
            <h2 className="text-4xl font-bold mt-3">
              Learn from the best for every exam stage
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Structured classes, live doubt solving, and focused practice for SSC CGL, DSSSB, and all competitive exams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
                Maths Mastery
              </span>
              <h3 className="mt-6 text-2xl font-semibold">Concepts + Tricks</h3>
              <p className="mt-4 text-gray-600">
                Build speed and accuracy with topic-by-topic coaching for arithmetic, algebra, geometry, and data interpretation.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
                Reasoning Edge
              </span>
              <h3 className="mt-6 text-2xl font-semibold">Logical Ability</h3>
              <p className="mt-4 text-gray-600">
                Develop strong reasoning skills with puzzles, visual reasoning, and exam-style practice for fast results.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
                Exam Readiness
              </span>
              <h3 className="mt-6 text-2xl font-semibold">Full Test Practice</h3>
              <p className="mt-4 text-gray-600">
                Regular full-length mock tests, performance reviews, and personal feedback to keep you exam-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT PHOTOS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-600 font-semibold">
              Student Stories
            </p>
            <h2 className="text-4xl font-bold mt-3">
              Our students in action
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real learners sharing progress, confidence, and the energy of classroom success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-start">
            <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="relative h-80 w-full">
                <Image
                  src="/student1.jpg"
                  alt="Student 1 smiling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">Ananya</p>
                <p className="mt-2 text-gray-600">
                  "The live doubt sessions helped me clear every concept quickly and confidently."
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="relative h-80 w-full">
                <Image
                  src="/student2.jpg"
                  alt="Student 2 studying"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">Rohan</p>
                <p className="mt-2 text-gray-600">
                  "Focused practice and personalised guidance gave me the confidence I needed."
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="relative h-80 w-full">
                <Image
                  src="/student3.jpg"
                  alt="Student 3 happy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">Priya</p>
                <p className="mt-2 text-gray-600">
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
              Enquiry Form
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
              Submit on WhatsApp
            </button>

          </div>
        </div>
      )}
    </main>
  );
}