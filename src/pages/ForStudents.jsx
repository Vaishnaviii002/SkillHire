import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  // read logged-in user info from localStorage (set by signup/login)
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileCompletion: 60,
    skillsCount: 0,
    applications: 0,
    assessments: 0,
  });

  // app state persisted in localStorage
  const [portfolioItems, setPortfolioItems] = useState([]); // {id, name, type, dataUrl}
  const [skills, setSkills] = useState([]); // array of skill keys
  const [applications, setApplications] = useState([]); // array of application objects

  // UI state
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const [toast, setToast] = useState(null);

  const fileInputRef = useRef(null);

  // predefined job data — keep as-is or replace with real data later
  const jobs = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "Innovate Solutions",
      location: "Remote / New York",
      date: "2025-11-10",
      tags: ["React", "TypeScript", "UI/UX Design"],
      match: 83,
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Global Fintech",
      location: "San Francisco, CA",
      date: "2025-11-12",
      tags: ["Python (Pandas)", "SQL", "Statistical Analysis"],
      match: 87,
    },
    {
      id: 3,
      title: "Cloud Infrastructure Specialist",
      company: "TechCorp Solutions",
      location: "Seattle, WA",
      date: "2025-11-14",
      tags: ["AWS", "Terraform", "Linux"],
      match: 82,
    },
  ];

  // skill list (10 skills)
  const skillList = [
    "JavaScript",
    "React",
    "TypeScript",
    "Python",
    "SQL",
    "AWS",
    "Docker",
    "Linux",
    "Data Structures",
    "UI/UX",
  ];

  // Read persistent data on mount
  useEffect(() => {
    const isAuth = !!localStorage.getItem("auth");
    if (!isAuth) {
      navigate("/login", { replace: true });
      return;
    }

    const name = localStorage.getItem("name") || "";
    const email = localStorage.getItem("email") || "";
    const storedPortfolio = JSON.parse(localStorage.getItem("skillhire_portfolio") || "[]");
    const storedSkills = JSON.parse(localStorage.getItem("skillhire_skills") || "[]");
    const storedApplications = JSON.parse(localStorage.getItem("skillhire_applications") || "[]");
    const storedAssessments = parseInt(localStorage.getItem("skillhire_assessments") || "0", 10);

    setPortfolioItems(storedPortfolio);
    setSkills(storedSkills);
    setApplications(storedApplications);

    setUser((prev) => ({
      ...prev,
      name: name || prev.name,
      email: email || prev.email,
      skillsCount: storedSkills.length,
      applications: storedApplications.length,
      assessments: storedAssessments,
    }));
  }, [navigate]);

  // simple toast helper
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    // keep user data like portfolio/skills if you want — currently we persist them
    navigate("/login", { replace: true });
  };

  const displayName = user.name || (user.email ? user.email.split("@")[0] : "Student");

  // Portfolio: open file picker
  const handleAddPortfolioClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  // handle file selected
  const handleFileSelected = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      const newItem = {
        id: Date.now(),
        name: file.name,
        type: file.type,
        dataUrl,
      };
      const updated = [newItem, ...portfolioItems];
      setPortfolioItems(updated);
      localStorage.setItem("skillhire_portfolio", JSON.stringify(updated));
      setToast("Portfolio uploaded");
    };
    // read as data URL so we can preview simple files
    reader.readAsDataURL(file);

    // reset input so same file can be uploaded again if needed
    e.target.value = "";
  };

  // open portfolio modal
  const handleOpenPortfolio = () => {
    setShowPortfolioModal(true);
  };

  // remove portfolio item
  const handleRemovePortfolio = (id) => {
    const updated = portfolioItems.filter((p) => p.id !== id);
    setPortfolioItems(updated);
    localStorage.setItem("skillhire_portfolio", JSON.stringify(updated));
    setToast("Removed portfolio item");
  };

  // Skills modal handlers
  const openSkills = () => setShowSkillsModal(true);
  const closeSkills = () => setShowSkillsModal(false);

  const toggleSkill = (skillKey) => {
    let updated;
    if (skills.includes(skillKey)) {
      updated = skills.filter((s) => s !== skillKey);
    } else {
      updated = [...skills, skillKey];
    }
    setSkills(updated);
    localStorage.setItem("skillhire_skills", JSON.stringify(updated));
    setUser((prev) => ({ ...prev, skillsCount: updated.length }));
  };

  // Assessments navigation
  const handleTakeAssessment = () => {
    // navigate to assessment page (assumes route exists)
    navigate("/assessment");
  };

  // Profile navigation
  const handleOpenProfile = () => {
    navigate("/profile");
  };

  // Apply for a job
  const handleApplyForJob = (job) => {
    // create application record
    const app = {
      id: Date.now(),
      jobId: job.id,
      title: job.title,
      company: job.company,
      appliedAt: new Date().toISOString(),
    };
    const updated = [app, ...applications];
    setApplications(updated);
    localStorage.setItem("skillhire_applications", JSON.stringify(updated));
    setUser((prev) => ({ ...prev, applications: updated.length }));
    setToast("Applied for job");
  };

  // Open My Applications modal
  const openApplications = () => setShowApplicationsModal(true);

  return (
    <div className="min-h-screen bg-teal-100 text-slate-800">
      {/* hidden file input for portfolio */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelected}
        className="hidden"
        accept="image/*,application/pdf,video/*"
      />

      {/* Toast */}
      {toast && (
        <div className="fixed right-6 top-6 bg-slate-900 text-white px-4 py-2 rounded shadow z-50">
          {toast}
        </div>
      )}

      <div className=" bg-teal-50 mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-2 border-r pr-4 sticky top-6 h-fit">
          <div className="text-teal-700 font-bold text-xl mb-6">SkillHire</div>

          <nav className="text-sm space-y-2">
            <div className="py-2 px-3 rounded-md bg-white font-medium">Dashboard</div>
            <div
              onClick={() => navigate("/jobs")}
              className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer"
            >
              Browse Jobs
            </div>
            <div
              onClick={openApplications}
              className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer flex items-center justify-between"
            >
              <span>My Applications</span>
              <span className="ml-2 text-xs bg-blue-50 px-2 rounded-full">{user.applications}</span>
            </div>

            <div className="py-2 px-3 rounded-md bg-white font-medium">Profile</div>
            <div
              onClick={handleOpenProfile}
              className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer"
            >
              My Profile
            </div>
            <div
              onClick={openSkills}
              className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer"
            >
              Skills <span className="ml-2 text-xs bg-blue-50 px-2 rounded-full">{user.skillsCount}</span>
            </div>
            <div
              onClick={handleOpenPortfolio}
              className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer"
            >
              Portfolio
            </div>
            <div
              onClick={() => navigate("/assessments")}
              className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer"
            >
              Assessments
            </div>

            <div className="py-2 px-3 rounded-md bg-white font-medium">Resources</div>
            <div className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer">How it Works</div>
            <div className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer">Help Center</div>
            <div className="py-2 px-3 rounded-md hover:bg-slate-50 cursor-pointer">Settings</div>

            <div className="mt-8 text-xs text-slate-500">© SkillHire</div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-span-7">
          <header className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {displayName}!</h1>
              <p className="text-sm text-slate-500">
                Here's your personalized job dashboard. Keep building your profile to get better matches.
              </p>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <div className="text-sm text-slate-600 mr-2">{user.email}</div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          </header>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="text-xs text-slate-400">Profile Completion</div>
              <div className="mt-2 font-bold text-lg">{user.profileCompletion}%</div>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <div className="text-xs text-slate-400">Skills Added</div>
              <div className="mt-2 font-bold text-lg">{user.skillsCount}</div>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <div className="text-xs text-slate-400">Applications</div>
              <div className="mt-2 font-bold text-lg">{user.applications}</div>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <div className="text-xs text-slate-400">Assessments</div>
              <div className="mt-2 font-bold text-lg">{user.assessments}</div>
            </div>
          </div>

          {/* Job List */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-4 mb-4">
              <button className="text-sm font-semibold border-b-2 border-teal-400 pb-2">
                Recommended Jobs
              </button>
              <button
                onClick={openApplications}
                className="text-sm font-semibold border-b-2 border-teal-400 pb-2"
              >
                My Applications
              </button>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 border rounded-lg flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium">{job.title}</div>
                    <div className="text-xs text-slate-500">
                      {job.company} • <span className="text-slate-600">{job.location}</span>
                    </div>

                    <div className="mt-2 flex gap-2 flex-wrap">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border py-1 px-2 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-slate-400">Posted {job.date}</div>
                    <div className="mt-2 font-semibold text-teal-600">
                      Match Score {job.match}%
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-2">
                      <button
                        onClick={() => {
                          // show job details in a simple way (alert for now)
                          alert(`${job.title}\n${job.company}\n${job.location}`);
                        }}
                        className="px-3 py-1 border rounded-full text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleApplyForJob(job)}
                        className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm"
                      >
                        View & Apply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="col-span-3 space-y-4">
          {/* Profile Completion Card */}
          <div className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Profile Completion</div>
              <div className="text-sm text-slate-500">{user.profileCompletion}%</div>
            </div>

            <div className="mt-3 bg-slate-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${user.profileCompletion}%`,
                  background: "linear-gradient(90deg,#38bdf8,#06b6d4)",
                }}
              />
            </div>

            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li>• Add skills ({user.skillsCount}/10)</li>
              <li>• Upload portfolio</li>
              <li>• Take assessments ({user.assessments})</li>
            </ul>

            <button
              onClick={() => navigate("/profile")}
              className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-sky-400 to-teal-400 text-white font-medium"
            >
              Complete Profile
            </button>
          </div>

          {/* Skill Assessment Card */}
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-semibold mb-2">Skill Assessments</div>
            <p className="text-sm text-slate-500">
              Verify your skills and boost your profile. You've completed {user.assessments} assessments.
            </p>
            <button onClick={handleTakeAssessment} className="mt-3 w-full py-2 rounded-lg border">
              Take Assessment
            </button>
          </div>

          {/* Portfolio Card */}
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-semibold mb-2">Portfolio</div>
            <p className="text-sm text-slate-500">
              Showcase your best work — add projects, links, or documents.
            </p>
            <div className="mt-3 flex gap-2">
              <button onClick={handleAddPortfolioClick} className="flex-1 py-2 rounded-lg border">
                Add Portfolio
              </button>
              <button onClick={handleOpenPortfolio} className="py-2 px-4 rounded-lg border">
                View
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Portfolio Modal */}
      {showPortfolioModal && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-start justify-center p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Portfolio</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddPortfolioClick}
                  className="px-3 py-1 border rounded"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowPortfolioModal(false)}
                  className="px-3 py-1 rounded bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>

            {portfolioItems.length === 0 ? (
              <div className="text-sm text-slate-500">No portfolio items yet.</div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {portfolioItems.map((p) => (
                  <div key={p.id} className="border rounded p-3">
                    <div className="flex justify-between items-start">
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-slate-500">{p.type || "file"}</div>
                    </div>

                    <div className="mt-3">
                      {/* for images show image, for pdf show link */}
                      {p.type?.startsWith("image/") ? (
                        <img src={p.dataUrl} alt={p.name} className="max-h-40 object-contain" />
                      ) : p.type === "application/pdf" ? (
                        <a
                          href={p.dataUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-sky-600 underline"
                        >
                          Open PDF
                        </a>
                      ) : (
                        <a
                          href={p.dataUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-sky-600 underline"
                        >
                          Open File
                        </a>
                      )}
                    </div>

                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-xs text-slate-500">
                        Uploaded {new Date(p.id).toLocaleString()}
                      </div>
                      <button
                        onClick={() => handleRemovePortfolio(p.id)}
                        className="px-2 py-1 text-sm border rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Skills Modal */}
      {showSkillsModal && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Skills</h3>
              <button onClick={closeSkills} className="px-3 py-1 rounded bg-slate-100">
                Close
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {skillList.map((s) => (
                <label key={s} className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={skills.includes(s)}
                    onChange={() => toggleSkill(s)}
                  />
                  <span className="text-sm">{s}</span>
                </label>
              ))}
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-slate-500">{skills.length} / {skillList.length} selected</div>
              <button
                onClick={() => { setShowSkillsModal(false); setToast("Skills updated"); }}
                className="px-4 py-2 bg-sky-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Applications Modal */}
      {showApplicationsModal && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-start justify-center p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">My Applications</h3>
              <div>
                <button onClick={() => setShowApplicationsModal(false)} className="px-3 py-1 rounded bg-slate-100">
                  Close
                </button>
              </div>
            </div>

            {applications.length === 0 ? (
              <div className="text-sm text-slate-500">You haven't applied to any jobs yet.</div>
            ) : (
              <div className="space-y-3">
                {applications.map((a) => (
                  <div key={a.id} className="p-3 border rounded flex justify-between items-center">
                    <div>
                      <div className="font-medium">{a.title}</div>
                      <div className="text-xs text-slate-500">{a.company}</div>
                      <div className="text-xs text-slate-400 mt-1">Applied: {new Date(a.appliedAt).toLocaleString()}</div>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          // simple view; expand as needed
                          alert(`Application\n\n${a.title}\n${a.company}\nApplied: ${new Date(a.appliedAt).toLocaleString()}`);
                        }}
                        className="px-3 py-1 border rounded"
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}