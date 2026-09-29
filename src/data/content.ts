/**
 * Single Source of Truth for all portfolio content, copy, links, and project data.
 * All components read strictly from this file.
 */
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const siteContent = {
  personal: {
    name: "Abdallah Mohamed",
    initials: "AM",
    role: "Freelance n8n Workflow Automation Engineer",
    eyebrow: "n8n · automation · security-first",
    h1: {
      lead: "I automate the",
      accent: "busy work.",
      highlight: "Securely.",
    },
    heroSub: "n8n workflows for e-commerce and small teams, built safe from the first node.",
    availability: "Open for freelance projects · Remote",
    photo: {
      src: `${import.meta.env.BASE_URL}images/profile.jpeg`,
      objectFit: "cover",
      objectPosition: "center",
      alt: "Abdallah Mohamed - n8n Workflow Automation Engineer",
      statusChip: "status: building automations",
      rotatingBadgeText: "n8n · AUTOMATION · SECURITY · ",
    },
    ctaPrimary: "Let's automate your workflow",
    ctaSecondary: "See my work",
  },

  about: {
    sectionNum: "01 / About",
    title: "Bridging code, security, and effortless workflows.",
    paragraphs: [
      "Computer Science student at E-JUST with a DevSecOps foundation. I engineer resilient automations that bridge stores, CRMs, and messaging apps.",
      "Every pipeline is built with authenticated webhooks, safe credentials, and secure tunneling so operations run smoothly without exposing sensitive data.",
    ],
    quickFacts: "Egypt · Remote · Arabic / English · n8n automation",
  },

  services: {
    sectionNum: "02 / Services",
    title: "Automations engineered for reliability and safety.",
    items: [
      {
        id: "workflow-automation",
        title: "n8n Workflow Automation",
        desc: "End-to-end custom workflows connecting your everyday tools and operations.",
        icon: "Workflow",
        gridClass: "col-span-1 md:col-span-2",
      },
      {
        id: "ecommerce-automation",
        title: "E-commerce Automation",
        desc: "Shopify and WooCommerce sync for inventory, customers, and order fulfillment.",
        icon: "ShoppingBag",
        gridClass: "col-span-1",
      },
      {
        id: "crm-sheets",
        title: "CRM & Google Sheets Integration",
        desc: "Automatic bi-directional data flow between web forms, spreadsheets, and CRMs.",
        icon: "Sheet",
        gridClass: "col-span-1",
      },
      {
        id: "api-payments",
        title: "API, Webhook & Payment Integrations",
        desc: "Secure webhook handlers and API integrations with payment gateways.",
        icon: "PlugZap",
        gridClass: "col-span-1",
      },
      {
        id: "notifications-reporting",
        title: "Notifications & Reporting",
        desc: "Real-time alerts and scheduled summaries to Slack, Telegram, or email.",
        icon: "Bell",
        gridClass: "col-span-1",
      },
      {
        id: "security-audit",
        title: "Secure n8n Setup & Workflow Audit",
        desc: "Self-hosted instance hardening, safe secrets storage, and pipeline audits.",
        icon: "ShieldCheck",
        gridClass: "col-span-1 md:col-span-2",
      },
    ],
  },

  projects: {
    sectionNum: "03 / Projects",
    title: "Featured automation workflows and software builds.",
    caseStudiesHeader: "Automation case studies",
    caseStudiesSub: "Production-ready architectures built with enterprise reliability and strict security.",
    caseStudies: [
      {
        id: "order-crm-sync",
        num: "01",
        title: "Order-to-CRM Sync",
        oneLiner: "New store order validation, Google Sheets recording, and immediate team notifications.",
        tags: ["n8n", "Shopify", "Google Sheets", "Telegram"],
        badge: "Demo build",
        image: asset("public/images/projects/workflow-1.jpg"),
        alt: "Diagram of order-to-CRM event sync workflow in n8n",
        modal: {
          problem: "Manual order copying caused fulfillment delays and frequent data entry mistakes.",
          build: "Constructed an event-driven n8n workflow validating payloads and syncing customer data.",
          result: "Zero manual entry, instant spreadsheet updates, and real-time team dispatch alerts.",
        },
      },
      {
        id: "instant-lead-followup",
        num: "02",
        title: "Instant Lead Follow-up",
        oneLiner: "Form submission capture, CRM contact enrichment, automated reply, and team alert.",
        tags: ["n8n", "Webhooks", "CRM", "Email API"],
        badge: "Demo build",
        image: asset("public/images/projects/workflow-2.jpg"),
        alt: "Diagram of instant lead follow-up and notification pipeline in n8n",
        modal: {
          problem: "Delayed responses to website inquiries resulted in lost sales and cold leads.",
          build: "Engineered automated webhook listeners delivering tailored email replies within ten seconds.",
          result: "Sub-minute response times and immediate lead assignment to the sales pipeline.",
        },
      },
      {
        id: "payment-webhook-handler",
        num: "03",
        title: "Secure Payment Webhook Handler",
        oneLiner: "Payment gateway webhook processing with cryptographic verification, retries, and failure alerts.",
        tags: ["n8n", "PayMob", "Stripe", "HMAC SHA256"],
        badge: "Demo build",
        image: asset("public/images/projects/workflow-3.jpg"),
        alt: "Diagram of cryptographic webhook verification and error recovery flow in n8n",
        modal: {
          problem: "Unverified webhooks and transient network drops caused duplicate orders and lost revenue.",
          build: "Implemented HMAC signature verification, exponential retry backoff, and Telegram error dispatch.",
          result: "Guaranteed tamper-proof transaction verification with instant escalation of failed events.",
        },
      },
    ],
    alsoBuiltHeader: "Also built",
    alsoBuiltSub: "Full-stack web applications, system software, and desktop tools.",
    alsoBuilt: [
      {
        id: "medicare",
        title: "MediCare Online Pharmacy",
        oneLiner: "Full-stack MERN pharmacy with JWT auth and PayMob payment processing.",
        tags: ["MERN", "JWT", "PayMob"],
        github: "https://github.com/xxBINGOxx/Medicare",
      },
      {
        id: "autologic",
        title: "AutoLogic Car Services",
        oneLiner: "MERN service platform featuring bilingual EN/AR RTL support and Cloudinary.",
        tags: ["MERN", "EN/AR RTL", "Cloudinary"],
        github: "https://github.com/Galal012/Web-Project",
      },
      {
        id: "hospital-system",
        title: "Hospital Management System",
        oneLiner: "Desktop patient and records management using Python, SQLite, and network sockets.",
        tags: ["Python", "SQLite", "Sockets"],
        github: "https://github.com/Galal012/Hospital-Management-System",
      },
      {
        id: "chill-shell",
        title: "Chill Shell",
        oneLiner: "Custom Unix command-line shell implementation built from the ground up.",
        tags: ["C", "Linux", "Systems"],
        github: "https://github.com/xxBINGOxx/Chill-Shell",
      },
    ],
  },

  skills: {
    sectionNum: "04 / Skills",
    title: "Technical proficiencies and security tooling.",
    categories: [
      {
        name: "Automation",
        skills: ["n8n", "Webhooks", "REST APIs", "JSON", "Database Sync", "ngrok"],
      },
      {
        name: "Web Development",
        skills: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "JWT"],
      },
      {
        name: "Security",
        skills: ["Web Security Testing", "Bug Hunting", "CTFs", "Red Teaming", "Subnetting", "Network Design"],
      },
      {
        name: "Languages",
        skills: ["Python", "JavaScript", "C/C++", "Assembly"],
      },
      {
        name: "Tools",
        skills: ["Linux", "Git / GitHub", "Cloudinary", "SQLite"],
      },
    ],
    softSkills: "Analytical problem solving, clear client communication, and reliable project delivery.",
  },

  experience: {
    sectionNum: "05 / Experience",
    title: "Engineering experience & technical tracks.",
    timeline: [
      {
        role: "Freelance Software & Workflow Automation Engineer",
        period: "Aug 2026 – Present",
        detail: "Designing resilient, secure n8n automation pipelines for international clients.",
      },
      {
        role: "Software QA Tester, Test IO",
        period: "Mar 2026 – Present",
        detail: "Performing functional exploratory testing and reporting security and usability bugs.",
      },
      {
        role: "Technical & Professional Trainee, DEPI automation track",
        period: "2026 – Present",
        detail: "Specializing in software engineering tracks and enterprise automation architectures.",
      },
      {
        role: "Network Infrastructure Trainee, NTI",
        period: "Jun – Jul 2025",
        detail: "Hands-on enterprise networking, routing protocols, subnetting, and infrastructure design.",
      },
    ],
  },

  education: {
    sectionNum: "06 / Education & Certifications",
    title: "Academic foundation and specialized credentials.",
    educationList: [
      {
        institution: "E-JUST (Egypt-Japan University of Science & Technology)",
        degree: "B.Sc. Computer Science & IT",
        period: "Expected 2028",
      },
      {
        institution: "El-Sadat STEM High School",
        degree: "High School Diploma",
        period: "2021 – 2024",
      },
    ],
    certificationsList: [
      {
        name: "Red Teaming Diploma",
        issuer: "Red Nexus",
        period: "Ongoing",
      },
      {
        name: "Computer Network Fundamentals",
        issuer: "Mahra Tech",
        period: "2025",
      },
      {
        name: "Web Development Fundamentals Camp",
        issuer: "SAIT",
        period: "2025",
      },
      {
        name: "Python Programming",
        issuer: "DataCamp / Sprint Up",
        period: "2024",
      },
    ],
  },

  contact: {
    sectionNum: "07 / Contact",
    headline: "Let's automate something.",
    tagline: "Your busy work, automated. Your data, protected.",
    promptLine: "Tell me what you do by hand today, and I'll show you how to automate it.",
    email: "abdallah1intel1@gmail.com",
    emailSubject: "Automation project inquiry",
    linkedin: "https://www.linkedin.com/in/abdallahmohamedabdallah/",
    github: "https://github.com/xxBINGOxx",
    whatsapp: "", // Empty: button will hide gracefully
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    footer: {
      copyrightYear: 2026,
      name: "Abdallah Mohamed",
      rights: "All rights reserved.",
    },
  },
};
