const data = {
    datasets: [{
        data: [10, 90], // Used Storage is now 10%, Remaining Storage is 90%
        backgroundColor: [
            '#424fc1', // Used Storage color
            '#9ecde1', // Remaining Storage color
        ],
    }],
};

// Chart configuration
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'left', // Set the legend position to left
            align: 'start',   // Align the legend to the start (left)
        },
    }
};

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create a new pie chart
const storageChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options,
});