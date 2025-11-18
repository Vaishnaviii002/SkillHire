import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BrowseJobs() {
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);

  // Load applications from localStorage
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("skillhire_applications") || "[]");
    setApplications(storedApps);
  }, []);

  // handle Apply
  const handleApply = (job) => {
    const newApp = {
      id: Date.now(),
      jobId: job.id,
      title: job.title,
      company: job.company,
      appliedAt: new Date().toISOString(),
    };

    const updated = [newApp, ...applications];
    setApplications(updated);
    localStorage.setItem("skillhire_applications", JSON.stringify(updated));

    alert("Applied Successfully!");
  };

  // Sample 10+ jobs list
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Innovate Tech", location: "Remote", tags: ["React", "JavaScript"], salary: "₹8–12 LPA" },
    { id: 2, title: "Backend Engineer", company: "TechCore", location: "Bangalore", tags: ["Node.js", "Express"], salary: "₹10–15 LPA" },
    { id: 3, title: "Data Analyst", company: "DataWave", location: "Noida", tags: ["Python", "SQL"], salary: "₹6–10 LPA" },
    { id: 4, title: "UI/UX Designer", company: "DesignHub", location: "Mumbai", tags: ["Figma", "Wireframing"], salary: "₹5–9 LPA" },
    { id: 5, title: "ML Engineer", company: "AI Labs", location: "Hyderabad", tags: ["Tensorflow", "Python"], salary: "₹12–18 LPA" },
    { id: 6, title: "Full Stack Dev", company: "Cloudify", location: "Remote", tags: ["React", "Node.js"], salary: "₹9–14 LPA" },
    { id: 7, title: "Cloud Engineer", company: "AWS Corp", location: "Pune", tags: ["AWS", "DevOps"], salary: "₹10–16 LPA" },
    { id: 8, title: "Cyber Security Analyst", company: "SecureTech", location: "Delhi", tags: ["Security", "Linux"], salary: "₹7–13 LPA" },
    { id: 9, title: "QA Tester", company: "TestPro", location: "Remote", tags: ["Selenium", "Testing"], salary: "₹5–8 LPA" },
    { id: 10, title: "Product Manager", company: "Prodify", location: "Gurgaon", tags: ["Roadmaps", "Strategy"], salary: "₹15–22 LPA" },
    { id: 11, title: "DevOps Engineer", company: "OpsGen", location: "Chennai", tags: ["Docker", "CI/CD"], salary: "₹10–17 LPA" },
    { id: 12, title: "Software Engineer Intern", company: "NextGen", location: "Delhi", tags: ["Java", "OOP"], salary: "₹20k–30k / month" },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Jobs</h1>

      <button
        className="mb-4 px-4 py-2 bg-slate-200 rounded"
        onClick={() => navigate("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <div className="grid grid-cols-1 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg shadow-sm">
            <div className="font-semibold text-lg">{job.title}</div>
            <div className="text-sm text-slate-500">{job.company} · {job.location}</div>
            <div className="text-sm mt-1 font-medium">Salary: {job.salary}</div>

            <div className="mt-2 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="border px-2 py-1 rounded-full text-xs">{tag}</span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() =>
                  alert(
                    `${job.title}\n\nCompany: ${job.company}\nLocation: ${job.location}\nSkills: ${job.tags.join(
                      ", "
                    )}\nSalary: ${job.salary}`
                  )
                }
                className="px-4 py-1 border rounded"
              >
                View
              </button>

              <button
                onClick={() => handleApply(job)}
                className="px-4 py-1 bg-sky-500 text-white rounded"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
