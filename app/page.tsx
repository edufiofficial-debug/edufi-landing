"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showFloatingBanners, setShowFloatingBanners] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    phone: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<"concepts" | "problemsolving" | "homework" | "mentalability">("concepts");

  const courses: Record<"concepts" | "problemsolving" | "homework" | "mentalability", {
    title: string;
    tag: string;
    description: string;
    features: string[];
    price: string;
    period: string;
    status?: string;
  }> = {
    concepts: {
      title: "Concepts + Classwork",
      tag: "Maths Mastery",
      description:
        "Build confidence in arithmetic, algebra, geometry, and number sense with strong textbook-aligned lessons.",
      features: [
        "Topic-wise detailed explanations",
        "Textbook-aligned curriculum",
        "Interactive classwork sessions",
        "Concept-building exercises",
      ],
      price: "₹2,499",
      period: "per month",
    },
    problemsolving: {
      title: "Problem Solving",
      tag: "Reasoning Edge",
      description:
        "Strengthen logical thinking and word-problem skills with step-by-step practice for school maths.",
      features: [
        "Step-by-step problem walkthroughs",
        "Word problem mastery",
        "Logic and reasoning drills",
        "Practice question bank",
      ],
      price: "₹3,499",
      period: "per month",
    },
    homework: {
      title: "Homework & Revision",
      tag: "Foundation Support",
      description:
        "Regular quizzes, revision sessions, and homework help to keep your maths fundamentals strong.",
      features: [
        "Daily homework guidance",
        "Weekly revision sessions",
        "Progress quizzes",
        "Doubt clearing support",
      ],
      price: "₹1,999",
      period: "per month",
    },
    mentalability: {
      title: "Maths Summer Mental Ability",
      tag: "Summer Intensive",
      description:
        "Master Math in 30 days with this exclusive summer course. Daily 30-minute sessions designed to boost your mental calculation speed and mathematical thinking.",
      features: [
        "Daily 30-minute sessions",
        "1 worksheet daily for practice",
        "Speed increase techniques",
        "Mental math growth techniques",
        "Best problem-solving approach",
      ],
      price: "₹2,999",
      period: "30-day course",
      status: "Launching Soon",
    },
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const selectCourseByGrade = (grade: string) => {
    const mapping: Record<string, "concepts" | "problemsolving" | "homework" | "mentalability"> = {
      "6th": "concepts",
      "7th": "concepts",
      "8th": "homework",
      "9th": "problemsolving",
      "10th": "mentalability",
    };
    return mapping[grade] ?? "concepts";
  };

  const generateCoupon = () => {
    const code = `EDUFI50-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCouponCode(code);
    setShowForm(true);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => setShowFloatingBanners(false), 5000);
    return () => window.clearTimeout(timer);
  }, []);

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
          {showFloatingBanners && (
            <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 md:px-0">
              <div className="rounded-3xl border border-red-600 bg-white/95 px-5 py-4 text-left text-sm text-slate-950 shadow-xl backdrop-blur-lg transition-all duration-500 animate-[float_5s_ease-in-out_infinite]">
                <p className="uppercase tracking-[0.28em] text-red-600 font-semibold">New Launch</p>
                <p className="mt-2 font-bold text-lg">Maths Summer Mental Ability</p>
                <p className="mt-1 text-xs text-slate-600">30 min daily • 1 worksheet daily</p>
              </div>

              <div className="rounded-3xl border border-red-600 bg-white/95 px-5 py-4 text-left text-sm text-slate-950 shadow-xl backdrop-blur-lg transition-all duration-500 animate-[float_5s_ease-in-out_infinite_0.4s]">
                <p className="uppercase tracking-[0.28em] text-red-600 font-semibold">Boost Speed</p>
                <p className="mt-2 font-bold text-lg">Mental Growth & Quick Maths</p>
                <p className="mt-1 text-xs text-slate-600">Best approach for fast results</p>
              </div>

              <div className="rounded-3xl border border-red-600 bg-white/95 px-5 py-4 text-left text-sm text-slate-950 shadow-xl backdrop-blur-lg transition-all duration-500 animate-[float_5s_ease-in-out_infinite_0.8s]">
                <p className="uppercase tracking-[0.28em] text-red-600 font-semibold">Limited Time</p>
                <p className="mt-2 font-bold text-lg">Master Math in 30 Days</p>
                <p className="mt-1 text-xs text-slate-600">Launching soon for grades 6-10</p>
              </div>
            </div>
          )}

          <p className="mb-6 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white">
            Edufi Classes Hisar
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

      {/* COURSES SELECTION SECTION */}
      <section className="bg-red-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
              Explore Courses
            </p>
            <h2 className="text-4xl font-bold mt-3 text-slate-950">
              Select your preferred learning path
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Choose the course that best fits your learning style and goals.
            </p>
          </div>

          <div className="rounded-[2rem] border border-red-100 bg-white p-8 shadow-[0_24px_80px_rgba(251,146,60,0.12)]">
            <label className="block mb-6">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold mb-3">
                Select a Course
              </p>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value as "concepts" | "problemsolving" | "homework" | "mentalability")}
                className="w-full appearance-none rounded-xl border-2 border-red-200 bg-white px-4 py-3 text-lg font-semibold text-slate-950 transition-all duration-300 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 cursor-pointer"
              >
                <option value="concepts">Concepts + Classwork (Maths Mastery)</option>
                <option value="problemsolving">Problem Solving (Reasoning Edge)</option>
                <option value="homework">Homework & Revision (Foundation Support)</option>
                <option value="mentalability">Maths Summer Mental Ability (Summer Intensive)</option>
              </select>
            </label>

            <div className="rounded-[1.75rem] border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-8 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 px-4 py-2 text-sm font-semibold">
                    {courses[selectedCourse].tag}
                  </span>
                  {courses[selectedCourse].status && (
                    <span className="inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-700 px-4 py-2 text-sm font-semibold">
                      {courses[selectedCourse].status}
                    </span>
                  )}
                </div>
                <p className="text-3xl font-bold text-red-700">{courses[selectedCourse].price}</p>
              </div>

              <h3 className="text-3xl font-bold text-slate-950 mb-2">
                {courses[selectedCourse].title}
              </h3>
              <p className="text-slate-500 mb-2">{courses[selectedCourse].period}</p>

              <p className="mt-4 text-slate-700 mb-6 text-lg">
                {courses[selectedCourse].description}
              </p>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold mb-4">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {courses[selectedCourse].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-sm">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="w-full rounded-xl bg-red-700 px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:bg-red-800 shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
              >
                Enroll in {courses[selectedCourse].title}
              </button>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-red-100 bg-red-100/80 p-8 shadow-[0_24px_80px_rgba(251,146,60,0.18)]">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-700 font-semibold">
                All Plans
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

      {/* CLASSWISE COURSES */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">
              Classwise Course Plans
            </p>
            <h2 className="text-4xl font-bold mt-3 text-slate-950">
              Maths classes for grades 6 to 10
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Grade-specific course pathways designed for stronger fundamentals and faster progress.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {['6th', '7th', '8th', '9th', '10th'].map((grade) => {
              const matchedCourse = selectCourseByGrade(grade);
              const isSelected = selectedCourse === matchedCourse;
              return (
                <div
                  key={grade}
                  className={`rounded-[2rem] p-6 text-center transition-all duration-300 ${isSelected ? 'border-2 border-red-700 bg-white shadow-[0_25px_90px_rgba(220,38,38,0.25)] scale-[1.01]' : 'border border-red-100 bg-red-50 shadow-[0_20px_60px_rgba(251,146,60,0.12)]'}`}
                >
                  <p className={`text-sm uppercase tracking-[0.24em] font-semibold ${isSelected ? 'text-red-800' : 'text-red-700'}`}>
                    Grade {grade}
                  </p>
                  <p className="mt-4 text-2xl font-bold text-slate-950">
                    Focused Maths
                  </p>
                  <p className="mt-3 text-slate-600 text-sm">
                    Class-specific lessons, daily practice, and exam-style questions.
                  </p>
                  <ul className="mt-6 space-y-3 text-slate-600 text-left text-sm">
                    <li>• Chapter-wise concept clarity</li>
                    <li>• Practice worksheet every day</li>
                    <li>• Speed and accuracy training</li>
                  </ul>
                  <button
                    onClick={() => {
                      setSelectedCourse(matchedCourse);
                      setShowForm(true);
                    }}
                    className="mt-6 rounded-2xl bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                  >
                    Enroll Grade {grade}
                  </button>
                </div>
              );
            })}
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