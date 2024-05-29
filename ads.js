  // Create the popunder ad element
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
      <img src="https://edu-vita.vercel.app/img/UB.png" style="max-height: 200px; flex: 1; border-radius: 20px 0 0 20px;">
      <div style="flex: 2; padding: 20px; font-family: arial; text-align: center;">
        <h1 style="color: grey; font-size: 30px;">TireUnblocker</h1>
        <p style="font-size: 20px; color: grey;">A web proxy that uses uv so you can search the web privately!</p>
        <button onclick="closePopunderAd()" style="color: #ffffff; background-color: #333333; border: none; padding: 10px 20px; border-radius: 10px;">Close</button>
      </div>
    </div>`;

  // Function to close the popunder ad
  function closePopunderAd() {
    popunderAd.style.bottom = '-150px'; // Slide the ad back down
    setTimeout(() => {
      popunderAd.remove(); // Remove the ad after the animation completes
    }, 500); // Wait for the animation duration
  }

  // Function to handle popunder when page is loaded
  function handlePopunder() {
    // Append the popunder ad element to the document body
    document.body.appendChild(popunderAd);
    // Slide the ad up by changing its bottom position
    setTimeout(() => {
      popunderAd.style.bottom = '0';
    }, 100); // Wait for a brief moment before sliding up
  }

  // Call the function to handle popunder when the page is loaded
  window.addEventListener('load', handlePopunder);
