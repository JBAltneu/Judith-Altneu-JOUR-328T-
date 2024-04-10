var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Region of the world',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [ '#1745D3' ]
        },  
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP per capita in different regions of the world.',
                font: {
                    size: 24,
                }
            },
            subtitle: {
                display: true,
                text: 'Europe and Central Asia had the largest GDP per capita earning over $20,000. South Asia had the smallest GDP per capita.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'GDP per Capita', 
                  font: {
                    size: 16,
                  }
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Region of the world',
                      font: {
                        size: 16,
                      }
                  }
              }
        },
    },
});