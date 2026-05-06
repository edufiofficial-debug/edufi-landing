"use client";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    phone: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const message = `New Enquiry:%0AName: ${formData.name}%0AClass: ${formData.studentClass}%0APhone: ${formData.phone}`;
    
    window.open(`https://wa.me/919501941186?text=${message}`, "_blank");
  };

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="text-center py-20 bg-yellow-100">
        <h1 className="text-4xl font-bold">
          Crack SSC CGL Maths & Reasoning 🚀
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Enroll Now
        </button>
      </section>

      {/* FORM POPUP */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl w-80">

            <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 mb-3"
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <input
              type="text"
              placeholder="Class / Exam"
              className="w-full border p-2 mb-3"
              onChange={(e) => handleChange("studentClass", e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 mb-3"
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-2 rounded-xl"
            >
              Submit
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="mt-3 text-red-500 text-sm"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </main>
  );
}