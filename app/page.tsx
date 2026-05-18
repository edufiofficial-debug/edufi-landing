"use client";

import { useState } from "react";

type FormData = {
  name: string;
  studentClass: string;
  phone: string;
};

const COURSE_LINK =
  "https://rlqyso.courses.store/842135?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp";

const youtubeVideos = [
  {
    title: "Sigma Maths Course Intro",
    desc: "Watch how Sigma 30 Day Maths Challenge helps students improve speed and confidence.",
    videoId: "J9fIKPwPLTw",
  },
  {
    title: "Speed Maths Trick",
    desc: "Learn fast calculation tricks for Classes 6th–10th.",
    videoId: "YOUR_VIDEO_ID_2",
  },
  {
    title: "Reasoning + Mental Maths",
    desc: "Smart solving methods for school and competitive preparation.",
    videoId: "YOUR_VIDEO_ID_3",
  },
];

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    studentClass: "",
    phone: "",
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const openCourse = () => {
    window.open(COURSE_LINK, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.studentClass || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    const message = `New Sigma Maths Course Enquiry

Name: ${formData.name}
Class: ${formData.studentClass}
Phone: ${formData.phone}
Coupon Code: FN100`;

    window.open(
      `https://wa.me/919501941186?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowForm(false);
    setFormData({ name: "", studentClass: "", phone: "" });
  };

  return (
    <main className="min-h-screen bg-[#FFF8E7] text-slate-900">
      {/* TOP NAV */}
      <nav className="sticky top-0 z-40 bg-[#071A2F] px-6 py-4 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#FFC928] md:text-3xl">
              Edufi Classes
            </h1>
            <p className="text-xs text-blue-100">Hisar | Classes 6th–10th</p>
          </div>

          <a
            href="https://wa.me/919501941186"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-5 py-3 font-black text-white transition hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* OFFER BAR */}
      <section className="bg-[#FFC928] px-6 py-5 shadow-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
              Limited Time Offer
            </p>

            <h2 className="text-2xl font-black text-[#071A2F] md:text-4xl">
              50% OFF for First 100 Students
            </h2>

            <p className="mt-2 font-bold text-slate-800">
              Use Coupon Code:
              <span className="ml-2 rounded-full bg-red-600 px-5 py-2 text-white">
                FN100
              </span>
            </p>
          </div>

          <button
            onClick={openCourse}
            className="rounded-2xl bg-[#071A2F] px-8 py-4 font-black text-white transition hover:bg-[#0B66C3]"
          >
            Claim Offer Now
          </button>
        </div>
      </section>

    
    
{/* HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#071A2F] via-[#0B3C6D] to-[#0B66C3] px-6 py-16 text-white md:py-24">
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FFC928]/20 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl"></div>

  <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
    {/* LEFT */}
    <div>
      <p className="inline-flex rounded-full bg-[#FFC928] px-5 py-2 text-sm font-black uppercase tracking-widest text-[#071A2F] shadow-lg">
        🔥 30 Days Summer Maths Course
      </p>

      <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
        Sigma Maths Batch for Classes{" "}
        <span className="text-[#FFC928]">6th–10th</span>
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
        Make your child faster, sharper and more confident in maths with daily
        worksheets, speed tricks and problem-solving practice.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={openCourse}
          className="rounded-2xl bg-[#FFC928] px-8 py-4 text-lg font-black text-[#071A2F] shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
        >
          Join Course Now →
        </button>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-2xl border-2 border-white px-8 py-4 text-lg font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#071A2F]"
        >
          Get Call Back
        </button>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {["30 Days", "Daily Worksheet", "100+ Tricks"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
          >
            <p className="font-black text-[#FFC928]">{item}</p>
          </div>
        ))}
      </div>
    </div>


    {/* RIGHT */}
<div className="relative">
  <div className="rounded-[2rem] bg-white p-4 shadow-2xl">

    {/* TOP GRID */}
    <div className="grid gap-4 lg:grid-cols-2">

      {/* COURSE IMAGE */}
      <div className="overflow-hidden rounded-[1.5rem] bg-[#071A2F] shadow-xl">
        <img
          src="/sigma-course.jpg"
          alt="Sigma Maths Course"
          className="h-52 w-full object-cover"
        />

        <div className="p-5 text-white">
          <p className="inline-block rounded-full bg-[#FFC928] px-4 py-2 text-xs font-black text-[#071A2F]">
            Sigma 30 Day Challenge
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight">
            Become Faster in Maths ⚡
          </h3>

          <p className="mt-2 text-sm text-blue-100">
            Daily maths practice for speed and confidence.
          </p>
        </div>
      </div>

      {/* OFFER CARD */}
      <div className="rounded-[1.5rem] bg-gradient-to-br from-[#FFF4C2] to-[#FFECA0] p-5 shadow-inner">

        <p className="rounded-full bg-green-100 px-4 py-2 text-center text-sm font-black text-green-700">
          ✅ Limited Seats Open
        </p>

        <p className="mt-5 text-xs font-black uppercase tracking-wide text-orange-600">
          Special Launch Offer
        </p>

        <div className="mt-2 flex items-end gap-2">
          <h2 className="text-5xl font-black text-[#071A2F]">₹499</h2>

          <p className="mb-1 text-base font-black text-red-600">
            50% OFF
          </p>
        </div>

        <p className="mt-2 text-base font-bold text-slate-600">
          <span className="line-through">₹999</span> only for first 100 students
        </p>

        {/* COUPON */}
        <p className="mt-4 rounded-2xl bg-red-600 px-4 py-3 text-center text-lg font-black text-white shadow-lg">
          Coupon: FN100
        </p>

        {/* FEATURES */}
        <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
          <li>✅ 30-min class</li>
          <li>✅ Daily worksheet</li>
          <li>✅ Maths tricks</li>
          <li>✅ Doubt support</li>
        </ul>

        {/* BUTTON */}
        <button
          onClick={openCourse}
          className="mt-6 w-full rounded-2xl bg-[#071A2F] px-5 py-4 text-base font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0B66C3]"
        >
          Enroll at ₹499 →
        </button>
      </div>
    </div>
  </div>
</div>
</div>
</section>

      {/* YOUTUBE VIDEOS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B66C3]">
              Watch Before You Join
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#071A2F] md:text-5xl">
              Sigma Maths Videos
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Watch demo classes, maths tricks and course preview directly on
              the website.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {youtubeVideos.map((video) => (
              <div
                key={video.title}
                className="overflow-hidden rounded-[2rem] bg-[#F4F8FF] p-4 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                  <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="p-3">
                  <h3 className="mt-3 text-2xl font-black text-[#071A2F]">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-slate-600">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/@edufi_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-red-600 px-8 py-4 font-black text-white transition hover:bg-red-700"
            >
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* STUDENT PHOTOS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B66C3]">
              Edufi Classes
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#071A2F] md:text-5xl">
              Students Solving Maths with Confidence
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Classroom-focused learning for Classes 7th–10th with speed maths,
              tricks and problem solving.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                grade: "Class 7th",
                title: "Building Strong Basics",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop",
              },
              {
                grade: "Class 8th",
                title: "Maths Speed Training",
                img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
              },
              {
                grade: "Class 9th",
                title: "Problem Solving Mastery",
                img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
              },
              {
                grade: "Class 10th",
                title: "Board Exam Preparation",
                img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((item) => (
              <div
                key={item.grade}
                className="overflow-hidden rounded-[2rem] bg-[#F4F8FF] shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.grade}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm font-black uppercase text-[#0B66C3]">
                    {item.grade}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-[#071A2F]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Daily practice, smart tricks and concept clarity.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-black uppercase tracking-widest text-[#0B66C3]">
            Why Join Sigma Maths?
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Make Maths Fast, Easy and Interesting
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["⚡", "2x Speed", "Improve calculation speed with daily drills."],
              ["🧠", "Smart Tricks", "Learn shortcuts for faster solving."],
              ["📘", "Daily Worksheet", "Practice every day with guided sheets."],
              ["🎯", "Exam Ready", "Build accuracy and confidence."],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="text-5xl">{icon}</p>
                <h3 className="mt-4 text-xl font-black text-[#071A2F]">
                  {title}
                </h3>
                <p className="mt-3 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE PLAN */}
      {/* COURSE PLAN */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#071A2F] via-[#0B3C6D] to-[#0B66C3] px-6 py-20">
  <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#FFC928]/20 blur-3xl"></div>
  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl"></div>

  <div className="relative mx-auto max-w-7xl">
    <div className="text-center">
      <p className="font-black uppercase tracking-[0.25em] text-[#FFC928]">
        Course Structure
      </p>

      <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">
        30-Day Maths Growth Plan
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
        A step-by-step journey from slow calculations to fast, confident maths solving.
      </p>
    </div>

    <div className="mt-14 grid gap-7 md:grid-cols-3">
      {[
        ["🚀", "Week 1", "Basic Calculation Speed", "Tables, squares, addition, subtraction and number sense.", "from-yellow-300 to-orange-400"],
        ["⚡", "Week 2", "Tricks & Shortcuts", "Multiplication, division, fractions and percentage tricks.", "from-blue-300 to-cyan-400"],
        ["🧠", "Week 3", "Reasoning + Word Problems", "Logical thinking and smart problem-solving approach.", "from-purple-300 to-pink-400"],
        ["🎯", "Week 4", "Mixed Practice", "Daily worksheets, revision and final speed challenge.", "from-green-300 to-emerald-400"],
        ["⏱️", "Daily", "30 Minute Class", "Short, focused and powerful maths training.", "from-orange-300 to-red-400"],
        ["💬", "Bonus", "Doubt Support", "Students can ask doubts and improve weak areas.", "from-indigo-300 to-blue-500"],
      ].map(([icon, tag, title, desc, gradient]) => (
        <div
          key={title}
          className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-1 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-3 hover:scale-[1.02]"
        >
          <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${gradient}`}></div>

          <div className="h-full rounded-[1.8rem] bg-white p-7">
            <div className="flex items-center justify-between">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-4xl shadow-lg transition group-hover:rotate-6 group-hover:scale-110`}>
                {icon}
              </div>

              <span className="rounded-full bg-[#071A2F] px-4 py-2 text-sm font-black text-[#FFC928]">
                {tag}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-black text-[#071A2F]">
              {title}
            </h3>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {desc}
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className={`h-full w-2/3 rounded-full bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:w-full`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* LOCATION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#F4F8FF] p-8 shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B66C3]">
            Edufi Classes
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#071A2F]">
            Visit Our Institute
          </h2>

          <p className="mt-4 text-lg text-slate-700">
            📍 202, Lajpat Nagar, Hisar
          </p>

          <a
            href="https://maps.google.com/?q=202,Lajpat+Nagar,Hisar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-2xl bg-[#0B66C3] px-8 py-4 font-black text-white transition hover:bg-[#071A2F]"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-[#071A2F] to-[#0B66C3] p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="text-3xl font-black md:text-5xl">
            Ready to Make Your Child Faster in Maths?
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Join Sigma Maths 30-day course and build confidence step by step.
          </p>

          <p className="mt-5 inline-block rounded-full bg-[#FFC928] px-6 py-3 text-xl font-black text-[#071A2F]">
            Use Coupon FN100
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={openCourse}
              className="rounded-2xl bg-[#FFC928] px-8 py-4 font-black text-[#071A2F] transition hover:bg-orange-400"
            >
              Join Now
            </button>

            <a
              href="https://wa.me/919501941186"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-green-500 px-8 py-4 font-black text-white transition hover:bg-green-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FORM POPUP */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-4 text-3xl font-bold text-slate-500 hover:text-red-600"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-[#071A2F]">
              Join Sigma Maths
            </h2>

            <p className="mt-2 text-slate-600">
              Fill details and connect instantly on WhatsApp.
            </p>

            <input
              type="text"
              placeholder="Student Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-6 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-[#0B66C3]"
            />

            <input
              type="text"
              placeholder="Class"
              value={formData.studentClass}
              onChange={(e) => handleChange("studentClass", e.target.value)}
              className="mt-4 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-[#0B66C3]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-4 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-[#0B66C3]"
            />

            <button
              onClick={handleSubmit}
              className="mt-6 w-full rounded-2xl bg-[#FFC928] px-6 py-4 font-black text-[#071A2F] transition hover:bg-orange-400"
            >
              Submit on WhatsApp
            </button>
          </div>
        </div>
      )}
    </main>
  );
}