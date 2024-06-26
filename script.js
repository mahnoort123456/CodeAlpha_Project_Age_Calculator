document.getElementById('ageCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const day = document.getElementById('date').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
});

