export const personal = {
  name: "Mustafa El Tannir",
  title: "Software Engineering Graduate",
  tagline: "Building intelligent, data-driven systems — from model to deployment.",
  bio: "Software engineering graduate specialising in intelligent information systems with a strong focus on applied machine learning and data-driven software development. Experienced in building classification, forecasting and image manipulation models including preprocessing, feature engineering, evaluation, and optimisation. Developed full-stack applications integrating React frontends with Node.js/Django backends to deploy machine learning solutions into scalable, user-facing systems.",
  email: "smtannir@gmail.com",
  phone: "+61421978747",
  linkedin: "https://linkedin.com/in/mustafa-el-tannir",
  twitter: null,
  resumeUrl: "/resume.pdf",
  location: "Sydney, Australia",
  availableForWork: true,
}

export const skills = {
  languages: ["Python", "Java", "JavaScript", "C", "C++"],
  frameworks: ["React", "Node.js", "Express", "Django", "Spring Boot", "REST APIs"],
  tools: ["Git", "Postman", "Stimulsoft Designer", "Tekla PowerFab"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  other: ["Machine Learning", "TensorFlow", "PyTorch", "Pandas", "Data Structures", "Algorithms", "System Design", "Agile"],
}

export const projects = [
  {
    id: 1,
    title: "Machine Learning for Enzyme Classification",
    description: "Machine learning pipeline for classifying enzymes from biological sequence data.",
    longDescription: "Built a machine learning pipeline to classify enzymes using biological sequence data. Performed data preprocessing including cleaning, feature extraction, encoding, and normalisation. Trained and evaluated multiple models using cross-validation and hyperparameter tuning, and assessed performance using standard classification metrics.",
    tags: ["Python", "Machine Learning", "Pandas"],
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "Data Forecasting Web Application",
    description: "Full-stack web application for time-series AI forecasting with interactive data visualisation.",
    longDescription: "Developed time-series AI forecasting models and evaluation workflows. Built REST APIs to serve predictions dynamically and implemented a React frontend with interactive historical and forecast visualisations. Focused on integrating ML outputs into a responsive, user-facing system.",
    tags: ["React", "Node.js", "Machine Learning", "REST API"],
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "Seat Booking System",
    description: "Full-stack reservation platform with real-time availability tracking and concurrency handling.",
    longDescription: "Designed a full-stack reservation platform with real-time availability tracking. Implemented Spring Boot backend booking validation and concurrency handling to prevent double bookings. Designed and implemented a relational SQL database schema for users, seats, and reservations, with a responsive frontend for seat selection and confirmation.",
    tags: ["Spring Boot", "Java", "MySQL"],
    live: null,
    image: null,
    featured: false,
  },
]

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering (Honours) in Software",
    institution: "The University of Sydney",
    location: "Sydney, Australia",
    startYear: "Feb 2022",
    endYear: "Nov 2025",
    gpa: null,
    description: "Specialisation in Intelligent Information Systems. Thesis: Machine learning solutions for image enhancement in ptychography. Awarded the Chancellor's Award (ATAR equivalent 99.90).",
    courses: ["Machine Learning", "Intelligent Information Systems", "Data Structures & Algorithms", "System Design", "Software Engineering"],
  },
]

export const experience = [
  {
    id: 1,
    role: "Engineering Consultant (Internship)",
    company: "Hanlon Industries",
    location: "Sydney, Australia",
    startDate: "June 2025",
    endDate: "August 2025",
    description: "Developed custom reporting solutions and automated engineering workflows within the fabrication domain.",
    highlights: [
      "Developed custom Tekla PowerFab reports using Stimulsoft Designer",
      "Implemented grouping logic, calculated fields, and data validation",
      "Integrated database fields to generate accurate fabrication reports",
      "Automated reporting workflows to improve operational efficiency",
    ],
    tags: ["Tekla PowerFab", "Stimulsoft Designer", "SQL"],
  },
]

export const certifications = []
