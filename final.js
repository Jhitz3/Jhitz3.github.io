document.getElementById('plantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const plantType = document.getElementById('plantType').value;
    const plantSpot = document.getElementById('plantSpot');

    // Store plant type in localStorage
    localStorage.setItem('plantType', plantType);

    // Show initial plant
    plantSpot.style.backgroundImage = plantType === 'flower' ? 'url(flower.png)' : 'url(tree.png)';
});

document.getElementById('waterBtn').addEventListener('click', function() {
    const plantSpot = document.getElementById('plantSpot');
    plantSpot.classList.add('grown');
});
