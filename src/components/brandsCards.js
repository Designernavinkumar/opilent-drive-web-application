const brandLogos = [
  { imgUrl: '/src/img/logo-1-rollsraise.png', imgArt: 'logo-1' },
  { imgUrl: '/src/img/logo-2-land-rover.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-3-mb.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-4-bmw.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-5-bugati.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-6.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-7-lanborgani.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-8-farari.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-9-audi.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-10-jaguar.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-11-mini.png', imgArt: 'logo-2' },
  { imgUrl: '/src/img/logo-12.png', imgArt: 'logo-2' },
];

function validateScreenSize() {
  const width = window.innerWidth;
  let maxLogos = 4; // Default for mobile

  if (width > 1200) {
    maxLogos = 12; // Desktop
  } else if (width > 768) {
    maxLogos = 6; // Tablet
  }

  const validLogos = brandLogos.slice(0, maxLogos);

  const container = document.querySelector('#papular-brands .flex-wrap');
  container.innerHTML = ''; // Clear existing content

  validLogos.forEach((logo) => {
    container.innerHTML += `
      <div class="p-2 sm:p-[10px] md:p-3 w-[220px]  h-[100px] flex justify-center border-[1px] border-Gray-3 items-center rounded-xl">
        <img class="w-[100px]  h-[100px] object-contain p-4" src="${logo.imgUrl}" alt="${logo.imgUrl}">
      </div>
    `;
  });
}

// Add event listener for resize
window.addEventListener('resize', validateScreenSize);

// Initial render
validateScreenSize();
