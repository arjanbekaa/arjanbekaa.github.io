// Project Data - Easy to edit and add new projects
const projectsData = [
    {
        id: 1,
        title: "Idle Tornado",
        description: "Mobile prototype with voxel destruction and idle upgrades. Led solo development of voxel maps, chunk-based destruction and GPU/CPU performance optimization.",
        image: "images/idle-tornado.jpg",
        tech: ["Unity 3D", "C#", "Voxel System", "Performance Optimization"],
        category: ["playstore", "featured"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.idletornado",
        badge: "Featured"
    },
    {
        id: 2,
        title: "The Last Squad",
        description: "Upgradable character shooter with wave-based sections and bosses. Implemented smart enemy AI with circular tracking and dynamic spawning tied to player position for better difficulty scaling.",
        image: "images/The-last-squad.jpg",
        tech: ["Unity 3D", "C#", "AI Programming", "Wave System"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.thelastsquad",
        badge: "Play Store"
    },
    {
        id: 3,
        title: "Fruit Squeeze",
        description: "Physics-based fruit squeezing game using Obi Rope. Designed core rope-circling mechanic, mesh key shape squash logic, and juicy splash FX. Created a modular level creation system via ScriptableObjects.",
        image: "images/Fruit-squeeze.jpg",
        tech: ["Unity 3D", "Obi Rope", "Physics", "ScriptableObjects"],
        category: ["playstore", "featured"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.fruitsqueeze",
        badge: "Featured"
    },
    {
        id: 4,
        title: "Barista Adventures",
        description: "Casual barista simulation with layered drink-making and item management. Built dynamic pouring system and UI-focused interactions for various item types, with scalable layout for mobile usability.",
        image: "images/barista-adventures.jpg",
        tech: ["Unity 3D", "UI System", "Simulation", "Mobile UX"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.baristaadventures",
        badge: "Play Store"
    },
    {
        id: 5,
        title: "Wool Sorting",
        description: "Challenging sorting puzzle using Obi Rope and custom shaders. Developed mobile-friendly performance tweaks and fake rope systems for efficient wool thread simulation on low-end devices.",
        image: "images/wool-sorting.jpg",
        tech: ["Unity 3D", "Obi Rope", "Shaders", "Mobile Optimization"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.woolsorting",
        badge: "Play Store"
    },
    {
        id: 6,
        title: "Gravity Hero",
        description: "Wall-walking and gravity-switching hero game with combat and resource unlocking. Created traversal mechanics with simple, intuitive directional logic and implemented modular upgrade paths.",
        image: "images/gravity-hero.jpg",
        tech: ["Unity 3D", "C#", "Physics", "Combat System"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.gravityhero",
        badge: "Play Store"
    },
    {
        id: 7,
        title: "Monster Fight",
        description: "Merge & battle game with turn-based monster combat. Engineered the entire merge system and reusable turn-based framework with animation, damage logic, and asset support.",
        image: "images/monster-fight.jpg",
        tech: ["Unity 3D", "Turn-based Combat", "Merge Mechanics", "Animation"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.monsterfight",
        badge: "Play Store"
    },
    {
        id: 8,
        title: "Treasure Hunt",
        description: "Treasure-finding action with saw-hand controls and voxel-based debris suction. Built vacuum logic, cube batching, and optimized visuals through material merging and instancing.",
        image: "images/treasure-hunt.jpg",
        tech: ["Unity 3D", "Voxel System", "Material Optimization", "Instancing"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.treasurehunt",
        badge: "Play Store"
    },
    {
        id: 9,
        title: "My Barbershop",
        description: "Full-service simulation with hair-cutting, client management, and unlockable tools. Developed mesh-shaping haircuts, AI-controlled staff behavior, and interactive map progression.",
        image: "images/my-barbershop.jpg",
        tech: ["Unity 3D", "Mesh Manipulation", "AI Behavior", "Simulation"],
        category: ["playstore", "featured"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.mybarbershop",
        badge: "Play Store"
    },
    {
        id: 10,
        title: "Fashion Tycoon",
        description: "Fashion design simulator with pose-capture and outfit editing. Implemented UI-based dress customization, blend shape controls, and IK animation for model posing.",
        image: "images/fashion-tycoon.jpg",
        tech: ["Unity 3D", "IK Animation", "Blend Shapes", "UI System"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.fashiontycoon",
        badge: "Play Store"
    },
    {
        id: 11,
        title: "Pickpocket",
        description: "Casual timing-based pickpocketing game. Built the core timing mechanic with tap interaction and fail conditions.",
        image: "images/pickpocket.jpg",
        tech: ["Unity 3D", "Timing Mechanics", "Casual Gameplay", "Mobile Input"],
        category: ["playstore"],
        link: "https://play.google.com/store/apps/details?id=com.zondacreative.pickpocket",
        badge: "Play Store"
    },
    {
        id: 12,
        title: "Happy Couple",
        description: "Puzzle game with sand removal and ball unification. Conducted A/B testing and UI refinement. Managed CPI-focused adjustments for soft-launch candidate.",
        image: "images/happy-couple.jpg",
        tech: ["Unity 3D", "Puzzle Mechanics", "A/B Testing", "Analytics"],
        category: ["apkpure", "featured"],
        link: "https://apkpure.net/happy-couple/com.zondacreative.happycouple",
        badge: "APKPure"
    },
    {
        id: 13,
        title: "Stick Master",
        description: "Balance-based platformer on a stick. Created the main movement and physics fall logic, polished one-touch controls.",
        image: "images/stick-master.jpg",
        tech: ["Unity 3D", "Physics", "One-touch Controls", "Balance Mechanics"],
        category: ["apkpure"],
        link: "https://apkpure.com/stick-master/com.zondacreative.stickmaster",
        badge: "APKPure"
    },
    {
        id: 14,
        title: "Save The World",
        description: "Environmental area-filling puzzle using polygon math and triangulation. Developed custom polygon tracking, fill validation, and optimized triangle-based flower placement/coloring for performance.",
        image: "images/save-the-world.jpg",
        tech: ["Unity 3D", "Polygon Math", "Triangulation", "Optimization"],
        category: ["apkpure", "featured"],
        link: "https://apkpure.com/save-the-world/com.zondacreative.savetheworld",
        badge: "Featured"
    },
    {
        id: 15,
        title: "Tricky Words",
        description: "Word puzzler with walking characters. Created modular level loader, animation systems, and word logic framework.",
        image: "images/tricky-words.jpg",
        tech: ["Unity 3D", "Word Puzzle", "Animation", "Modular System"],
        category: ["apkpure"],
        link: "https://apkpure.com/tricky-words/com.zondacreative.trickywords",
        badge: "APKPure"
    },
    {
        id: 16,
        title: "Perspective Collectionist",
        description: "Perspective-based puzzle assembly game. Implemented camera alignment detection and completion recognition system.",
        image: "images/perspective-collectionist.jpg",
        tech: ["Unity 3D", "Camera System", "Perspective Puzzles", "Detection Logic"],
        category: ["apkpure"],
        link: "https://apkpure.net/perspective-collectionist/com.zondacreative.perspectivecollectionist",
        badge: "APKPure"
    },
    {
        id: 17,
        title: "Balloon Art",
        description: "Creative rope-art builder using Obi Rope. Engineered balloon knot logic, blueprint prefabs, and boolean behavior from rope inputs.",
        image: "images/balloon-art.jpg",
        tech: ["Unity 3D", "Obi Rope", "Creative Mechanics", "Boolean Logic"],
        category: ["apkpure"],
        link: "https://apkpure.com/balloon-art/com.zondacreative.balloonart",
        badge: "APKPure"
    },
    {
        id: 18,
        title: "Draw Commute",
        description: "Snow-clearing puzzle with draw-to-path controls. Built responsive input and validation logic for bus routing.",
        image: "images/draw-commute.jpg",
        tech: ["Unity 3D", "Draw Controls", "Path Finding", "Input System"],
        category: ["apkpure"],
        link: "https://apkpure.com/draw-commute/com.zondacreative.drawcommute",
        badge: "APKPure"
    },
    {
        id: 19,
        title: "Tap Miner",
        description: "Idle mining game with voxel destruction. Optimized using object pooling, shared material batching, and designed upgrade/economy systems.",
        image: "images/tap-miner.jpg",
        tech: ["Unity 3D", "Object Pooling", "Idle Mechanics", "Economy System"],
        category: ["apkpure"],
        link: "https://apkpure.com/tap-miner/com.zondacreative.tapminer",
        badge: "APKPure"
    },
    {
        id: 20,
        title: "Get 'Em Mad",
        description: "Throw-object stealth game. Created target reaction logic, detection triggers, and risk-based scoring system.",
        image: "images/get-em-mad.jpg",
        tech: ["Unity 3D", "Stealth Mechanics", "AI Detection", "Scoring System"],
        category: ["apkpure"],
        link: "https://apkpure.com/get-em-mad/com.zondacreative.getemmad",
        badge: "APKPure"
    },
    {
        id: 21,
        title: "Dialogue Graph System",
        description: "Graph-based dialogue editor + runtime for Unity: JSON import/export, localization, undo/redo, GraphView editor, and polished UGUI/TMP runtime with typewriter, autoplay, and backlog.",
        image: "images/dialog-graph-system.png",
        tech: ["Unity 3D", "C#", "GraphView", "UGUI/TMP"],
        category: ["tools", "featured"],
        link: "https://assetstore.unity.com/packages/tools/gui/dialogue-graph-system-332234",
        badge: "Unity Tool"
    },
    {
        id: 22,
        title: "Anomaly Detection",
        description: "Isolation Forest model on time-series data: preprocessing, visualization, and contamination tuning to improve anomaly flagging accuracy.",
        image: "",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        category: ["github", "ai"],
        link: "https://github.com/arjanbekaa/AnomalyDetection",
        badge: "ML"
    },
    {
        id: 23,
        title: "Traffic Sensor Simulation",
        description: "Unity simulation of real-world traffic sensors using raycasts and timed detection logic; demonstrates translating sensor behavior into usable gameplay systems.",
        image: "images/traffic-simulator.png",
        tech: ["Unity 3D", "C#", "Raycasting", "Simulation"],
        category: ["github", "tools", "simulation"],
        link: "https://github.com/arjanbekaa/Traffic-Simulation-and-Sensor-Implementation",
        badge: "Simulation"
    },
    {
        id: 24,
        title: "Voxel Storage Performance Comparison",
        description: "Benchmarks voxel data storage strategies—binary files vs SQL databases—focusing on load/save throughput, memory use, and scalability. Includes Windows Forms test harness and repeatable scenarios.",
        image: "images/voxel-storage.png",
        tech: ["C#", ".NET", "Windows Forms", "Binary I/O", "SQL"],
        category: ["github", "research", "performance"],
        link: "https://github.com/arjanbekaa/VoxelStoragePerformanceComparison",
        badge: "Benchmark"
    },
    {
        id: 25,
        title: "AI Providers for Unity",
        description: "Standalone provider integration for Unity, with a unified request API, ScriptableObject definitions and editor configuration for cloud and local AI services.",
        image: "images/ai-providers-card.png",
        tech: ["Unity", "C#", "REST APIs", "LLM Integration"],
        category: ["tools", "featured"],
        link: "https://assetstore.unity.com/packages/tools/ai-ml-integration/ai-providers-for-unity-beka-forge-384482",
        badge: "Beka Forge"
    }
];

const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function loadProjects(filter = 'all') {
    const visible = filter === 'all' ? projectsData : projectsData.filter(p => p.category.includes(filter));
    projectsGrid.innerHTML = visible.map(project => `
        <article class="project-card">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy" width="420" height="280">` : '<div class="project-image-label">Time-series<br>anomaly detection</div>'}
                <span class="project-badge">${project.badge}</span>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div>
                <div class="project-links"><a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project <span aria-hidden="true">↗</span><span class="sr-only">: ${project.title} (opens in a new tab)</span></a></div>
            </div>
        </article>
    `).join('');
}

filterButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn === button);
            btn.setAttribute('aria-pressed', String(btn === button));
        });
        loadProjects(button.dataset.filter);
    });
});

hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
    }
});
loadProjects();
