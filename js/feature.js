// History button click
document.getElementById('btn-history').addEventListener('click', function () {
    // Add the 'active' class to the History button and remove it from the Donation button
    document.getElementById('btn-history').style.backgroundColor = '#B4F461'; // Active color for history
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]'); // Remove active color from donation

    // Hide the donation sections
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.add('hidden');
    document.getElementById('section3').classList.add('hidden');

    // Show the history section
    const historySection = document.getElementById('History-section');
    historySection.classList.remove('hidden');
});

// Donation button click
document.getElementById('btn-donation').addEventListener('click', function () {
    // Add the 'active' class to the Donation button and remove it from the History button
    // Active color for donation
    document.getElementById('btn-history').style.backgroundColor = ''; 
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');

    // Show the donation sections
    document.getElementById('section1').classList.remove('hidden');
    document.getElementById('section2').classList.remove('hidden');
    document.getElementById('section3').classList.remove('hidden');

    // Hide the history section
    const historySection = document.getElementById('History-section');
    historySection.classList.add('hidden');
});
document.getElementById('btn-blog').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior (optional)
    
    // Redirect to blog.html
    window.location.href = "blog.html";
});

