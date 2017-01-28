//Created a varible to get the html tag
var lineChartHr = document.getElementById("line-chart-hourly");

var myChartHr = new Chart(lineChartHr, {

  type:'line', 

  data: {

    labels:["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm","7pm"],
    datasets: [{
      label: 'USA',
      lineTension:.15,
      backgroundColor: 'rgba(4, 83, 229, 0.8)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[0,2,1,5,3,6,5,7],
      
    },
    {
      label: 'Mexico',
      lineTension:.15,
      backgroundColor: 'rgba(255, 128, 0, 0.6)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[7,3,4,8,3,7,3,10],
    
    }
  ]
  },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var lineChartHr = document.getElementById("line-chart-daily");

var myChartHr = new Chart(lineChartHr, {

  type:'line', 

  data: {

    labels:["0", "5", "10", "15", "20", "25", "31"],
    datasets: [{
      label: 'USA',
      lineTension:.15,
      backgroundColor: 'rgba(4, 83, 229, 0.8)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[30,12,20,15,70,45,80],
    
    },
    {
      label: 'Mexico',
      lineTension:.15,
      backgroundColor: 'rgba(255, 128, 0, 0.6)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[50,22,40,30,90,55,100],
    
    }
  ]
  },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var lineChartHr = document.getElementById("line-chart-weekly");

var myChartHr = new Chart(lineChartHr, {

  type:'line', 

  data: {

    labels:["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      label: 'USA',
      lineTension:.15,
      backgroundColor: 'rgba(4, 83, 229, 0.8)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[100,300,600,450,750,567,900,825,500, 600, 200,],
      
    },
    {
      label: 'Mexico',
      lineTension:.15,
      backgroundColor: 'rgba(255, 128, 0, 0.6)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[245,550,340,630,590,855,1000,700,950,300,780],
    
    }
  ]
  },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                }
            }]
        }
    }
});




var lineChartHr = document.getElementById("line-chart-monthly");

var myChartHr = new Chart(lineChartHr, {

  type:'line', 

  data: {

    labels:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    datasets: [{
      label: 'USA',
      lineTension:.15,
      backgroundColor: 'rgba(4, 83, 229, 0.8)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0,0,0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[500,1100,1300,2050,1550,1367,2200,1725,1300, 2400, 1000, 2200],
      
    },
    {
      label: 'Mexico',
      lineTension:.15,
      backgroundColor: 'rgba(255, 128, 0, 0.6)',
      borderCapStyle: 'circle',
      borderColor:'white',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointBorderWidth: 1,
      pointRadius: 6,
      pointStyle:'circle',
      pointHoverRadius: 12,
      pointHoverBackgroundColor:'#0453E5',
      pointHoverBorderColor:'#0453E5',
      data:[1045,2350,2040,1430,1990,1655,2300,1700,2350,2800,1500,3000],
    
    }
  ]
  },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                }
            }]
        }
    }
});



var barChart = document.getElementById("bar-chart");

var myBarChart = new Chart(barChart, {

  type:'bar', 

  data: {

    labels:["0", "5", "10", "15", "20", "25", "31"],
    datasets: [{
      label: 'USA',
      backgroundColor: 'rgba(4, 83, 229, 0.8)',
      borderColor:'white',
      borderWidth: 3,
      data:[30,12,20,15,70,45,80],
      
    },
    {
      label: 'Mexico',
      backgroundColor:'rgba(255, 128, 0, 0.6)',
      borderColor:'white',
      borderWidth:3,
      data:[50,22,40,30,90,55,100],
    }
  ]
  },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               gridLines: {
                display: false,
               }
            }]
        }
    }
});


var pieChart = document.getElementById('pie-chart');

var myPieChart = new Chart(pieChart, {
  
  type:'doughnut',
 
 data: {
  labels:['Desktop','Tablets','Phones'],
  datasets:[

    {
      data:[300,50,100],
      backgroundColor: ["rgba(4, 83, 229, 0.8)",'rgba(255, 128, 0, 0.6)',"rgba(0,0,0,0.8)" ],
      borderWidth:3,

  }]
 },

     options: {    
              responsive: true,
              maintainAspectRatio: false,
        legend: {
        display: true
    }
    },

});































