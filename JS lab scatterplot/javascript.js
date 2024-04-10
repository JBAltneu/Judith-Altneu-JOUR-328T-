var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:3,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:3,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:3,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#7D1EAC",
                backgroundColor:"rgb(239, 227, 245)",
                borderWidth:3,
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#F3F348",
                backgroundColor:"rgb(250, 250, 186)",
                borderWidth:3,
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#CF0B0B",
                backgroundColor:"rgb(237, 164, 164)",
                borderWidth:3,
              }, {
              data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#B30689",
                backgroundColor:"rgb(236, 193, 226)",
                borderWidth:3,
              }, {
                data: [
                  {x: 81.1, y: 32193},
                  ],
                  label: "Japan",
                  borderColor: "#23543A",
                  backgroundColor:"rgb(173, 191, 181)",
                  borderWidth:3,
                }, {
                    data: [
                      {x: 65.8, y: 1632},
                      ],
                      label: "Bangladesh",
                      borderColor: "#3A1BB8",
                      backgroundColor:"rgb(206, 198, 237)",
                      borderWidth:3,
                    }
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Average Life Expectancy'
                  }
              }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Comparing average life expectancy to GDP per capita in the world\'s most populous countries',
                    font: {
                      size: 24,
                    }
                  }, 
                 subtitle: {
                        display: true,
                        text: 'Japan has the largest average life expectancy at 81.1 years. The United States has the highest GDP per capita earning $45,968 per capita. The other seven most populous countires have GDP per capita under $15,000 and average life expectancy under 75.'
                },
               
          }
        }});