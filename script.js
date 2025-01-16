function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

function filterProjects(category) {
  var projects = document.getElementsByClassName("project-card");

  for (var i = 0; i < projects.length; i++) {
    if (
      category === "all" ||
      projects[i].getAttribute("data-category") === category
    ) {
      projects[i].style.display = "block";
    } else {
      projects[i].style.display = "none";
    }
  }
}

// Open the lightbox
function openLightbox(imgSrc) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "block";
  lightboxImg.src = imgSrc;
}

// Close the lightbox
function closeLightbox() {
  var lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Contact form validation
console.log("form-validation.js loaded successfully!");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      console.log("Validation failed: Missing fields");
      return;
    }

    // Custom validation for email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      console.log("Validation failed: Invalid email");
      return;
    }

    alert("Validation successful! Form submitted.");
    this.submit(); // Manually submit the form if everything is valid
    console.log("Validation successful: Form submitted");
  });

document.getElementById("name").addEventListener("input", function () {
  const name = document.getElementById("name").value;
  console.log(`Name input: ${name}`);
  if (!name) {
    document.getElementById("name").style.borderColor = "red";
  } else {
    document.getElementById("name").style.borderColor = "";
  }
});

document.getElementById("email").addEventListener("input", function () {
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(`Email input: ${email}`);
  if (!emailPattern.test(email)) {
    document.getElementById("email").style.borderColor = "red";
  } else {
    document.getElementById("email").style.borderColor = "";
  }
});

document.getElementById("message").addEventListener("input", function () {
  const message = document.getElementById("message").value;
  console.log(`Message input: ${message}`);
  if (!message) {
    document.getElementById("message").style.borderColor = "red";
  } else {
    document.getElementById("message").style.borderColor = "";
  }
});
