import React from "react";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (

    
    <div className="min-h-screen bg-teal-100 text-slate-800 antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Logo />
              
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-slate-900">Home</a>
              <Link to="/students" className="text-sm hover:text-slate-900">For Students</Link>
              <Link to="/companies" className="text-sm hover:text-slate-900">For Companies</Link>
              <Link to="/about" className="text-sm hover:text-slate-900">About</Link>
              <Link to="/contact" className="text-sm hover:text-slate-900">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/login" className="hidden md:inline text-sm px-4 py-2 rounded-md bg-gradient-to-r from-sky-500 to-teal-400 text-white">Login</Link>
              <Link to="/signup" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white px-4 py-2 rounded-lg text-sm shadow-md">Sign Up</Link>

              <details className="md:hidden">
                <summary className="p-2 rounded-md hover:bg-slate-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>

                <div className="mt-2 bg-white p-3 rounded-md shadow-lg">
                  <a className="block py-1" href="#home">Home</a>
                  <a className="block py-1" href="#students">Student DashBoard</a>
                  <a className="block py-1" href="#companies">Companies DashBoard</a>
                  <a className="block py-1" href="#about">About</a>
                  <a className="block py-1" href="#contact">Contact</a>
                  <div className="mt-2 flex gap-2">
                    <button className="flex-1 py-2 rounded-md">Login</button>
                    <a className="flex-1 text-center py-2 rounded-md bg-sky-500 text-white">Sign Up</a>
                  </div>
                </div>
              </details>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Connecting Skilled Students to Top Companies
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                  We assess student skills and match them with the right employers effortlessly.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#students" className="px-6 py-3 rounded-xl text-white  bg-gradient-to-r from-sky-500 to-teal-400 shadow-lg hover:shadow-xl transition-all">
                    Get Started as a Student
                  </a>
                  <a href="#companies" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow-lg">
                    Hire Talent
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <StatCard label="Verified Students" value="+2,400" />
                  <StatCard label="Companies" value="+350" />
                  <StatCard label="Avg. Hire Time" value="7 days" />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 p-6 shadow-2xl">
                  <DashboardMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="mt-2 text-slate-600">
              A simple 3-step flow that gets students interview-ready and in front of hiring teams quickly.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard
                number={1}
                title="Skill Assessment"
                desc="Objective tests + real tasks to validate student skill levels."
                icon={<IconCheck />}
              />
              <StepCard
                number={2}
                title="Smart Profile Creation"
                desc="Automatically generated profiles highlighting verified skills."
                icon={<IconProfile />}
              />
              <StepCard
                number={3}
                title="Automatic Job Matching"
                desc="Matchmaking using skills and employer preferences."
                icon={<IconMatch />}
              />
            </div>
          </div>
        </section>

        {/* STUDENT FEATURES */}
        <section id="students" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <h3 className="text-2xl font-semibold">Built for Students</h3>
            <p className="mt-2 text-slate-600">Stand out with verified skills and a strong portfolio.</p>
            


            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard title="Skill Tests" desc="Timed assessments evaluating real-world ability." icon={<IconTest />} />
              <FeatureCard title="Portfolio Upload" desc="Showcase your projects and GitHub." icon={<IconFolder />} />
              <FeatureCard title="Job Recommendations" desc="Personalized roles that fit your profile." icon={<IconRecommend />} />
              <FeatureCard title="Progress Tracking" desc="Track growth with analytics and milestones." icon={<IconAnalytics />} />
            </div>
          </div>
        </section>

        {/* COMPANY FEATURES */}
        <section id="companies" className="bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <h3 className="text-2xl font-semibold">Designed for Hiring Teams</h3>
            <p className="mt-2 text-slate-600">Find job-ready, skilled talent with verified assessments.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <CompanyCard title="Filter by Skills" desc="Search & shortlist students based on verified skills." icon={<IconFilter />} />
              <CompanyCard title="Verified Talent" desc="Profiles backed by real assessment results." icon={<IconShield />} />
              <CompanyCard title="Easy Shortlisting" desc="Dashboard for messaging & interviews." icon={<IconDashboard />} />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <h3 className="text-2xl font-semibold">What people say</h3>
            <p className="mt-2 text-slate-600">Students and companies love the experience.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard name="Priya Sharma" role="Frontend Student" quote="Got hired within 10 days!" />
              <TestimonialCard name="Rohan Mehta" role="Data Analyst Student" quote="Progress tracker helped me improve fast." />
              <TestimonialCard name="Asha Recruitment" role="Fintech Hiring Lead" quote="Saved hours in shortlisting candidates." />
              <TestimonialCard name="ByteWorks" role="Hiring Manager" quote="Super smooth hiring experience." />
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="bg-gradient-to-r from-sky-500 to-teal-400 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Start your journey today</h4>
              <p className="mt-1 text-sm opacity-90">Join as a student or post your first job.</p>
            </div>
            <div className="flex gap-3">
              <a className="px-4 py-2 rounded-md bg-white text-sky-600 font-medium" href="#students">
                Join as Student
              </a>
              <a className="px-4 py-2 rounded-md border border-white/40" href="#companies">
                Post Job as Company
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Logo compact />
                <p className="mt-3 text-sm text-slate-600">
                  Connecting students and companies through verified skills.
                </p>
              </div>

              <div>
                <h6 className="font-semibold">Product</h6>
                <ul className="mt-3 text-sm space-y-2 text-slate-600">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Integrations</li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold">Company</h6>
                <ul className="mt-3 text-sm space-y-2 text-slate-600">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Blog</li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold">Support</h6>
                <ul className="mt-3 text-sm space-y-2 text-slate-600">
                  <li>Help Center</li>
                  <li>Contact</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">© {new Date().getFullYear()} SkillHire. All rights reserved.</p>
              <div className="flex items-center gap-3">
                <SocialIcon name="twitter" />
                <SocialIcon name="linkedin" />
                <SocialIcon name="instagram" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ------------ Small Components + Icons (NO TypeScript) ------------ */

function Logo({ compact }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-teal-400 flex items-center justify-center text-white font-bold shadow-md">
        SH
      </div>
      {!compact && <div className="text-sm font-semibold">SkillHire</div>}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-lg p-3 bg-white border border-slate-100 shadow-sm">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-xl p-4 bg-white shadow-inner">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">Dashboard</div>
        <div className="text-xs text-slate-500">Overview</div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="col-span-2 sm:col-span-1 bg-slate-50 p-3 rounded-lg">
          <div className="text-xs text-slate-500">Matches</div>
          <div className="text-lg font-semibold">128</div>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg">
          <div className="text-xs text-slate-500">Shortlisted</div>
          <div className="text-lg font-semibold">12</div>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg">
          <div className="text-xs text-slate-500">Avg. Score</div>
          <div className="text-lg font-semibold">87%</div>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-sky-100 to-teal-100 p-3 rounded-lg">
        <div className="text-xs text-slate-500">Recent candidates</div>
        <ul className="mt-2 text-sm space-y-1">
          <li>Priya S. — Frontend — 92%</li>
          <li>Rohan M. — Data — 88%</li>
        </ul>
      </div>
    </div>
  );
}

