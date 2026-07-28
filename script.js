/* ==========================================================================
   THEME MANAGER
   ========================================================================== */

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeToggleBtn.querySelector('i');

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeIcon.className = 'fas fa-sun';
} else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeIcon.className = 'fas fa-moon';
}

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
});

/* ==========================================================================
   HEADER SCROLL EFFECT
   ========================================================================== */

const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* ==========================================================================
   MOBILE NAVIGATION MENU
   ========================================================================== */

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
    mobileMenuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Enable scrolling
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

/* ==========================================================================
   SKILLS FILTER
   ========================================================================== */

const filterBtns = document.querySelectorAll('.filter-btn');
const skillWrappers = document.querySelectorAll('.skill-card-wrapper');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle active button class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        skillWrappers.forEach(wrapper => {
            const categories = wrapper.getAttribute('data-category').split(' ');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                wrapper.classList.remove('hidden');
                setTimeout(() => {
                    wrapper.style.opacity = '1';
                    wrapper.style.transform = 'scale(1)';
                }, 50);
            } else {
                wrapper.style.opacity = '0';
                wrapper.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    wrapper.classList.add('hidden');
                }, 300); // Match transition duration
            }
        });
    });
});

/* ==========================================================================
   PROJECTS DATA & MODALS
   ========================================================================== */

