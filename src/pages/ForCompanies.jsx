import React, { useState } from "react";
import { Link } from "react-router-dom";


const PREFER_LOCAL = false; // set true if you put logos in public/logos/

export default function ForCompanies() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const logos = [
    { name: "Zomato", srcRemote: "https://upload.wikimedia.org/wikipedia/commons/7/73/Zomato_logo.png", srcLocal: "/logos/zomato.png" },
    { name: "ITC", srcRemote: "https://upload.wikimedia.org/wikipedia/commons/0/0b/ITC_logo.svg", srcLocal: "/logos/itc.svg" },
    { name: "Flipkart", srcRemote: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flipkart_logo.png", srcLocal: "/logos/flipkart.png" },
    { name: "Ola", srcRemote: "https://upload.wikimedia.org/wikipedia/commons/5/59/Ola_logo.svg", srcLocal: "/logos/ola.svg" },
    { name: "Swiggy", srcRemote: "https://upload.wikimedia.org/wikipedia/commons/8/85/Swiggy_logo.svg", srcLocal: "/logos/swiggy.svg" },
  ];

  const getSrc = (logo) => (PREFER_LOCAL ? logo.srcLocal : logo.srcRemote || logo.srcLocal);

  function handleImgError(e, logo) {
    // prevent infinite loop if fallback also fails
    e.currentTarget.onerror = null;
    console.warn(`Logo failed to load: ${logo.name} -> ${e.currentTarget.src}`);
    // try local if remote failed and a local exists
    if (!PREFER_LOCAL && logo.srcLocal) {
      e.currentTarget.src = logo.srcLocal;
      return;
    }
    // final fallback: hide image so initials show
    e.currentTarget.style.display = "none";
    const placeholder = e.currentTarget.nextSibling;
    if (placeholder) placeholder.style.display = "flex";
  }

  function openModal() { setModalOpen(true); }
  function closeModal() { setModalOpen(false); }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(s => ({ ...s, [name]: value }));
  }

  function saveDemoRequest(payload) {
    try {
      const arr = JSON.parse(localStorage.getItem("demoRequests") || "[]");
      arr.push(payload);
      localStorage.setItem("demoRequests", JSON.stringify(arr));
      return true;
    } catch (err) {
      console.error("Saving demo request failed", err);
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.company || !form.email) return alert("Please fill required fields.");
    const ok = saveDemoRequest({ ...form, createdAt: new Date().toISOString() });
    if (ok) {
      alert("Demo request saved. We'll contact you soon.");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      closeModal();
    } else {
      alert("Failed to save request. Check console.");
    }
  }

  return (
    <div className="min-h-screen bg-teal-50 text-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              Revolutionizing hiring — <span className="text-teal-600">pre-screened</span> talent
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              SkillHire delivers hand-picked, assessment-verified students so your hiring team spends time only on top matches.
            </p>

            <div className="mt-6 flex gap-3">
              <button onClick={openModal} className="px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold shadow">Request a demo</button>
              <Link to="/signup" className="px-5 py-3 bg-white rounded-lg border">Partner with SkillHire</Link>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 shadow">
            <h4 className="font-semibold mb-3">Why choose SkillHire</h4>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Shortlisted, assessment-backed candidates</li>
              <li>• Reduced screening cost (save recruiter hours)</li>
              <li>• Fast turnaround — see top matches within 48 hours</li>
              <li>• Data-driven match scores for decision confidence</li>
            </ul>
          </div>
        </header>

        {/* trusted logos */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Trusted by leading companies</h3>
          <div className="flex flex-wrap items-center gap-6 bg-slate-50 p-6 rounded-lg">
            {logos.map((l) => (
              <div key={l.name} className="flex items-center gap-3 px-4 py-2 bg-white rounded shadow-sm">
                <div style={{ width: 120, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={getSrc(l)}
                    alt={l.name}
                    className="max-h-8 object-contain"
                    onError={(e) => handleImgError(e, l)}
                    style={{ display: "block" }}
                  />
                  {/* initials fallback (hidden by default) */}
                  <div style={{ display: "none", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} aria-hidden>
                    <span className="text-sm font-semibold text-slate-600">{l.name.split(" ").map(s=>s[0]).slice(0,2).join("")}</span>
                  </div>
                </div>
                <div className="text-sm text-slate-600">{l.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* rest of page (CTA + modal) */}
        <section className="mb-12 bg-gradient-to-r from-sky-500 to-teal-400 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">See pre-screened candidates in action</h4>
            <p className="mt-1 text-sm opacity-95">Request a demo and we'll show a curated shortlist within 48 hours.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={openModal} className="px-4 py-2 bg-white text-sky-600 rounded">Request demo</button>
            <a href="mailto:sales@skillhire.local" className="px-4 py-2 border border-white/60 rounded">Contact Sales</a>
          </div>
        </section>

        {/* marquee */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Companies we work with</h3>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...logos, ...logos].map((l, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white rounded shadow-sm">
                  <img src={getSrc(l)} alt={l.name} className="h-8 object-contain" onError={(e)=>handleImgError(e,l)} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl shadow-xl p-6 relative">
            <button onClick={closeModal} className="absolute right-3 top-3 text-slate-500 hover:text-slate-700">✕</button>
            <h3 className="text-xl font-semibold mb-2">Request a demo</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <label>
                  <div className="text-sm font-medium">Full name</div>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded" required />
                </label>
                <label>
                  <div className="text-sm font-medium">Company</div>
                  <input name="company" value={form.company} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded" required />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <label>
                  <div className="text-sm font-medium">Work email</div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded" required />
                </label>
                <label>
                  <div className="text-sm font-medium">Phone (optional)</div>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded" />
                </label>
              </div>
              <label>
                <div className="text-sm font-medium">Brief message</div>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded" rows={3} />
              </label>
              <div className="flex items-center gap-3 mt-2">
                <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">Request demo</button>
                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-flex; gap: 2rem; animation: marquee 18s linear infinite; align-items: center; }
      `}</style>
    </div>
  );
}