var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 113, y: 615},
                ],
                label: "United States",
                borderColor: "#3e95cd",
                backgroundColor: "#3e95cd",
                borderWidth:3,
               
              }, { 
                data: [
                  {x: 88, y: 401},
                ],
                label: "China",
                borderColor: "#F2F538",
                backgroundColor: "#F2F538",
                borderWidth:3,
                
              }, { 
                data: [
                {x: 58, y: 586 },
                ],
                label: "Japan",
                borderColor: "#E10808",
                backgroundColor:"#E10808",
                borderWidth:3,
                
              },{ 
                data: [
                {x: 65, y: 366 },
                ],
                label: "Great Britain",
                borderColor: "#193EBD",
                backgroundColor:"#193EBD",
                borderWidth:3,
                
              }, { 
                data: [
                {x: 71, y: 318 },
                ],
                label: "ROC",
                borderColor: "#43C866",
                backgroundColor:"#43C866",
                borderWidth:3,
              }, { 
                data: [
                {x: 46, y: 470 },
                ],
                label: "Australia",
                borderColor: "#7806B0",
                backgroundColor:"#7806B0",
                borderWidth:3,
              }, { 
                data: [
                {x: 36, y: 274 },
                ],
                label: "Netherlands",
                borderColor: "#ffa500",
                backgroundColor:"#ffa500",
                borderWidth:3,
              }, { 
                data: [
                {x: 33, y: 377 },
                ],
                label: "France",
                borderColor: "#A62B63",
                backgroundColor:"#A62B63",
                borderWidth:3,
              }, { 
                data: [
                {x: 37, y: 400},
                ],
                label: "Germany",
                borderColor: "#F79BDE",
                backgroundColor:"#F79BDE",
                borderWidth:3,
              }, { 
                data: [
                {x: 40, y: 356 },
                ],
                label: "Italy",
                borderColor: "#07641F",
                backgroundColor:"#07641F",
                borderWidth:3,
              },

            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Number of athletes'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Number of medals'
                  }
              }
            }, 
              plugins: {
                title: {
                    display: true,
                    text: 'Does number of Olympians correlate to the number of medals that country earns?',
                    font: {
                      size: 24,
                    }
                  }, 
                 subtitle: {
                        display: true,
                        text: 'The United States lead the rest of the world in terms of number of Olympians and medals American athletes earned. There is no correlation between the two variables.'
                },
            }
          }
        });