document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.button-container').addEventListener('click', async function(event) {
    // Check if the clicked element is a button
    if (event.target.tagName.toLowerCase() === 'button') {
      // Check if the clicked button is the second button
      if (event.target.id === 'secondButton') {
        // Check if MetaMask is installed
        if (window.ethereum) {
          try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('MetaMask is connected!');
          } catch (error) {
            console.error('Error connecting to MetaMask:', error.message);
          }
        } else {
          console.error('MetaMask is not installed');
        }
      }
    }
  });
});
