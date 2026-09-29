gsap.registerPlugin(ScrollTrigger);

// 1. Mouse Follower Cursor
const cursor = document.getElementById("cursor");
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out",
  });
});

// Function for Entrance Sequence
function startAnimations() {
  const tl = gsap.timeline();

  tl.from(".navbar", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(".classic-badge", {
    opacity: 0,
    y: 15,
    duration: 0.5,
  }, "-=0.3")
  .from(".headline .word", {
    y: 35,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  }, "-=0.3")
  .from(".gold-divider", {
    scaleX: 0,
    duration: 0.6,
    ease: "power2.inOut",
  }, "-=0.4")
  .from(".subline", {
    y: 20,
    opacity: 0,
    duration: 0.5,
  }, "-=0.4")
  .from(".metric-card", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
    onComplete: startCounters
  }, "-=0.3")
  
  // CAR RACE ENTRANCE ANIMATION
  // Screen-ku veliye irundhu speed-a race aagi ulle varum
  .fromTo("#visual-frame", 
    {
      x: "100vw",       // Screen outer right position
      skewX: -20,       // Speed tilt effect
      scale: 0.6,
      opacity: 0
    },
    {
      x: "0vw",         // Exact center position
      skewX: 0,
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out" // Rapid deceleration (braking) effect
    }, 
    "-=0.4"
  );
}

// Ensure Page & Images are completely loaded
window.addEventListener("load", startAnimations);

// 3. Counter Animation
function startCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    gsap.to(counter, {
      innerText: target,
      duration: 1.8,
      snap: { innerText: 1 },
      ease: "power1.out"
    });
  });
}

// 4. Interactive 3D Hover Effect on Image Frame
const visualFrame = document.getElementById("visual-frame");
if (visualFrame) {
  visualFrame.addEventListener("mousemove", (e) => {
    const rect = visualFrame.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(visualFrame, {
      rotationY: x * 0.04,
      rotationX: -y * 0.04,
      duration: 0.3,
      ease: "power1.out"
    });
  });

  visualFrame.addEventListener("mouseleave", () => {
    gsap.to(visualFrame, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
}

// 5. Scroll Motion Effect
gsap.to("#animated-car", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.2,
  },
  scale: 1.15,
  y: 60,
  ease: "none",
});

// 6. Section Reveal
gsap.from(".reveal-text", {
  scrollTrigger: {
    trigger: ".next-section",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});