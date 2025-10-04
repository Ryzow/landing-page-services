// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// WhatsApp Message Templates
const whatsappTemplates = {
  basic: `Halo Sastra! Saya tertarik dengan paket Landing Page Basic (Rp 139.000)

Berikut detail yang saya butuhkan:
- 1 Halaman Website
- Design Responsif
- Optimasi SEO Dasar
- Form Kontak
- Revisi 2x

Bisa diskusi lebih lanjut?`,

  pro: `Halo Sastra! Saya tertarik dengan paket Landing Page Pro (Rp 219.000)

Berikut detail yang saya butuhkan:
- 1 Halaman Website
- Design Custom
- Optimasi SEO Lengkap
- Integrasi WhatsApp & Email
- Revisi 5x
- Support 1 Bulan

Bisa diskusi lebih lanjut?`,

  premium: `Halo Sastra! Saya tertarik dengan paket Landing Page Premium (Rp 300.000)

Berikut detail yang saya butuhkan:
- Hingga 3 Halaman
- Design Premium Custom
- Advanced SEO
- Integrasi Media Sosial
- Revisi Unlimited
- Support 3 Bulan

Bisa diskusi lebih lanjut?`,

  general: `Halo Sastra! Saya tertarik dengan jasa pembuatan landing page Anda.

Bisa info lebih detail tentang:
- Proses pengerjaan
- Timeline penyelesaian
- Teknologi yang digunakan
- Contoh portfolio

Terima kasih!`,
};

// Handle WhatsApp buttons with data-package attribute
document.querySelectorAll(".wa-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const packageType = this.getAttribute("data-package");
    const message = whatsappTemplates[packageType] || whatsappTemplates.general;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6283177756720?text=${encodedMessage}`, "_blank");
  });
});

// Handle CTA buttons
document.querySelectorAll(".cta-wa").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const message = `Halo Sastra! Saya ingin berkonsultasi tentang pembuatan landing page untuk bisnis saya.

Bisa info lebih detail tentang:
- Proses pengerjaan
- Timeline
- Teknologi yang digunakan

Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6283177756720?text=${encodedMessage}`, "_blank");
  });
});

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    if (name && email && message) {
      const whatsappMessage = `Halo Sastra!

Nama: ${name}
Email: ${email}

Pesan:
${message}

Saya ingin berkonsultasi tentang pembuatan landing page.`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/6283177756720?text=${encodedMessage}`,
        "_blank"
      );

      this.reset();
      alert("Pesan berhasil dikirim! Anda akan diarahkan ke WhatsApp.");
    } else {
      alert("Harap lengkapi semua field!");
    }
  });

// Scroll animation
function checkScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("bg-white", "shadow-lg");
  } else {
    nav.classList.remove("bg-white", "shadow-lg");
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Skip for WhatsApp links and buttons with specific classes
    if (
      this.getAttribute("href").includes("wa.me") ||
      this.classList.contains("wa-button") ||
      this.classList.contains("cta-wa")
    ) {
      return;
    }

    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
