const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".menu-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

document.querySelector(".booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Table Requested";
  setTimeout(() => {
    button.textContent = "Reserve Table";
  }, 1800);
});

// linking Emailjs

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    guests: document.getElementById("guests").value,
    time: document.getElementById("time").value + " " +
        document.getElementById("am-pm").value
  };
  // to print labels
  console.log("Name:", parms.name);
  console.log("Guests:", parms.guests);
  console.log("Time:", parms.time);

  emailjs.send("service_nlh8haj", "template_qszs0pp", parms)
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send email.");
    });
}