const projectsData = {
    blooddonor: {
        title: "Blood Donor Web Application",
        category: "Full Stack Development",
        image: "assets/blood_donor_mockup.png",
        description: "A comprehensive and secure full-stack MERN portal bridging communication gaps between blood donors, hospitals, and regional blood banks. Designed with role-based dashboards, the platform streamlines the blood distribution logistics and real-time requests.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JSON Web Tokens"],
        features: [
            "Role-Based Dashboards: Dedicated interfaces for Donors, Hospitals, and Admins to manage profiles, request inventory, and view audit history.",
            "Real-Time Inventory System: Live tracking of available blood units categorized by type (A+, B-, etc.) with warning levels for low stocks.",
            "Secure Authorization: Implemented JWT-based session security, password salting, and sanitized database input filters to protect sensitive user healthcare profiles.",
            "Responsive Design: Fluid interfaces matching modern dashboard paradigms, ensuring mobile accessibility for emergency requests."
        ],
        github: "https://github.com/shaikrajiummar",
        live: "#"
    },
    erp: {
        title: "Student ERP System",
        category: "Java Application Development",
        image: "assets/student_erp_mockup.png",
        description: "A robust desktop/web student information enterprise resource platform that automates attendance tracking, exam schedules, announcements, and administrative record management.",
        tags: ["Java", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript"],
        features: [
            "Centralized Student Profiles: Seamless management of attendance metrics, fee records, grade history, and personal credentials.",
            "Timetable Scheduler: Interactive calendar UI visualizing class times, venues, and instructor assignments.",
            "Secure Password Manager: Built custom encryption hashing algorithms and secure password reset modules with database storage.",
            "Administrative Dashboard: Easy CRUD (Create, Read, Update, Delete) forms to update curricula, register students, and publish announcements."
        ],
        github: "https://github.com/shaikrajiummar",
        live: "#"
    },
    cricsta: {
        title: "CricSta - Cricket Stats Web App",
        category: "Data-driven Web App",
        image: "assets/cricket_stats_mockup.png",
        description: "A Python-integrated cricket statistics portal delivering rich insights on player history, tournament standing forecasts, and real-time updates.",
        tags: ["Python", "HTML5", "CSS3", "JavaScript", "BeautifulSoup", "Data Analytics"],
        features: [
            "Interactive Statistics Comparison: Dynamic charts comparing player strike rates, test/ODI run progress, and career highlights.",
            "Real-Time Match Updates: Scrapes and delivers live game commentary, scoreboard details, and match highlights.",
            "ICC Tournament Analysis: Aggregated data insights from ICC events, offering visualizations of historic trends and player metrics."
        ],
        github: "https://github.com/shaikrajiummar",
        live: "#"
    },
    jackiejeans: {
        title: "Jackie Jeans Onboarding Experience",
        category: "Mobile-First Experience",
        image: "assets/jackie_jeans_mockup.png",
        description: "A premium, mobile-first brand onboarding experience designed to simplify user engagement, collect sizing preferences via an interactive fit quiz, and guide users with an AI-voice assistant.",
        tags: ["React.js", "Tailwind CSS", "Web Speech API", "Speech Recognition", "Local Storage"],
        features: [
            "Manual Fit Quiz: A multi-step animated sizing quiz calculating optimal fit styles based on waist, height, and preference metrics.",
            "AI Voice Onboarding Assistant: Direct voice interaction using Speech Recognition API and Speech Synthesis API, enabling hands-free onboarding chat guides.",
            "Visual Sizing Matrix: Renders personalized card recommendations dynamically tailored to size results.",
            "Redirect Logic: Automatically links and transitions users into the primary web store after profile initialization."
        ],
        github: "https://github.com/shaikrajiummar",
        live: "https://vercel.com/shaik-rajiummars-projects/jackie-jeans-onboarding"
    },
    indusmind: {
        title: "IndusMind AI Platform",
        category: "Enterprise AI Platform",
        image: "assets/indusmind_ai_mockup.png",
        description: "A unified enterprise intelligence dashboard for factories and industrial operations. Features real-time telemetry processing, smart PDF compliance audits, and an interactive NLP Knowledge Graph.",
        tags: ["React.js", "Vite", "D3.js", "OCR", "RAG Pipeline", "Predictive Maintenance"],
        features: [
            "RAG-Powered Chatbot: Answers complex mechanical operation queries by parsing technical PDFs and returning context-aware source citations.",
            "Interactive D3 Knowledge Graph: Node-based visual representation of factory logs, materials, and processes, enabling operators to trace incidents.",
            "Compliance Audit Checker: Compares floor inspection guidelines with regional regulations, auto-flagging violations through automated checks.",
            "Predictive Maintenance Agent: Evaluates telemetry metrics (temperature, vibration) and forecasts machine breakdown timeframes."
        ],
        github: "https://github.com/shaikrajiummar",
        live: "http://localhost:5173/"
    },
    leaddesk: {
        title: "LeadDesk Mini",
        category: "Full Stack Application",
        image: "assets/leaddesk_mockup.jpg",
        description: "A premium, real-time full-stack lead capture application featuring a public-facing project inquiry landing page with robust inline validation and a real-time admin portal to manage and transition submitted leads.",
        tags: ["Node.js", "Express.js", "SQLite / Postgres", "Server-Sent Events", "JWT", "httpOnly Cookie"],
        features: [
            "Real-time Live Syncing: Built using Server-Sent Events (SSE). Submitting a new lead instantly pushes the lead to the admin dashboard (with a clean row-glow entrance animation and updating stats counters) without requiring any manual refreshes.",
            "Form Validation: Provides instant inline visual validation feedback on fields (Name, Email, Budget).",
            "JWT + HTTP-Only Cookie: Secure admin dashboard authentication using JWT stored in httpOnly, SameSite=Strict cookies to protect against XSS and CSRF.",
            "Multi-Database Adapter: Single-file database adapter supporting both SQLite for local development and PostgreSQL for production deployments."
        ],
        github: "https://github.com/shaikrajiummar/LeadDesk-Mini",
        live: "http://localhost:3000/"
    },
    osteoporosis: {
        title: "Osteoporosis Risk Prediction System",
        category: "Final Year Project - AI Healthcare",
        image: "assets/osteo_mockup.jpg",
        description: "A progressive multimodal AI-powered health portal that combines patient metadata and X-ray imaging inputs to predict osteoporosis risk levels, visualize bone density deterioration using Grad-CAM heatmaps, and generate doctor/patient diagnostics.",
        tags: ["Python (Flask)", "PyTorch / TF", "Grad-CAM", "Multimodal AI", "ReportLab PDF", "HIPAA-Compliant Auth"],
        features: [
            "Multimodal AI Classifier: Combines clinical tabular metadata and hip/spine X-ray images to output an integrated risk score.",
            "Grad-CAM Heatmaps: Integrates PyTorch convolutional layers to overlay active attention heatmaps on X-rays, visually explaining AI diagnosis to physicians.",
            "Doctor & Patient Portals: Features dedicated clinical portals (doctor validation via license numbers, patient summary analytics charts) and patient portals (personal health tracks, meal/exercise planners, AI chat guides).",
            "Auto PDF Diagnostics: Generates detailed patient diagnostic reports containing metadata scores, scans, and personalized recipes automatically compiled via ReportLab."
        ],
        github: "https://github.com/shaikrajiummar/final-year-project",
        live: "#"
    }
};

