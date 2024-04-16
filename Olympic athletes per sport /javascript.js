var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Athletics', 'Swimming', 'Soccer', 'Rowing', 'Hockey', 'Judo'],
        datasets: [{
            label: '# of athletes per sport',
            data: [2068, 743, 567, 496, 406, 373],
            backgroundColor: [
                '#ff0800'
            ]
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'The top 2020 Tokyo Olympic sports with the largest number of athletes',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Athletics (track and field) had the highest number of athletes at the Tokoyo Olympics with 1,000 more athletes than the next closest, swimming.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});