var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Gold',
              'Silver',
              'Bronze',
            ],
            datasets: [{
              label: 'Total number of medals',
              data: [39, 41,33],
              backgroundColor: [
                '#FFD700',
                '#C0C0C0',
                '#926E19',
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'United States total Olympic medals from the 2020 Olympics',
              },
              subtitle: {
                display: true,
                text: ''
        },
       
            }
          }
        });