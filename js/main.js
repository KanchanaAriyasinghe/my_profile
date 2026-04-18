/* ── Hamburger ───────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navbar    = document.getElementById('navbar');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navbar.classList.toggle('open');
  });
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navbar.classList.remove('open');
    });
  });
}

/* ── Header scroll shadow ────────────────────────────────── */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  });
}

/* ── Scroll-to-top ───────────────────────────────────────── */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Active nav on scroll ────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === `#${id}`) l.classList.add('active');
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => observer.observe(s));

/* ── Smooth scroll for anchor links ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── Scroll-reveal animation ─────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.skill-card, .project-card, .exp-card, .info-block, .contact-card, .r-stat, .research-card'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ── Video Player (SVG icon version) ────────────────────── */
const video         = document.getElementById('researchVideo');
const overlay       = document.getElementById('videoOverlay');
const bigPlayBtn    = document.getElementById('bigPlayBtn');
const playPauseBtn  = document.getElementById('playPauseBtn');
const playIconEl    = document.getElementById('playIcon');   // <svg> element
const muteBtn       = document.getElementById('muteBtn');
const volIconEl     = document.getElementById('volIcon');    // <svg> element
const fullscreenBtn = document.getElementById('fullscreenBtn');
const progressBar   = document.getElementById('progressBar');
const progressFill  = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl    = document.getElementById('duration');

if (video) {
  const fmt = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;

  const setPlayIcon  = () => { playIconEl.innerHTML  = '<use href="#ico-pause"/>'; };
  const setPauseIcon = () => { playIconEl.innerHTML  = '<use href="#ico-play"/>'; };
  const setMuteIcon  = () => { volIconEl.innerHTML   = '<use href="#ico-mute"/>'; };
  const setVolIcon   = () => { volIconEl.innerHTML   = '<use href="#ico-volume"/>'; };

  const togglePlay = () => video.paused ? video.play() : video.pause();

  video.addEventListener('play', () => {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setPlayIcon();
  });
  video.addEventListener('pause', () => {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    setPauseIcon();
  });
  video.addEventListener('timeupdate', () => {
    const p = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    progressFill.style.width = p + '%';
    currentTimeEl.textContent = fmt(video.currentTime);
  });
  video.addEventListener('loadedmetadata', () => {
    durationEl.textContent = fmt(video.duration);
  });

  bigPlayBtn.addEventListener('click', togglePlay);
  playPauseBtn.addEventListener('click', togglePlay);

  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    video.muted ? setMuteIcon() : setVolIcon();
  });

  fullscreenBtn.addEventListener('click', () => {
    const el = document.querySelector('.video-player');
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  });

  progressBar.addEventListener('click', e => {
    const r = progressBar.getBoundingClientRect();
    video.currentTime = ((e.clientX - r.left) / r.width) * video.duration;
  });
}

/* ── Contact Form ────────────────────────────────────────────
   HOW TO ENABLE REAL EMAIL SENDING:
   1. Sign up free at https://emailjs.com
   2. Create an Email Service → copy Service ID
   3. Create an Email Template with variables:
      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
      → copy Template ID
   4. Account → copy Public Key
   5. Replace the three values below
   ──────────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = 'WfEFXG-uH6eloFg1E';
const EMAILJS_SERVICE_ID  = 'service_st7levs';
const EMAILJS_TEMPLATE_ID = 'template_ynu4zll';

const emailJSConfigured = (
  EMAILJS_PUBLIC_KEY.trim()  !== '' &&
  EMAILJS_SERVICE_ID.trim()  !== '' &&
  EMAILJS_TEMPLATE_ID.trim() !== ''
);

if (emailJSConfigured && typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');
const submitBtn   = document.getElementById('submitBtn');
const submitIcon  = document.getElementById('submitIcon');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fname   = document.getElementById('fname').value.trim();
    const lname   = document.getElementById('lname').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fname || !email || !message) {
      showStatus('Please fill in all required fields (First Name, Email, Message).', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Fallback: open mail client if EmailJS not configured
    if (!emailJSConfigured || typeof emailjs === 'undefined') {
      const mailSubject = encodeURIComponent(subject || `Portfolio Contact from ${fname} ${lname}`.trim());
      const mailBody    = encodeURIComponent(`Name: ${fname} ${lname}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:ariyasinghekanchana@gmail.com?subject=${mailSubject}&body=${mailBody}`;
      showStatus('Your mail client has been opened with the message pre-filled. Please send it from there.', 'success');
      return;
    }

    // Send via EmailJS
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending… <svg class="btn-icon" style="animation:spin 1s linear infinite"><use href="#ico-spinner"/></svg>';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  `${fname} ${lname}`.trim(),
      from_email: email,
      subject:    subject || 'No subject',
      message:    message,
      reply_to:   email
    })
    .then(() => {
      showStatus('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
      contactForm.reset();
    })
    .catch(err => {
      console.error('EmailJS error:', err);
      showStatus('Something went wrong. Please email me directly at ariyasinghekanchana@gmail.com', 'error');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <svg class="btn-icon"><use href="#ico-send"/></svg>';
    });
  });
}

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = 'form-status ' + type;
  formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  setTimeout(() => { formStatus.className = 'form-status'; }, 8000);
}

/* spinner keyframe via JS (avoids a CSS-only dependency) */
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);