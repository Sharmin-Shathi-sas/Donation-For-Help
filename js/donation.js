const cashAmountText = document.querySelector('#cash-amount');
let cashAmount = parseFloat(cashAmountText.innerText);

const container = document.querySelector('#container');
const sections = container.querySelectorAll('.donation-section');

const modal = document.getElementById('success-modal');
const closeModalButton = document.getElementById('close-modal');

function showModal() {
    modal.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
}

for (let i = 0; i < sections.length; i++) {
    let button = sections[i].querySelector('.donate-btn');
    button.addEventListener('click', function () {
        const inputBalance = sections[i].querySelector('.donation-amount');
        const donationAmount = parseFloat(inputBalance.value);

        const initialAmountText = sections[i].querySelector('.initial-amount');
        const initialAmount = parseFloat(initialAmountText.innerText);

        if (donationAmount > 0 && cashAmount >= donationAmount) {
            const donateTk = donationAmount + initialAmount;
            initialAmountText.innerText = donateTk;

            cashAmount -= donationAmount;
            cashAmountText.innerText = cashAmount;

            showModal();
            inputBalance.value = '';
        }
        else {
            alert('Invalid amount or insufficient balance');
        }
    });
}

closeModalButton.addEventListener('click', hideModal);
