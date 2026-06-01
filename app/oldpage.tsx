"use client";

import { useState, useEffect } from "react";

type FormData = {
  name: string;
  studentClass: string;
  phone: string;
};

const UPI_ID = "edufi987@fbl";
const COURSE_PRICE = 499;

const COURSE_LINK =
  "https://rlqyso.courses.store/842135?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp";

export default function Home() {
  const [showOfferPopup, setShowOfferPopup] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const upiLink = `upi://pay?pa=${UPI_ID}&pn=Edufi%20Classes&am=${COURSE_PRICE}&cu=INR`;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    studentClass: "",
    phone: "",
  });

  const offerEndDate = new Date("2026-06-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = offerEndDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      setTimeLeft({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      return;
    }

    setTimeLeft({
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
const trackLead = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead");
  }
};
  const openCourse = () => {
  trackLead();
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
trackLead();

window.open(
  `https://wa.me/919501941186?text=${encodeURIComponent(message)}`,
  "_blank"
);
   

    setShowForm(false);
    setFormData({ name: "", studentClass: "", phone: "" });
  };

  return (
    <main className="min-h-screen bg-[#FFF8E7] text-slate-900">
      <nav className="sticky top-0 z-40 bg-[#071A2F] px-6 py-4 text-white shadow-lg">
  <div className="mx-auto flex max-w-7xl items-center justify-between">
    
    <div>
      <h1 className="text-2xl font-black text-[#FFC928] md:text-3xl">
        Edufi Classes
      </h1>
      <p className="text-xs text-blue-100">
        Hisar | Classes 6th–10th
      </p>
    </div>

    <div className="flex items-center gap-3">

  <a
    href="/tests"
    className="rounded-full bg-yellow-400 px-5 py-3 font-black text-black transition hover:bg-yellow-300"
  >
    Tests
  </a>

  <a
    href="https://clpjack.page.link/atPk"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700"
  >
    📱 App
  </a>

  <a
    href="https://wa.me/919501941186"
    target="_blank"
    rel="noopener noreferrer"
    onClick={trackLead}
    className="rounded-full bg-green-500 px-5 py-3 font-black text-white transition hover:bg-green-600"
  >
    WhatsApp
  </a>

</div>
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
        Hisar's Trusted Maths Classes{" "}
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
        <a
  href="https://clpjack.page.link/atPk"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-700"
>
  📱 Download App Now
</a>
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
            Starting on 1st June. Limited seats available.
          </p>
        </div>
      </div>

      {/* OFFER CARD */}
      <div className="rounded-[1.5rem] bg-gradient-to-br from-[#FFF4C2] to-[#FFECA0] p-5 shadow-inner">

        <p className="rounded-full bg-green-100 px-4 py-2 text-center text-sm font-black text-green-700">
          ✅ 19 seats Left
        </p>

        <p className="mt-5 text-xs font-black uppercase tracking-wide text-orange-600">
          Special Launch Offer
        </p>

        <div className="mt-2 flex items-end gap-2">
          <h2 className="text-5xl font-black text-[#071A2F]">₹499</h2>

          <p className="mb-1 text-base font-black text-red-600">
            50% OFF
          </p>
        </div><div className="mt-5 rounded-2xl border border-orange-300 bg-white/60 p-4 text-center shadow-sm">
  <p className="text-red-600 font-extrabold mb-3">
    ⏰ Offer ends in
  </p>

  <div className="grid grid-cols-4 gap-2">
    {[
      { label: "DAYS", value: timeLeft.days },
      { label: "HRS", value: timeLeft.hours },
      { label: "MINS", value: timeLeft.minutes },
      { label: "SECS", value: timeLeft.seconds },
    ].map((item) => (
      <div
        key={item.label}
        className="bg-yellow-100 rounded-xl py-3"
      >
        <div className="text-2xl md:text-3xl font-black text-[#0f172a]">
          {item.value}
        </div>
        <div className="text-xs font-bold text-slate-600">
          {item.label}
        </div>
      </div>
    ))}
  </div>
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
        <p className="mt-2 text-center text-xs text-gray-500">
  Course link not working?
</p>

<button
  onClick={() => setShowQR(true)}
  className="block mx-auto text-green-600 font-semibold text-sm hover:underline"
>
  Pay Directly via UPI
</button>
      </div>
    </div>
  </div>
</div>
</div>
</section>

{/* YOUTUBE VIDEOS */}
<section className="bg-white px-4 py-16 md:px-6 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B66C3]">
        Watch Before You Join
      </p>

      <h2 className="mt-3 text-3xl font-black text-[#071A2F] md:text-5xl">
        Sigma Maths Videos
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
        Swipe to watch demo classes, maths tricks, puzzles and course previews.
      </p>
    </div>

    <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-5">
      {[
        {
          title: "Sigma Maths Course Intro",
          desc: "See how Sigma Maths improves speed and confidence.",
          videoId: "J9fIKPwPLTw",
        },
        {
          title: "Speed Maths Tricks",
          desc: "Learn smart calculation shortcuts.",
          videoId: "uSyFu_RoS8s",
        },
        {
          title: "Reasoning + Mental Maths",
          desc: "Build logical thinking and problem solving.",
          videoId: "hlmwbQTL9uk",
        },
        {
          title: "Squares Trick in Seconds",
          desc: "Fast square solving methods for students.",
          videoId: "uAROKNPdgVg",
        },
        {
          title: "Only 1% Can Solve This",
          desc: "Interesting maths puzzles and brain teasers.",
          videoId: "YOUR_VIDEO_ID_5",
        },
        {
          title: "Board Exam Maths Strategy",
          desc: "Smart preparation tips for Class 10th.",
          videoId: "YOUR_VIDEO_ID_6",
        },
        {
          title: "Daily Practice Session",
          desc: "Watch students solving questions live.",
          videoId: "YOUR_VIDEO_ID_7",
        },
        {
          title: "Sigma Maths Workshop",
          desc: "Highlights from classroom workshops.",
          videoId: "YOUR_VIDEO_ID_8",
        },
      ].map((video) => (
        <div
          key={video.title}
          className="group min-w-[320px] snap-center rounded-[1.5rem] border border-slate-100 bg-[#F8FAFC] p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:min-w-[380px]"
        >
          <div className="relative aspect-video overflow-hidden rounded-[1.2rem] bg-black transition duration-500 group-hover:scale-[1.02]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="p-3">
            <h3 className="mt-3 text-2xl font-black leading-tight text-[#071A2F]">
              {video.title}
            </h3>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {video.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 text-center">
      <a
        href="https://www.youtube.com/@edufi_classes"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-8 py-4 font-black text-white shadow-sm transition hover:-translate-y-1 hover:bg-red-700"
      >
        ▶ Visit Our YouTube Channel
      </a>
    </div>
  </div>
</section>

     {/* STYLISH STUDENT PHOTO GALLERY */}
<section className="relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
  <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#EAF2FF] blur-3xl"></div>
  <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"></div>

  <div className="relative mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[#0B66C3]">
        Edufi Classes
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight text-[#071A2F] md:text-6xl">
        Real Students. Real Learning.
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
        Classroom moments, workshops and students building maths confidence with Edufi Classes.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-4">
  {[
    {
      type: "image",
      src: "/students/student1.jpeg",
      title: "Classroom Practice",
      tag: "Daily Learning",
    },
    {
      type: "image",
      src: "/students/student2.jpeg",
      title: "Maths Workshop",
      tag: "Live Session",
    },
    {
      type: "video",
      src: "/students/video1.mp4",
      title: "Problem Solving",
      tag: "Smart Practice",
    },
    {
      type: "video",
      src: "/students/video2.mp4",
      title: "Confidence Building",
      tag: "Edufi Growth",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="relative h-[340px] overflow-hidden">
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            muted
            playsInline
className="h-full w-full object-contain bg-black"          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071A2F]/85 via-[#071A2F]/20 to-transparent"></div>

        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#0B66C3] shadow-md">
          {item.tag}
        </div>

        <div className="pointer-events-none absolute bottom-5 left-5 right-5 text-white">
          <h3 className="text-2xl font-black">{item.title}</h3>
          <p className="mt-2 text-sm text-blue-100">
            Students Review.
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

    <div className="mt-14 grid gap-5 md:grid-cols-4">
      {[
        ["500+", "Students Guided"],
        ["30 Days", "Focused Training"],
        ["100+", "Maths Tricks"],
        ["4.9★", "Student Satisfaction"],
      ].map(([num, text]) => (
        <div
          key={num}
          className="rounded-[1.7rem] border border-slate-100 bg-[#F8FAFC] p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
          <h3 className="text-4xl font-black text-[#071A2F]">{num}</h3>
          <p className="mt-2 font-semibold text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(35px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>

      {/* FEATURES */}
<section className="px-4 py-16 md:px-6">
  <div className="mx-auto max-w-7xl text-center">
    <p className="font-black uppercase tracking-widest text-[#0B66C3]">
      Why Join Sigma Maths?
    </p>

    <h2 className="mt-3 text-3xl font-black text-[#071A2F] md:text-5xl">
      Make Maths Fast, Easy and Interesting
    </h2>

    <div className="mt-10 flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
      {[
        ["⚡", "2x Speed", "Improve calculation speed with daily drills."],
        ["🧠", "Smart Tricks", "Learn shortcuts for faster solving."],
        ["📘", "Daily Worksheet", "Practice every day with guided sheets."],
        ["🎯", "Exam Ready", "Build accuracy and confidence."],
      ].map(([icon, title, desc]) => (
        <div
          key={title}
          className="min-w-[250px] rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl md:min-w-0"
        >
          <p className="text-5xl">{icon}</p>

          <h3 className="mt-4 text-xl font-black text-[#071A2F]">
            {title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 md:text-base">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      
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
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:flex-wrap">

  <div className="rounded-2xl bg-white px-6 py-4 text-lg font-black text-[#071A2F] shadow-sm">
    📍 202, Lajpat Nagar, Hisar
  </div>

  <a
    href="tel:9501941186"
    className="rounded-2xl bg-white px-6 py-4 text-lg font-black text-[#071A2F] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    📞 9501941186
  </a>

  <a
    href="tel:7027732516"
    className="rounded-2xl bg-white px-6 py-4 text-lg font-black text-[#071A2F] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    📞 7027732516
  </a>

</div>
</section>
      <section className="px-6 py-16">
  <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">

    {/* DOWNLOAD APP */}
    <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-[#071A2F] p-8 text-center text-white shadow-2xl">
      <h2 className="text-3xl font-black md:text-4xl">
        📱 Download Edufi Classes App
      </h2>

      <p className="mt-4 text-blue-100">
        Attend live classes, recordings, tests and study material anytime.
      </p>

      <a
        href="https://clpjack.page.link/atPk"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-2xl bg-[#FFC928] px-8 py-4 text-lg font-black text-[#071A2F]"
      >
        Download App
      </a>
    </div>
    

    {/* FINAL CTA */}
    <div className="rounded-[2rem] bg-gradient-to-br from-[#071A2F] to-[#0B66C3] p-8 text-center text-white shadow-2xl">
      <h2 className="text-3xl font-black md:text-4xl">
        Ready to Make Your Child Faster in Maths?
      </h2>

      <p className="mt-4 text-blue-100">
        Join Sigma Maths 30-day course and build confidence step by step.
      </p>

      <p className="mt-5 inline-block rounded-full bg-[#FFC928] px-6 py-3 text-lg font-black text-[#071A2F]">
        Use Coupon FN100
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={openCourse}
          className="rounded-2xl bg-[#FFC928] px-8 py-4 font-black text-[#071A2F]"
        >
          Join Now
        </button>

        <a
          href="https://wa.me/919501941186"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLead}
          className="rounded-2xl bg-green-500 px-8 py-4 font-black text-white"
        >
          WhatsApp
        </a>
      </div>
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
      {/* FLOATING CALL BUTTON */}
<a
  href="tel:9501941186"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
  aria-label="Call Edufi Classes"
>
  📞
</a>{showOfferPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="relative w-[92%] max-w-sm max-h-[88vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setShowOfferPopup(false)}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold shadow-lg"
      >
        ×
      </button>

      {/* Header */}
      <div className="bg-[#001f3f] px-5 py-8 text-center text-white">
        <p className="text-xs font-bold tracking-[4px] uppercase opacity-80">
          Sigma Maths 30-Day Challenge
        </p>

        <h2 className="mt-4 text-3xl font-extrabold leading-tight">
          Sigma Maths
          <br />
          30-Day Challenge
        </h2>

        <p className="mt-4 text-base text-white/80">
          For Classes 6th–10th • Speed Maths • Tricks • Daily Practice
        </p>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="mb-5 text-center">
          <span className="rounded-full bg-red-100 px-5 py-2 text-lg font-bold text-red-600">
            🔥 Only 19 Seats Left
          </span>
        </div>

        {/* Price Box */}
        <div className="rounded-3xl bg-slate-50 p-5 text-center shadow-sm">
          <p className="text-lg font-bold uppercase tracking-wider text-blue-700">
            Special Launch Offer
          </p>

          <div className="mt-3 text-6xl font-extrabold text-slate-900">
            ₹499
          </div>

          <p className="mt-2 text-xl text-slate-500">
            Regular Price <span className="line-through">₹999</span>
          </p>

          <div className="mt-4 rounded-2xl border bg-white p-4 text-xl font-bold text-slate-900">
            Coupon Code: FN100
          </div>
        </div>

        {/* Features */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-100 p-3 text-center font-semibold">
            📘 Daily Worksheets
          </div>

          <div className="rounded-2xl bg-slate-100 p-3 text-center font-semibold">
            ⚡ Speed Tricks
          </div>

          <div className="rounded-2xl bg-slate-100 p-3 text-center font-semibold">
            💬 Doubt Support
          </div>

          <div className="rounded-2xl bg-slate-100 p-3 text-center font-semibold">
            🎯 Exam Confidence
          </div>
        </div>

        {/* CTA */}
        <a
          href={COURSE_LINK}
          className="mt-6 block w-full rounded-2xl bg-[#001f3f] py-4 text-center text-2xl font-bold text-white shadow-lg"
        >
          Enroll Now →
        </a>

        <button
          onClick={() => setShowOfferPopup(false)}
          className="mt-4 w-full text-center text-lg font-semibold text-slate-500"
        >
          I'll check later
        </button>

      </div>
    </div>
  </div>
)}
{showQR && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="bg-white rounded-3xl p-6 text-center max-w-sm w-full shadow-2xl">

      <h3 className="text-2xl font-bold">
        Pay ₹499
      </h3>

      <p className="text-gray-600 mt-2">
        Scan QR using GPay, PhonePe or Paytm
      </p>

      <img
        src="/payment-qr.png"
        alt="Payment QR"
        className="w-64 h-64 mx-auto mt-5 rounded-xl border"
      />

      <a
        href={upiLink}
        className="mt-5 block bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl"
      >
        Open UPI App
      </a>

      <a
        href="https://wa.me/919501941186"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-green-600 font-semibold"
      >
        Send Screenshot on WhatsApp
      </a>

      <button
        onClick={() => setShowQR(false)}
        className="mt-4 text-gray-500"
      >
        Close
      </button>

    </div>
  </div>
)}
    </main>
  );
}