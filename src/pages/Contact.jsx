import React, { useState } from "react";
import { Link } from "react-router-dom";
// ContactUs page (pure JSX, TailwindCSS required)
// Matches layout in your screenshots: hero 'Get in Touch', contact form, contact cards, business hours, social icons, FAQ CTA and footer.

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: replace with real API call
    console.log("contact form submitted", form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-screen bg-teal-50 text-slate-800">
      
      {/* <header className="border-b bg-teal-50"> 
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-teal-600 font-bold text-xl">SkillHire</div> 
          <nav className="space-x-6 text-sm text-slate-600 hidden md:flex">
            <a href="#" className="hover:text-slate-900">Home</a>
            <a href="#" className="hover:text-slate-900">For Students</a>
            <a href="#" className="hover:text-slate-900">For Companies</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav> 
          <div className="space-x-3">
            <button className="text-sm">Login</button>
            <button className="text-sm bg-sky-500 text-white px-3 py-1 rounded-full">Sign Up</button>
          </div>
        </div>
      </header> */}
    
      {/* Hero */}
      <section className="py-12 bg-gradient-to-r from-slate-50 to-teal-50">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow mb-4">
            {/* chat icon placeholder */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#0ea5a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="text-4xl bg-teal-50 font-extrabold">Get in Touch</h1>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">Have questions about SkillHire? We'd love to hear from you. Our support team is here to help and will get back to you as soon as possible.</p>
        </div>
      </section>

      {/* Contact form + Cards */}
      <section id="contact" className="py-10">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-12 gap-6">
          {/* Form */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Send us a Message</h3>
              <p className="text-sm text-slate-500 mb-4">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2 text-sm" placeholder="John Doe" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2 text-sm" placeholder="john@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} className="w-full border rounded px-3 py-2 text-sm" placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="w-full border rounded px-3 py-2 text-sm" placeholder="Tell us more about your inquiry..."></textarea>
                </div>

                <div>
                  <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold">
                    {sent ? "Message Sent" : "Send Message"}
                  </button>
                </div>

                <div className="text-center text-xs text-slate-400">We respect your privacy. Your information will only be used to respond to your inquiry.</div>
              </form>
            </div>

            {/* FAQ CTA */}
            <div className="mt-8 p-6 border rounded-lg bg-slate-50 text-center">
              <h4 className="font-semibold text-lg">Frequently Asked Questions</h4>
              <p className="text-sm text-slate-500 mt-2">Check our FAQ section for quick answers to common questions.</p>
              <a href="#" className="mt-4 inline-block px-4 py-2 border rounded-full text-sm">View FAQ</a>
            </div>
          </div>

          {/* Right column with contact cards */}
          <aside className="col-span-12 lg:col-span-4 space-y-4">
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">📧</div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-slate-500">Send us an email</div>
                  <a href="mailto:hello@skillhire.com" className="text-sm text-sky-600 mt-2 inline-block">hello@skillhire.com</a>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">📞</div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-slate-500">Call us directly</div>
                  <a href="tel:+15551234567" className="text-sm text-sky-600 mt-2 inline-block">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">📍</div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-slate-500">Visit our office</div>
                  <a href="#" className="text-sm text-sky-600 mt-2 inline-block">123 Tech Street, San Francisco, CA 94105</a>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <div className="font-semibold">Business Hours</div>
              <div className="mt-3 text-sm text-slate-500 grid grid-cols-2">
                <div>Monday - Friday</div>
                <div className="text-right">9:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div className="text-right">10:00 AM - 4:00 PM</div>
                <div>Sunday</div>
                <div className="text-right">Closed</div>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white text-center">
              <div className="font-semibold mb-2">Follow Us</div>
              <div className="flex justify-center gap-4 text-slate-500">
                <button className="p-3 rounded-lg border">Twitter</button>
                <button className="p-3 rounded-lg border">LinkedIn</button>
                <button className="p-3 rounded-lg border">Facebook</button>
                <button className="p-3 rounded-lg border">Instagram</button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-8 text-center text-sm text-slate-500">
          <div>© {new Date().getFullYear()} SkillHire — All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}