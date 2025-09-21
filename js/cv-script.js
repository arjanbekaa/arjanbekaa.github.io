// Load CV Data when document is ready
document.addEventListener('DOMContentLoaded', function() {
    loadCVData();
});

// Load all CV data into the template
function loadCVData() {
    // Personal Information
    document.getElementById('cv-name').textContent = cvData.personal.name;
    document.getElementById('cv-title').textContent = cvData.personal.title;
    document.getElementById('cv-location').textContent = cvData.personal.location;
    document.getElementById('cv-phone').textContent = cvData.personal.phone;
    document.getElementById('cv-email').textContent = cvData.personal.email;
    
    // Summary
    document.getElementById('cv-summary').textContent = cvData.summary;
    
    // Key Projects
    loadProjects();
    
    // Experience
    loadExperience();
    
    // Education
    loadEducation();
    
    // Skills
    loadSkills();
    
    // Languages
    loadLanguages();
    
    // Hobbies
    loadHobbies();
}

// Load Projects Section
function loadProjects() {
    const projectsContainer = document.getElementById('cv-projects');
    projectsContainer.innerHTML = '';
    
    cvData.keyProjects.forEach(project => {
        const projectHTML = `
            <div class="project-item">
                <div class="project-header">
                    <h4 class="project-title">${project.title}</h4>
                    ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">View Project →</a>` : ''}
                </div>
                ${project.subtitle ? `<p class="project-subtitle">${project.subtitle}</p>` : ''}
                ${project.company ? `<p class="project-company">${project.company}</p>` : ''}
                <ul class="project-achievements">
                    ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
}

// Load Experience Section
function loadExperience() {
    const experienceContainer = document.getElementById('cv-experience');
    experienceContainer.innerHTML = '';
    
    cvData.experience.forEach(exp => {
        const expHTML = `
            <div class="experience-item">
                <div class="experience-header">
                    <h4 class="experience-title">${exp.title}</h4>
                    <p class="experience-company">${exp.company}</p>
                    <p class="experience-meta">${exp.period} | ${exp.location}</p>
                </div>
                <ul class="experience-duties">
                    ${exp.duties.map(duty => `<li>${duty}</li>`).join('')}
                </ul>
            </div>
        `;
        experienceContainer.innerHTML += expHTML;
    });
}

// Load Education Section
function loadEducation() {
    const educationContainer = document.getElementById('cv-education');
    
    // Education HTML
    let educationHTML = '<div class="education-list">';
    cvData.education.forEach(edu => {
        educationHTML += `
            <div class="education-item">
                <h4 class="education-degree">${edu.degree}</h4>
                <p class="education-school">${edu.school}</p>
                <p class="education-status">${edu.status}</p>
            </div>
        `;
    });
    educationHTML += '</div>';
    
    // Certifications HTML
    educationHTML += '<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Certifications</h4>';
    educationHTML += '<div class="certifications-list">';
    cvData.certifications.forEach(cert => {
        educationHTML += `
            <div class="certification-item">
                <span><i class="fas fa-certificate"></i> ${cert.name} - ${cert.provider}</span>
                <span class="cert-date">${cert.date}</span>
            </div>
        `;
    });
    educationHTML += '</div>';
    
    educationContainer.innerHTML = educationHTML;
}

// Load Skills Section
function loadSkills() {
    // Technical Skills
    const technicalContainer = document.getElementById('cv-technical-skills');
    technicalContainer.innerHTML = `
        <h4>Technical Skills</h4>
        <div class="skill-tags">
            ${cvData.skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    // Methodologies
    const methodsContainer = document.getElementById('cv-methodologies');
    methodsContainer.innerHTML = `
        <h4>Methodologies</h4>
        <div class="skill-tags">
            ${cvData.skills.methodologies.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    // Soft Skills
    const softContainer = document.getElementById('cv-soft-skills');
    softContainer.innerHTML = `
        <h4>Soft Skills</h4>
        <div class="skill-tags">
            ${cvData.skills.soft.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
}

// Load Languages Section
function loadLanguages() {
    const languagesContainer = document.getElementById('cv-languages');
    languagesContainer.innerHTML = '';
    
    cvData.languages.forEach(lang => {
        const langHTML = `
            <div class="language-item">
                <div class="language-flag">${lang.flag}</div>
                <div class="language-info">
                    <p class="language-name">${lang.name}</p>
                    <p class="language-level">${lang.level}</p>
                </div>
            </div>
        `;
        languagesContainer.innerHTML += langHTML;
    });
}

// Load Hobbies Section
function loadHobbies() {
    const hobbiesContainer = document.getElementById('cv-hobbies');
    hobbiesContainer.innerHTML = '';
    
    const hobbyIcons = {
        'Gaming': 'fa-gamepad',
        'Programming': 'fa-code',
        'Travel': 'fa-plane'
    };
    
    cvData.hobbies.forEach(hobby => {
        const icon = hobbyIcons[hobby] || 'fa-heart';
        const hobbyHTML = `
            <div class="hobby-item">
                <i class="fas ${icon}"></i>
                <span>${hobby}</span>
            </div>
        `;
        hobbiesContainer.innerHTML += hobbyHTML;
    });
}