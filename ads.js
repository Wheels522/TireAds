// Function to fetch ads from ads.json
async function fetchAds() {
  const response = await fetch('ads.json');
  const ads = await response.json();
  return ads;
}

// Function to select a random ad
function getRandomAd(ads) {
  const randomIndex = Math.floor(Math.random() * ads.length);
  return ads[randomIndex];
}

// Function to create the popunder ad element
function createPopunderAd(ad) {
  const popunderAd = document.createElement('div');
  popunderAd.id = 'popunder-ad';
  popunderAd.style.position = 'fixed';
  popunderAd.style.bottom = '-150px'; // Adjust the initial bottom position to reflect the new height
  popunderAd.style.left = '0';
  popunderAd.style.right = '0';
  popunderAd.style.backgroundColor = '#000000';
  popunderAd.style.borderRadius = '20px';
  popunderAd.style.zIndex = '9999';
  popunderAd.style.overflow = 'hidden';
  popunderAd.style.transition = 'bottom 0.5s ease';
  popunderAd.innerHTML = `
    <div style="display: flex; align-items: center; height: 100%;">
      <a href="${ad.url}" target="_blank" style="flex: 1;">
        <img src="${ad.image}" style="max-height: 200px; width: 100%; border-radius: 20px 0 0 20px;">
      </a>
      <div style="flex: 2; padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <a href="${ad.url}" target="_blank" style="text-decoration: none; color: inherit;">
          <h1 style="color: grey; font-size: 30px;">${ad.title}</h1>
        </a>
        <p style="font-size: 20px; color: grey;">${ad.description}</p>
        <button onclick="closePopunderAd()" style="color: #ffffff; background-color: #333333; border: none; padding: 10px 20px; border-radius: 10px;">Close</button>
      </div>
    </div>`;
  return popunderAd;
}

// Function to close the popunder ad
function closePopunderAd() {
  const popunderAd = document.getElementById('popunder-ad');
  if (popunderAd) {
    popunderAd.style.bottom = '-150px'; // Slide the ad back down
    setTimeout(() => {
      popunderAd.remove(); // Remove the ad after the animation completes
    }, 500); // Wait for the animation duration
  }
}

// Function to handle popunder when page is loaded
async function handlePopunder() {
  const ads = await fetchAds();
  const selectedAd = getRandomAd(ads);
  const popunderAd = createPopunderAd(selectedAd);
  
  // Append the popunder ad element to the document body
  document.body.appendChild(popunderAd);
  // Slide the ad up by changing its bottom position
  setTimeout(() => {
    popunderAd.style.bottom = '0';
  }, 100); // Wait for a brief moment before sliding up
}

// Call the function to handle popunder when the page is loaded
window.addEventListener('load', handlePopunder);