const modal = document.getElementById('project-detail-modal');
const modalBody = document.getElementById('modal-project-content');
const modalClose = document.getElementById('modal-close');
const projectDetailBtns = document.querySelectorAll('.btn-project-detail');

function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;
    
    // Inject dynamic HTML
    modalBody.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="modal-project-img">
        <h3 class="modal-project-title">${data.title}</h3>
        <div class="modal-project-tags">
            ${data.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        <p class="modal-project-desc">${data.description}</p>
        
        <h4 class="modal-features-title">Key Responsibilities & Features</h4>
        <ul class="modal-features-list">
            ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        
        <div class="modal-actions">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <i class="fab fa-github"></i> View GitHub Code
            </a>
            ${data.live !== '#' ? `
                <a href="${data.live}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

projectDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

modalClose.addEventListener('click', closeProjectModal);

// Close modal when clicking outside contents
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeProjectModal();
    }
});

/* ==========================================================================
   SCROLL REVEAL OBSERVER
   ========================================================================= */

const revealItems = document.querySelectorAll('.reveal-item');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve once revealed
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

revealItems.forEach(item => {
    revealObserver.observe(item);
});

/* ==========================================================================
   CONTACT FORM VALIDATION
   ========================================================================== */

const contactForm = document.getElementById('contact-me-form');
const nameInput = document.getElementById('form-name');
const emailInput = document.getElementById('form-email');
const messageInput = document.getElementById('form-message');
const successModal = document.getElementById('success-modal');
const successCloseBtn = document.getElementById('success-close-btn');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkFormGroupValidity(input, errorId, validatorFn = null) {
    const formGroup = input.parentElement;
    let isValid = true;
    
    if (input.value.trim() === '') {
        isValid = false;
    } else if (validatorFn && !validatorFn(input.value)) {
        isValid = false;
    }
    
    if (isValid) {
        formGroup.classList.remove('invalid');
    } else {
        formGroup.classList.add('invalid');
    }
    
    return isValid;
}

// Clear error on input typing
nameInput.addEventListener('input', () => nameInput.parentElement.classList.remove('invalid'));
emailInput.addEventListener('input', () => emailInput.parentElement.classList.remove('invalid'));
messageInput.addEventListener('input', () => messageInput.parentElement.classList.remove('invalid'));

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isNameValid = checkFormGroupValidity(nameInput, 'name-error');
    const isEmailValid = checkFormGroupValidity(emailInput, 'email-error', validateEmail);
    const isMessageValid = checkFormGroupValidity(messageInput, 'message-error');
    
    if (isNameValid && isEmailValid && isMessageValid) {
        // Form is valid! Simulate API request and show success modal
        const submitBtn = document.getElementById('submit-form-btn');
        const submitText = submitBtn.querySelector('span');
        const submitIcon = submitBtn.querySelector('i');
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitText.textContent = "Sending...";
        submitIcon.className = "fas fa-spinner fa-spin";
        
        setTimeout(() => {
            // Restore button state
            submitBtn.disabled = false;
            submitText.textContent = "Send Message";
            submitIcon.className = "fas fa-paper-plane";
            
            // Show Success Modal
            successModal.classList.add('open');
            document.body.style.overflow = 'hidden';
            
            // Reset fields
            contactForm.reset();
        }, 1500);
    }
});

successCloseBtn.addEventListener('click', () => {
    successModal.classList.remove('open');
    document.body.style.overflow = '';
});

successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('open');
        document.body.style.overflow = '';
    }
});

/* ==========================================================================
   SCROLL PROGRESS & TOP BUTTON
   ========================================================================== */

const topBtn = document.getElementById('topBtn');
const circle = document.querySelector('.progress-ring-circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    
    // Set ring progress
    setProgress(scrolled);
    
    // Toggle button visibility
    if (window.scrollY > 400) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
