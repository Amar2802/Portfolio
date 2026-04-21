// ========== Typing Animation ==========
const typingTexts = ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000;

function typeText() {
    const element = document.getElementById('typingText');
    const currentText = typingTexts[typingIndex];

    if (!isDeleting && charIndex < currentText.length) {
        element.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % typingTexts.length;
        setTimeout(typeText, typingSpeed);
    }
}

typeText();

// ========== Mobile Menu Toggle ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========== Smooth Scroll ==========
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== Resume Upload Preview ==========
let localResumeUrl = '';
const publicResumePath = 'resume.pdf';
const resumeUpload = document.getElementById('resumeUpload');
const resumeDownload = document.getElementById('resumeDownload');
const heroResumeDownload = document.getElementById('heroResumeDownload');
const resumePreview = document.getElementById('resumePreview');
const resumeStatus = document.getElementById('resumeStatus');

function setResumeLinks(url, fileName, isLocal) {
    [resumeDownload, heroResumeDownload].forEach(link => {
        if (!link) return;
        link.href = url;
        link.download = fileName;
    });

    if (resumePreview) {
        resumePreview.href = url;
    }

    if (resumeStatus) {
        resumeStatus.textContent = isLocal
            ? `Local resume selected: ${fileName}. Add it as resume.pdf before deployment for public access.`
            : 'Public resume path: resume.pdf';
    }
}

if (resumeUpload) {
    resumeUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.type !== 'application/pdf') {
            resumeStatus.textContent = 'Please upload a PDF resume.';
            resumeUpload.value = '';
            return;
        }

        if (localResumeUrl) {
            URL.revokeObjectURL(localResumeUrl);
        }

        localResumeUrl = URL.createObjectURL(file);
        setResumeLinks(localResumeUrl, file.name, true);
    });
}

function clearLocalResume() {
    if (localResumeUrl) {
        URL.revokeObjectURL(localResumeUrl);
        localResumeUrl = '';
    }

    if (resumeUpload) {
        resumeUpload.value = '';
    }

    setResumeLinks(publicResumePath, 'Amarnath-Yadav-Resume.pdf', false);
}

// ========== Scroll Reveal Animation ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
});

// ========== Contact Form ==========
const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const replyToEmail = document.getElementById('replyToEmail');

if (contactForm && emailInput && replyToEmail) {
    contactForm.addEventListener('submit', () => {
        replyToEmail.value = emailInput.value;
    });
}

// ========== Smooth Scroll Behavior ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== Performance: Lazy Load Images ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// ========== Page Load Animation ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ========== Add scroll event for navbar transparency ==========
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(15, 15, 30, 0.9)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.7)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


