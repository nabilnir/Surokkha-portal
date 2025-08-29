// Heart icon functionality

let heartCount = 0;

document.querySelectorAll(".heart-icon").forEach(heart => {
    heart.addEventListener("click", function (heartClick) {
        heartClick.stopPropagation();
        heartCount++;
        document.querySelector(".nav-btns div:first-child span").innerText = heartCount;
    });
});

// call btn functionality
function updateCoin() {
    navCoinCount.innerText = coinCount;
}

let coinCount = 100;
const navCoinCount = document.getElementById("coinCnt");

document.querySelectorAll(".call-button.btn").forEach(callRender => {
    callRender.addEventListener("click", function () {
        const card = this.closest('.service-card');
        const serviceName = card.querySelector('.card-head').innerText;
        const serviceNumber = card.querySelector('.number').innerText;
        const callTime = new Date().toLocaleTimeString();

        if (coinCount < 20) {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! পরবর্তী কল করার জন্য আপনার ২০ টি কয়েন লাগবে। ");
            return;
        }

        coinCount -= 20;
        updateCoin();

        // Make the actual phone call
        window.location.href = `tel:${serviceNumber}`;

        addToHistory(serviceName, serviceNumber, callTime);

        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile device - make actual call
            window.location.href = `tel:${serviceNumber}`;
        } else {
            // Desktop - show alert
            alert(`📞 Calling ${serviceName} ${serviceNumber}... (On a real mobile device, this would initiate the call)`);
        }
    });
});


//copy btn  functionality

function updateCopy() {
    navCopyCount.innerText = copyCount;
}

let copyCount = 0;
const navCopyCount = document.getElementById("copyCnt");

document.querySelectorAll(".copy-button").forEach(copy => {
    copy.addEventListener("click", function () {
        const card = this.closest('.service-card');
        const serviceNumber = card.querySelector('.number').innerText;

        alert(" 📋 নাম্বার কপি হয়েছে : " + serviceNumber);

        navigator.clipboard.writeText(serviceNumber).then(() => {
            copyCount++;
            updateCopy();
        })
    })
})


//history section fuctionality

let callHistory = [];

function addToHistory(name, number, time) {
    callHistory.push({ name, number, time });
    updateHistory();
}


let historyContainer = document.querySelector(".history-card-container");

function updateHistory() {

    historyContainer.innerHTML = '';

    // Add each call to history
    callHistory.forEach(call => {
        const historyCard = document.createElement('div');
        historyCard.className = 'history-card';

        historyCard.innerHTML = `
         <div class="history-card-parent">
                <div class="history-info">
                    <h1 class="histoy-title bn-font">${call.name}</h1>
                    <div class="history-sub-title">
                        <h3 class="history-num font-pri">${call.number}</h3>
                    </div>
                </div>
                <p class="time">${call.time}</p>
            </div>
         `;


        historyContainer.appendChild(historyCard);
    });
}

//clear btn functionality

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("historyContainer").innerHTML = '';
    callHistory = [];
})

// Simple animation for footer links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.footer-links a');

    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });
});