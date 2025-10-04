const all_disp = ['opening', 'notes', 'support', 'about', '1', '2'];

for (let i = 0; i < all_disp.length; i++) {
    if (i != 0) {
        document.getElementById(all_disp[i]).style.display = 'none';
    }
    else {
        document.getElementById(all_disp[i]).style.display = 'block';
    }
}

function sem() {
    document.getElementById('2').style.display = 'none';
    document.getElementById('1').style.display = 'none';
}

function imp() {
    for (let i = 0; i < all_disp.length; i++) {
        document.getElementById(all_disp[i]).style.display = 'none';
    }
}

function GN() {
    imp();
    document.getElementById('notes').style.display = 'flex';
}
function home() {
    imp();
    document.getElementById('opening').style.display = 'block';
}
function support() {
    imp();
    document.getElementById('support').style.display = 'block';
}
function UM() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdspymPcrBGUSy1tgBswCoYX20VODcR-yXmbCeUiUdiqBrW3g/viewform?usp=header", "_blank");
}
function about() {
    imp();
    document.getElementById('about').style.display = 'block';
}

const mySelect = document.getElementById('semester');
const mySelectB = document.getElementById('branches');

mySelect.addEventListener('change', function () {
    const selectedValue = mySelect.value;
    if (mySelect.value === '1') {
        sem()
        document.getElementById('1').style.display = 'inline-block';
    }
    else if (mySelect.value === '2') {
        sem()
        document.getElementById('2').style.display = 'inline-block';
    }
    else {
        sem()
    }
});


const unitsContainers = document.querySelectorAll('.units').forEach(unit => {
    unit.parentElement.style.display = 'none';
});

function hide() {
    const unitsContainers = document.querySelectorAll('.units').forEach(unit => {
        unit.parentElement.style.display = 'none';

    });
}
document.querySelectorAll('.subcard').forEach(card => {
    card.addEventListener('click', function () {
        if (card.style.background === 'gray') {
            hide();
            card.style.background = 'black';
        } else {
            hide();
            document.querySelectorAll('.subcard').forEach(c => {
                c.style.background = 'black';
            });
            card.style.background = 'gray';
            
            const subjectId = card.id;
            let unitsId = subjectId.toUpperCase();
            let unitsDiv = document.getElementById(unitsId);
            if (unitsDiv) {
                unitsDiv.style.display = 'block';
            }
        }
    });
});

document.querySelectorAll('.units').forEach(unit => {
    unit.addEventListener('click', function () {
        const selectedSubcard = document.querySelector('.subcard[style*="gray"]');
        if (selectedSubcard && mySelect.value) {
            const subjectId = selectedSubcard.id;
            const href = mySelect.value + '/' + subjectId + '/' + unit.innerText + '.pdf';
            window.open(href, "_blank");
        }
    });
});