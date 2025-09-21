// Project Data - Easy to edit and add new projects
const projectsData = [
    {
        id: 1,
        title: "Idle Tornado",
        description: "Top-performing soft launch title with voxel destruction and idle upgrades. Led solo development including voxel maps, chunk-based destruction, and GPU/CPU optimized performance, reducing CPI from $0.60 to $0.35.",
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
        title: "Dialog Graph System",
        description: "Graph-based dialogue editor + runtime for Unity: JSON import/export, localization, undo/redo, GraphView editor, and polished UGUI/TMP runtime with typewriter, autoplay, and backlog.",
        image: "images/dialog-graph-system.png",
        tech: ["Unity 3D", "C#", "GraphView", "UGUI/TMP"],
        category: ["github", "tool", "featured"],
        link: "https://github.com/arjanbekaa/DialogGraphSystem",
        badge: "Open Source"
    },
    {
        id: 22,
        title: "Anomaly Detection",
        description: "Isolation Forest model on time-series data: preprocessing, visualization, and contamination tuning to improve anomaly flagging accuracy.",
        image: "images/anomaly.jpg",
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
        category: ["github", "tool", "simulation"],
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
    }
];

// DOM Elements
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    setTimeout(() => {
        loader.classList.add('hide');
    }, 1500);

    // Load projects
    loadProjects('all');

    // Animate hero stats
    animateStats();

    // Initialize skills animation
    observeSkills();

    // Scroll animations
    observeElements();
});

// Navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offset = 70;
        
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animate hero stats
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-value'));
                animateValue(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    });

    statValues.forEach(stat => observer.observe(stat));
}

// Animate number counting
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.parentElement.textContent.includes('Million') ? 'M+' : '+');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Load and display projects
function loadProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category.includes(filter));
    
    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
        
        // Animate cards on load
        setTimeout(() => {
            projectCard.classList.add('fade-in', 'visible');
        }, index * 100);
    });
}

// Create project card HTML
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <span class="project-badge">${project.badge}</span>
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.link}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                </a>
            </div>
        </div>
    `;
    return card;
}

// Filter projects
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        loadProjects(filter);
    });
});

// Open project modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
        <p>${project.description}</p>
        <h3>Technologies Used:</h3>
        <div class="project-tech" style="margin-bottom: 1rem;">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <a href="${project.link}" target="_blank" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i>
            View on ${project.badge}
        </a>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animate skill bars
function observeSkills() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const percentage = skillBar.getAttribute('data-percentage');
                
                // Create progress bar if not exists
                if (!skillBar.querySelector('.skill-progress')) {
                    const progress = document.createElement('div');
                    progress.className = 'skill-progress';
                    
                    const fill = document.createElement('div');
                    fill.className = 'skill-fill';
                    
                    progress.appendChild(fill);
                    skillBar.appendChild(progress);
                    
                    // Animate fill
                    setTimeout(() => {
                        fill.style.width = percentage + '%';
                    }, 100);
                }
                
                observer.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Observe elements for fade-in animation
function observeElements() {
    const elements = document.querySelectorAll('.section, .achievement-card, .skill-category, .contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => observer.observe(element));
}

// Particles effect (optional - can be enhanced)
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Preload images for better performance
function preloadImages() {
    projectsData.forEach(project => {
        const img = new Image();
        img.src = project.image;
    });
}

// Call preload on page load
window.addEventListener('load', preloadImages);

// Console Easter Egg
console.log('%c🎮 Welcome to Arjan Beka\'s Portfolio! 🎮', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
console.log('%cLooking for a Unity developer? Let\'s create something amazing together!', 'font-size: 14px; color: #FFBE0B;');

// Open CV in new window
function openCV() {
    const cvWindow = window.open('cv.html', 'CV', 'width=1024,height=768,scrollbars=yes');
    
    // If popup is blocked, fallback to same window
    if (!cvWindow || cvWindow.closed || typeof cvWindow.closed == 'undefined') {
        window.location.href = 'cv.html';
    }
}

// Hide scroll indicator when scrolling
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.classList.add('hide');
        } else {
            scrollIndicator.classList.remove('hide');
        }
    }
});