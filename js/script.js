const selectedProjects = [
    {
        title: "FocusPulse",
        context: ".NET 8 · WPF Desktop App",
        summary: "A Windows productivity analytics app that tracks real-time app activity, computes daily focus scores using a weighted algorithm, and surfaces behavioral insights through a pluggable rule engine.",
        tech: ["C#", ".NET 8", "WPF", "MVVM", "SQLite", "EF Core", "Win32 API"],
        highlights: [
            "Built a complete 9-screen WPF application with a custom dark UI theme and reusable component system.",
            "Designed a full MVVM service layer: ProcessMonitor, FocusScore, DeepWork, Insight, and Trends services.",
            "Implemented a pluggable insight rule engine where each rule independently evaluates behavioral patterns and returns prioritized, scored recommendations."
        ],
        links: [
            {
                label: "View Case Study →",
                url: "FocusePulse Documentation/focuspulse-portfolio.html"
            }
        ]
    },
    {
        title: "Dialog Graph System",
        context: "Unity Tooling · Asset Store",
        summary: "A published Unity toolkit for authoring branching dialogue through a visual graph editor, with a full runtime, JSON round-trip workflows, action nodes, history tracking, and an optional AI generation layer.",
        tech: ["Unity", "C#", "GraphView", "UGUI/TMP", "JSON", "ScriptableObjects"],
        highlights: [
            "Shipped to the Unity Asset Store — built editor tooling with custom GraphView nodes, import/export, and an AI-assisted graph generation extension.",
            "Implemented a clean editor/runtime split: runtime reads serialized graph assets with no editor dependencies shipping to players.",
            "Designed the IActionHandler interface and DialogActionRunner to keep gameplay logic fully decoupled from dialogue data."
        ],
        links: [
            {
                label: "View Case Study →",
                url: "DialogGraph_Asset_Doc/portfolio.html"
            },
            {
                label: "Asset Store",
                url: "https://assetstore.unity.com/packages/tools/gui/dialog-graph-system-332234"
            }
        ]
    },
    {
        title: "Voxel Storage Performance Comparison",
        context: "C# / .NET Application",
        summary: "Built a desktop benchmarking tool to compare binary and SQL storage strategies for voxel-heavy data workflows.",
        tech: ["C#", ".NET", "Windows Forms", "SQL", "Benchmarking"],
        highlights: [
            "Implemented repeatable load and save benchmarks for data-intensive scenarios.",
            "Measured throughput and memory impact to identify the most scalable persistence approach.",
            "Produced practical findings that informed architecture decisions for future systems."
        ],
        links: [
            {
                label: "GitHub",
                url: "https://github.com/arjanbekaa/VoxelStoragePerformanceComparison"
            }
        ]
    },
    {
        title: "Traffic Sensor Simulation",
        context: "Simulation and Systems",
        summary: "Created a Unity-based simulation that models traffic sensor behavior with timed detection and raycast-driven logic.",
        tech: ["Unity", "C#", "Simulation", "Raycasting"],
        highlights: [
            "Translated real-world sensor concepts into testable, interactive software behavior.",
            "Implemented modular detection logic that can be reused across simulation scenarios.",
            "Focused on reliable system behavior and clear debugging signals for iteration speed."
        ],
        links: [
            {
                label: "GitHub",
                url: "https://github.com/arjanbekaa/Traffic-Simulation-and-Sensor-Implementation"
            }
        ]
    },
    {
        title: "Idle Tornado",
        context: "Shipped Product",
        summary: "Led technical implementation of a mobile title with voxel destruction, upgrade systems, and performance-critical gameplay loops.",
        tech: ["Unity", "C#", "Performance Optimization", "Mobile"],
        highlights: [
            "Owned core gameplay architecture and implementation from prototype to launch iterations.",
            "Optimized CPU/GPU workloads for stable runtime behavior on a wide device range.",
            "Contributed to product metrics improvement through technical and iteration support."
        ],
        links: [
            {
                label: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.zondacreative.idletornado"
            }
        ]
    },
    {
        title: "Save The World",
        context: "Applied Algorithms",
        summary: "Implemented geometry-driven puzzle systems using polygon tracking and triangulation logic in Unity.",
        tech: ["Unity", "C#", "Geometry", "Optimization"],
        highlights: [
            "Built custom polygon validation and area-fill detection for accurate game-state logic.",
            "Optimized triangle-based placement workflows to improve runtime efficiency.",
            "Delivered a robust technical foundation for content expansion and gameplay consistency."
        ],
        links: [
            {
                label: "APKPure",
                url: "https://apkpure.com/save-the-world/com.zondacreative.savetheworld"
            }
        ]
    },
    {
        title: "Anomaly Detection",
        context: "Data Engineering",
        summary: "Built a time-series anomaly detection pipeline with preprocessing, model tuning, and visualization.",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        highlights: [
            "Implemented an Isolation Forest workflow for anomaly classification on noisy data.",
            "Prepared and transformed input data to improve signal quality before training.",
            "Visualized outcomes to support interpretation and practical model iteration."
        ],
        links: [
            {
                label: "GitHub",
                url: "https://github.com/arjanbekaa/AnomalyDetection"
            }
        ]
    }
];

function renderProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    if (!projectsGrid) {
        return;
    }

    const markup = selectedProjects
        .map((project) => {
            const techMarkup = project.tech
                .map((tech) => `<li>${tech}</li>`)
                .join("");

            const highlightsMarkup = project.highlights
                .map((item) => `<li>${item}</li>`)
                .join("");

            const linksMarkup = project.links
                .map(
                    (link) =>
                        `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`
                )
                .join("");

            return `
                <article class="project-card" data-reveal>
                    <div class="project-title-row">
                        <h3>${project.title}</h3>
                        <span class="project-context">${project.context}</span>
                    </div>
                    <p class="project-summary">${project.summary}</p>
                    <ul class="project-tech">${techMarkup}</ul>
                    <ul class="project-highlights">${highlightsMarkup}</ul>
                    <div class="project-links">${linksMarkup}</div>
                </article>
            `;
        })
        .join("");

    projectsGrid.innerHTML = markup;
}

function initializeNavigation() {
    const navToggle = document.getElementById("nav-toggle");
    const navList = document.getElementById("nav-list");
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));

    if (navToggle && navList) {
        navToggle.addEventListener("click", () => {
            const isOpen = navList.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navList) {
                navList.classList.remove("open");
            }
            if (navToggle) {
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    const sections = navLinks
        .map((link) => {
            const target = link.getAttribute("href");
            if (!target || !target.startsWith("#")) {
                return null;
            }
            return document.querySelector(target);
        })
        .filter(Boolean);

    function updateActiveLink() {
        const y = window.scrollY + 140;

        let currentId = "";
        sections.forEach((section) => {
            if (!section) {
                return;
            }
            if (y >= section.offsetTop) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const linkTarget = link.getAttribute("href")?.replace("#", "");
            if (linkTarget === currentId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);
}

function initializeRevealAnimations() {
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, revealObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    revealElements.forEach((element) => observer.observe(element));
}

function initializeFooterYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    initializeNavigation();
    initializeRevealAnimations();
    initializeFooterYear();
});