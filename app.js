// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. NAVBAR SLIDE-IN ANIMATION
  // Animate navbar sliding in from top on page load
  const navbar = document.querySelector('.navbar');
  gsap.set(navbar, { y: -100, opacity: 0 });
  
  gsap.to(navbar, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });

  // 2. HERO SECTION ANIMATIONS
  // Animate headline words with staggered entrance
  const headlineWords = document.querySelectorAll('.wave-word');
  gsap.set(headlineWords, { y: 50, opacity: 0 });
  
  gsap.to(headlineWords, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out(1.7)",
    delay: 0.8
  });

  // Animate tagline
  const tagline = document.querySelector('.tagline');
  gsap.set(tagline, { y: 30, opacity: 0 });
  
  gsap.to(tagline, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 1.5
  });

  // Animate hero CTA button
  const heroBtn = document.querySelector('.hero .cta-btn');
  gsap.set(heroBtn, { scale: 0.8, opacity: 0 });
  
  gsap.to(heroBtn, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 2
  });

  // Animate CTA section button
  const ctaBtn = document.querySelector('.cta .cta-btn');
  if (ctaBtn) {
    gsap.set(ctaBtn, { scale: 0.8, opacity: 0 });
    
    gsap.to(ctaBtn, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 2.5
    });
  }

  // 3. BUTTON HOVER PULSE ANIMATIONS
  // Add pulse effect to all CTA buttons on hover
  const allButtons = document.querySelectorAll('.cta-btn');
  
  allButtons.forEach(button => {
    // Create a timeline for hover animation
    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl.to(button, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out"
    })
    .to(button, {
      scale: 1.1,
      duration: 0.15,
      ease: "power2.out"
    })
    .to(button, {
      scale: 1.05,
      duration: 0.1,
      ease: "power2.out"
    });

    // Add hover event listeners
    button.addEventListener('mouseenter', () => {
      hoverTl.play();
    });
    
    button.addEventListener('mouseleave', () => {
      hoverTl.reverse();
    });
  });

  // 4. SCROLL-TRIGGERED FADE-INS
  // Features section animation
  gsap.fromTo('.features', 
    {
      y: 60,
      opacity: 0,
      scale: 0.95
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.features',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Animate features list items with stagger
  gsap.fromTo('.features li', 
    {
      x: -50,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.features',
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Testimonials section animation
  gsap.fromTo('.testimonials', 
    {
      y: 60,
      opacity: 0,
      scale: 0.95
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.testimonials',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Animate testimonial quotes with stagger
  gsap.fromTo('.testimonials .quote', 
    {
      y: 40,
      opacity: 0,
      scale: 0.9
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '.testimonials',
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // CTA section animation
  gsap.fromTo('.cta', 
    {
      y: 60,
      opacity: 0,
      scale: 0.95
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.cta',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // 5. ENHANCED INTERACTIVE ANIMATIONS
  // Add subtle floating animation to the logo
  gsap.to('.orbit-animated', {
    y: -5,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });

  // Add parallax effect to stars background
  gsap.to('.stars', {
    y: -100,
    duration: 20,
    ease: "none",
    repeat: -1,
    yoyo: true
  });

  // 6. FEATURES LIST ITEM HOVER ANIMATIONS
  const featureItems = document.querySelectorAll('.features li');
  
  featureItems.forEach(item => {
    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl.to(item, {
      scale: 1.02,
      y: -5,
      duration: 0.3,
      ease: "power2.out"
    });

    item.addEventListener('mouseenter', () => {
      hoverTl.play();
    });
    
    item.addEventListener('mouseleave', () => {
      hoverTl.reverse();
    });
  });

  // 7. TESTIMONIAL QUOTE HOVER ANIMATIONS
  const testimonialQuotes = document.querySelectorAll('.testimonials .quote');
  
  testimonialQuotes.forEach(quote => {
    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl.to(quote, {
      scale: 1.02,
      y: -3,
      duration: 0.3,
      ease: "power2.out"
    });

    quote.addEventListener('mouseenter', () => {
      hoverTl.play();
    });
    
    quote.addEventListener('mouseleave', () => {
      hoverTl.reverse();
    });
  });

  // 8. SMOOTH SCROLL BEHAVIOR
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: target, offsetY: 100 },
          ease: "power2.inOut"
        });
      }
    });
  });

  console.log('🎬 DreamOrbit animations loaded successfully!');
  
  // Debug: Check if CTA button exists
  const ctaButton = document.querySelector('.cta .cta-btn');
  console.log('CTA Button found:', ctaButton);
  if (ctaButton) {
    console.log('CTA Button styles:', window.getComputedStyle(ctaButton));
  }
});

// Optional: Add loading animation
window.addEventListener('load', function() {
  // Fade in the entire page
  gsap.to('body', {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  });
}); 