function StepCard({ number, title, desc, icon }) {
  return (
    <div className="rounded-xl p-6 bg-white shadow-sm border border-slate-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold">
          {number}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <p className="text-sm text-slate-600">{desc}</p>
        </div>
      </div>
      <div className="mt-4">{icon}</div>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="rounded-xl p-5 bg-white shadow-sm border border-slate-100 flex flex-col gap-3">
      <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center">{icon}</div>
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function CompanyCard({ title, desc, icon }) {
  return (
    <div className="rounded-lg p-5 bg-white shadow-sm border border-slate-100 flex gap-4">
      <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center border">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, quote }) {
  return (
    <div className="rounded-xl p-5 bg-white shadow-sm border border-slate-100 flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center font-medium">
        {name[0]}
      </div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-slate-500">{role}</div>
        <p className="mt-2 text-slate-600">“{quote}”</p>
      </div>
    </div>
  );
}

function SocialIcon({ name }) {
  return (
    <a aria-label={name} className="p-2 rounded-md hover:bg-slate-100">
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        {name === "twitter" && (
          <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49..." />
        )}
        {name === "linkedin" && (
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88..." />
        )}
        {name === "instagram" && (
          <path d="M12 2.2c3.2 0 3.584.013 4.85.07 1.17.054..." />
        )}
      </svg>
    </a>
    
  );
}

/* ---------------- Icons ---------------- */

function IconCheck() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M20 6L9 17l-5-5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconProfile() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 12a4 4 0 1 0 0-8..." strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMatch() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M21 10c0 7-9 11-9 11s-9-4-9-11..." strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTest() {
  return <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h18v18H3z" /></svg>;
}

function IconFolder() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M3 7h6l2 2h10v10H3V7z" />
    </svg>
  );
}

function IconRecommend() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 17..." />
    </svg>
  );
}

function IconAnalytics() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M3 3v18h18" />
      <path d="M7 14v4M12 10v8M17 6v12" strokeLinecap="round" />
    </svg>
  );
}

function IconFilter() {
  return <svg width="24" height="24" stroke="currentColor"><path d="M22 6H2l8 8v4l4 2v-6l8-8z" /></svg>;
}

function IconShield() {
  return <svg width="24" height="24" stroke="currentColor"><path d="M12 2l7 4v6c0 5-3.58 9.74-7 10..." /></svg>;
}

function IconDashboard() {
  return <svg width="24" height="24" stroke="currentColor"><path d="M3 13h8V3H3v10z..." /></svg>;
}

