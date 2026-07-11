let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider");
const totalSlides = slides.length;

// Function to Show Slide with Smooth Transition
function showSlide(index) {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-index * 100}%)`;
    
    // Update Active Dot
    dots.forEach(dot => dot.classList.remove("active"));
    let activeIndex = index % totalSlides;
    dots[activeIndex].classList.add("active");
}

// Handle Transition End for Infinite Loop Effect
slider.addEventListener("transitionend", () => {
    if (slideIndex >= totalSlides) {
        slider.style.transition = "none";
        slideIndex = 0;
        slider.style.transform = `translateX(0%)`;
    }
});

// Manual Slide Navigation
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        setTimeout(() => {
            slider.style.transition = "none";
            slideIndex = 0;
            slider.style.transform = `translateX(0%)`;
        }, 700);
    }
    showSlide(slideIndex);
}

// Click Dots to Navigate
function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Auto Slide Every 3 Seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

// Set Initial Active Dot
dots[0].classList.add("active");

//code for sell on daraz dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("appDropdownBtn");
    const dropdownMenu = document.getElementById("appDropdownMenu");

    // Toggle dropdown on button click
    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents event bubbling
        dropdownMenu.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
        }
    });
});
//Login Form
document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeBtn = document.getElementById("closeModalBtn");
  
    const passwordTab = document.getElementById("passwordTab");
    const phoneTab = document.getElementById("phoneTab");
    const passwordForm = document.getElementById("passwordForm");
    const phoneForm = document.getElementById("phoneForm");
  
    // Open modal
    loginBtn.addEventListener("click", () => {
      loginModal.classList.remove("hidden");
      loginModal.classList.add("flex");
    });
  
    // Close modal
    closeBtn.addEventListener("click", () => {
      loginModal.classList.add("hidden");
    });
  
    // Switch to Password
    passwordTab.addEventListener("click", () => {
      passwordTab.classList.add("font-bold", "border-orange-500");
      passwordTab.classList.remove("text-gray-500");
      phoneTab.classList.remove("font-bold", "border-orange-500");
      phoneTab.classList.add("text-gray-500");
      passwordForm.classList.remove("hidden");
      phoneForm.classList.add("hidden");
    });

  
    // Switch to Phone
    phoneTab.addEventListener("click", () => {
      phoneTab.classList.add("font-bold", "border-orange-500");
      phoneTab.classList.remove("text-gray-500");
      passwordTab.classList.remove("font-bold", "border-orange-500");
      passwordTab.classList.add("text-gray-500");
      phoneForm.classList.remove("hidden");
      passwordForm.classList.add("hidden");
    });
  
    // Close on click outside modal
    loginModal.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.classList.add("hidden");
      }
    });
  });
   
// Toggle password visibility
document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
  
    if (togglePassword && passwordInput) {
      togglePassword.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.textContent = type === "password" ? "🙈" : "👁️";
      });
    }
  });

  //Sign up functionality
  const modal = document.getElementById('signupModal');
const signupBtn = document.getElementById('signupBtn');
const closeModal = document.getElementById('closeModal');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
});
//help and support functionality
// dropdown.js
document.addEventListener("DOMContentLoaded", function () {
  const helpBtn = document.getElementById("helpDropdownBtn");
  const helpMenu = document.getElementById("helpDropdownMenu");

  helpBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent closing immediately
    helpMenu.classList.toggle("hidden");
  });

  // Close dropdown on outside click
  document.addEventListener("click", function (e) {
    if (!helpMenu.contains(e.target) && !helpBtn.contains(e.target)) {
      helpMenu.classList.add("hidden");
    }
  });
});
//toggle Login and sign up form 
// Get references to modals
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

// Buttons & links
const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");

const closeLogin = document.getElementById("closeModalBtn");
const closeSignup = document.getElementById("closeModal");

// Show Signup, hide Login
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("hidden");
  signupModal.classList.remove("hidden");
});

// Show Login, hide Signup
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.classList.add("hidden");
  loginModal.classList.remove("hidden");
});

// Close Login Modal
closeLogin.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

// Close Signup Modal
closeSignup.addEventListener("click", () => {
  signupModal.classList.add("hidden");
});


 
 
  
  

  