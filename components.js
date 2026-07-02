// ===== Terryden Agencies — Shared Components =====

const NAVBAR_HTML = `
<nav class="fixed top-0 w-full bg-white/95 backdrop-blur shadow-md z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <a href="index.html" class="flex items-center">
        <img src="logo.png" alt="Terryden Agencies" class="h-12 sm:h-14 w-auto object-contain">
      </a>
      <div class="hidden lg:flex items-center space-x-8">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="services.html" class="nav-link">Services</a>
        <a href="industries.html" class="nav-link">Industries</a>
        <a href="tenders.html" class="nav-link">Tenders</a>
        <a href="careers.html" class="nav-link">Careers</a>
        <a href="portal.html" class="nav-link">Client Portal</a>
        <a href="contact.html" class="bg-brandGold hover:bg-yellow-600 text-brandNavy font-semibold px-5 py-2.5 rounded-lg transition">Get a Quote</a>
      </div>
      <button id="menuBtn" class="lg:hidden text-brandNavy focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div id="mobileMenu" class="hidden lg:hidden pb-4 space-y-2">
      <a href="index.html" class="block nav-link-mobile">Home</a>
      <a href="about.html" class="block nav-link-mobile">About</a>
      <a href="services.html" class="block nav-link-mobile">Services</a>
      <a href="industries.html" class="block nav-link-mobile">Industries</a>
      <a href="tenders.html" class="block nav-link-mobile">Tenders</a>
      <a href="careers.html" class="block nav-link-mobile">Careers</a>
      <a href="portal.html" class="block nav-link-mobile">Client Portal</a>
      <a href="contact.html" class="block bg-brandGold text-brandNavy font-semibold px-4 py-2 rounded-lg text-center mt-2">Get a Quote</a>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="bg-brandNavy text-gray-300 pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
    <div>
      <div class="bg-white inline-block rounded-lg p-3 mb-4">
        <img src="logo.png" alt="Terryden Agencies" class="h-10 w-auto object-contain">
      </div>
      <p class="text-sm leading-relaxed">Connecting Opportunities, Empowering Growth. A trusted agency partner for recruitment, procurement, consulting and business representation across East Africa.</p>
      <div class="flex space-x-4 mt-5">
        <a href="#" class="social-icon">FB</a>
        <a href="#" class="social-icon">LN</a>
        <a href="#" class="social-icon">IG</a>
        <a href="#" class="social-icon">TW</a>
      </div>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-4">Quick Links</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="about.html" class="hover:text-brandGold">About Us</a></li>
        <li><a href="services.html" class="hover:text-brandGold">Services</a></li>
        <li><a href="industries.html" class="hover:text-brandGold">Industries Served</a></li>
        <li><a href="careers.html" class="hover:text-brandGold">Careers</a></li>
        <li><a href="tenders.html" class="hover:text-brandGold">Tender Opportunities</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-4">Services</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="services.html#recruitment" class="hover:text-brandGold">Recruitment & Manpower</a></li>
        <li><a href="services.html#agency" class="hover:text-brandGold">Business Agency</a></li>
        <li><a href="services.html#procurement" class="hover:text-brandGold">Procurement & Supply Chain</a></li>
        <li><a href="services.html#consulting" class="hover:text-brandGold">Consulting & Advisory</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-4">Contact Us</h4>
      <ul class="space-y-2 text-sm">
        <li>DT Ports Sacco, 2nd Floor, Mwakilunge Road, Mombasa, Kenya</li>
        <li>+254 738 372 262</li>
        <li>terrydenagencies@gmail.com</li>
        <li>info@terrydenagencies.com</li>
      </ul>
      <form class="mt-4 flex" onsubmit="event.preventDefault(); alert('Subscribed! (demo only)');">
        <input type="email" required placeholder="Newsletter email" class="flex-1 px-3 py-2 rounded-l-lg text-sm text-gray-800 focus:outline-none">
        <button class="bg-brandGold text-brandNavy px-4 rounded-r-lg font-semibold text-sm">Join</button>
      </form>
    </div>
  </div>
  <div class="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-400">
    © <span id="year"></span> Terryden Agencies. All rights reserved. | Dealers in Construction, Solid Waste Management, Research & Consultancy, General Supplies.
  </div>
</footer>`;

const WHATSAPP_HTML = `
<a href="https://wa.me/254738372262" target="_blank"
   class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.06h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.09.81.83-3.01-.19-.31a8.1 8.1 0 0 1-1.24-4.33c0-4.48 3.65-8.13 8.15-8.13 2.17 0 4.21.85 5.75 2.39a8.07 8.07 0 0 1 2.38 5.75c0 4.48-3.65 8.14-8.14 8.14zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.22.24-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
  </svg>
</a>`;

document.addEventListener('DOMContentLoaded', () => {
  const navSlot = document.getElementById('navbar-slot');
  const footSlot = document.getElementById('footer-slot');
  if (navSlot) navSlot.innerHTML = NAVBAR_HTML;
  if (footSlot) footSlot.innerHTML = FOOTER_HTML;
  document.body.insertAdjacentHTML('beforeend', WHATSAPP_HTML);

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn) menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const searchInput = document.getElementById('siteSearch');
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        alert('Searching for: "' + searchInput.value + '" — connect this to a real search API/backend.');
      }
    });
  }
});
