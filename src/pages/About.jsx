import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold">About SkillHire</h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            We help companies find verified, job-ready students and help students
            showcase their real skills. Fast. Fair. Measurable.
          </p>
        </header>

        {/* Mission + Values */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold">Our mission</h2>
            <p className="mt-3 text-slate-600">
              To revolutionize early-career hiring by validating real skill — not just resumes.
              We give hiring teams data-backed shortlists and students a fair chance to prove ability.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ValueItem title="Skills-first hiring" desc="We prioritize demonstrated capability over credentials." />
              <ValueItem title="Speed & efficiency" desc="Shortlists delivered in days, not weeks." />
              <ValueItem title="Transparent scoring" desc="Actionable assessment reports for every candidate." />
              <ValueItem title="Ethical & inclusive" desc="Bias-aware assessments and fair opportunity for all." />
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold mb-3">Quick facts</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• 2,400+ verified students</li>
              <li>• 350+ partner companies</li>
              <li>• Avg. shortlist delivery: 48 hours</li>
              <li>• 85% interview-to-hire match improvement (partner metric)</li>
            </ul>
            <div className="mt-6">
              <Link to="/companies" className="inline-block px-4 py-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white rounded">
                How we help companies
              </Link>
            </div>
          </div>
        </section>

        {/* Timeline / How we started */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our story</h2>
          <ol className="border-l border-slate-200 pl-6 space-y-6">
            <TimelineItem year="2022" title="Idea & prototype" desc="We started with a simple idea: students should be hired for what they can do, not just what their CV says." />
            <TimelineItem year="2023" title="Pilot with colleges" desc="Built assessments and ran pilot tests with students across 5 colleges." />
            <TimelineItem year="2024" title="First partners" desc="Onboarded early company partners and delivered our first shortlists." />
            <TimelineItem year="2025" title="Scale" desc="We focused on automations, ranking, and improving assessment quality." />
          </ol>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet the team</h2>
          <p className="text-slate-600 mb-6">Small, focused team — engineers, assessment designers, and hiring experts.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamCard
              name="Aarav Patel"
              role="Co-founder & CEO"
              bio="Product-led founder building hiring experiences."
              imgAlt="Aarav Patel"
            />
            <TeamCard
              name="Nisha Verma"
              role="Head of Assessments"
              bio="Designs fair, practical tests that reflect real work."
              imgAlt="Nisha Verma"
            />
            <TeamCard
              name="Rohan Gupta"
              role="Engineering Lead"
              bio="Backend & infra — reliability and scale."
              imgAlt="Rohan Gupta"
            />
            <TeamCard
              name="Priya Sharma"
              role="Partnerships"
              bio="Works with companies to map hiring needs to tests."
              imgAlt="Priya Sharma"
            />
          </div>
        </section>

        {/* Metrics / Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Impact so far</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <StatCard label="Verified students" value="+2,400" />
            <StatCard label="Partner companies" value="+350" />
            <StatCard label="Avg. shortlist time" value="48 hours" />
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="mb-12 bg-gradient-to-r from-sky-500 to-teal-400 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Want to partner or try a demo?</h3>
            <p className="mt-1 text-sm opacity-95">Invite your hiring team to see pre-screened candidates in action.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/companies" className="px-4 py-2 bg-white text-sky-600 rounded">For companies</Link>
            <Link to="/signup" className="px-4 py-2 border border-white/40 rounded">Sign up</Link>
          </div>
        </section>

        {/* Footer small */}
        <footer className="text-sm text-slate-500 mt-6">
          <div className="max-w-2xl mx-auto text-center">
            © {new Date().getFullYear()} SkillHire — Built for fair, skills-first hiring.
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ---------------- small presentational components ---------------- */

function ValueItem({ title, desc }) {
  return (
    <li className="bg-white border rounded p-3 shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </li>
  );
}

function TimelineItem({ year, title, desc }) {
  return (
    <li className="relative">
      <div className="absolute -left-6 top-0 w-3 text-center">
        <div className="w-3 h-3 bg-teal-600 rounded-full mt-1" />
        <div className="w-px h-full bg-slate-200 mx-auto" />
      </div>
      <div className="pl-4">
        <div className="text-sm font-medium">{year} · {title}</div>
        <div className="text-sm text-slate-600 mt-1">{desc}</div>
      </div>
    </li>
  );
}

function TeamCard({ name, role, bio, imgAlt }) {
  // placeholder avatar (replace with real images stored in /public/team/*)
  const initials = name.split(" ").map(n => n[0]).slice(0,2).join("");

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm text-center">
      <div className="mx-auto w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-xl font-semibold text-slate-700">
        {initials}
      </div>
      <div className="mt-3 font-semibold">{name}</div>
      <div className="text-sm text-slate-500">{role}</div>
      <p className="text-sm text-slate-600 mt-2">{bio}</p>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}
