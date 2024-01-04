const data = {
    datasets: [{
    label: ['Visitor count'],
    data: [41, 29, 23, 4, 3],
    backgroundColor: [
        'rgba(184, 105, 200, 255)',
        'rgba(235, 65, 123, 255)',
        'rgba(237, 109, 0, 255)',
        'rgba(253, 216, 65, 255)',
        'rgba(102, 240, 172, 255)'
    ],
    borderColor: '#171e52',
    hoverOffset: 4,
    cutout: 120,
    radius: 110
    }]
};

// Chart configuration
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'left',
            align: 'center',
        }
    }
};

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create a new pie chart
const storageChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
});