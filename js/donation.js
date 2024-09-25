const cashAmountText = document.querySelector('#cash-amount');
let cashAmount = parseFloat(cashAmountText.innerText);

const container = document.querySelector('#container');
const historyContainer = document.getElementById('history-container');
const sections = container.querySelectorAll('.donation-section');

const modal = document.getElementById('success-modal');
const closeModalButton = document.getElementById('close-modal');

function showModal() {
    modal.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
}

let lastDonation = 0;

for (let i = 0; i < sections.length; i++) {
    let button = sections[i].querySelector('.donate-btn');
    button.addEventListener('click', function () {
        const inputBalance = sections[i].querySelector('.donation-amount');
        const donationAmount = parseFloat(inputBalance.value);

        const initialAmountText = sections[i].querySelector('.initial-amount');
        const initialAmount = parseFloat(initialAmountText.innerText);

        if (donationAmount > 0 && cashAmount >= donationAmount) {
            lastDonation = donationAmount;  // Store the donation amount
            const donateTk = donationAmount + initialAmount;
            initialAmountText.innerText = donateTk;

            cashAmount -= donationAmount;
            cashAmountText.innerText = cashAmount;

            showModal();
            inputBalance.value = '';
        } else {
            alert('Invalid amount or insufficient balance');
        }
    });
}

closeModalButton.addEventListener('click', hideModal);


// History tab functionality
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

function toggleButton(activeButton, inactiveButton) {
    activeButton.classList.add('bg-[#B4F461]');
    activeButton.classList.remove('border-2', 'border-stone-300');
    inactiveButton.classList.remove('bg-[#B4F461]');
    inactiveButton.classList.add('border-2', 'border-stone-300');
}

function toggleContainer(activeContainer, inactiveContainer) {
    activeContainer.classList.remove('hidden');
    inactiveContainer.classList.add('hidden');
}

donationButton.addEventListener('click', function () {
    toggleButton(donationButton, historyButton);
    toggleContainer(container, historyContainer);
});

historyButton.addEventListener('click', function () {
    toggleButton(historyButton, donationButton);
    toggleContainer(historyContainer, container);

    const historyDetails = document.createElement('div');
    historyDetails.classList.add('p-4', 'rounded-md', 'border-2', 'border-stone-300');
    // Use backticks for template literals and correct historyDetails.innerHTML
    historyDetails.innerHTML = `<p>Last donation: ${lastDonation} BDT ${new Date()}</p>`;

    console.log(lastDonation);  // Log last donation amount
    historyContainer.insertBefore(historyDetails, historyContainer.firstChild);  // Insert the history at the top
});

document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href ='./html/blog.html';
    console.log('jghf');
})