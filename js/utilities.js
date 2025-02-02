function handleDonation(inputId) {
    console.log('Donation event triggered');

    const inputValue = document.getElementById(inputId).value;
    const inputValueNumber = parseFloat(inputValue);

    if (inputValueNumber > 0 && inputValueNumber <= 5500) {
        const navP5500 = document.getElementById('nav-p-5500').innerText;
        const navP5500Number = parseFloat(navP5500);
        const remainingBalance = navP5500Number - inputValueNumber;

        document.getElementById('nav-p-5500').innerText = remainingBalance + " BDT";
        generateDonationHistory(inputId, inputValueNumber);

        // Show the modal
        document.getElementById('donationModal').classList.remove('hidden');
    } else {
        alert('Something wrong');
    }
}

// Close Modal Button Functionality
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('donationModal').classList.add('hidden');
});


function generateDonationHistory(id, amount) {
    const div = document.createElement('div');
    
    // Get current date
    const currentDate = new Date().toLocaleDateString();

    let message = '';
    if (id == 'input-noakhali') {
        message = `${amount} Taka is Donated for Famine-2024 in Noakhali, Bangladesh`;
    } else if (id == 'input-quota') {
        message = `${amount} Taka is Donated for Flood Relief in Quota, Bangladesh`;
    } else {
        message = `${amount} Taka is Donated for Flood Relief in Feni, Bangladesh`;
    }

    // Set the content with donation amount and current date
    div.innerHTML = `
        <h3 class="text-2xl font-bold">${message}</h3>
        <p class="text-sm text-gray-500">Donation Date: ${currentDate}</p>
    `;

    // Add border to donation entry
    div.classList.add('border', 'border-gray-300', 'p-3', 'rounded-lg', 'mb-2', 'w-full');


    // Append the new donation history to the container
    const historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(div);

    // Optionally, clear the input field after donation
    document.getElementById(id).value = "";
}
