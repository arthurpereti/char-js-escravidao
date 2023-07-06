var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Vendas',
            data: [100, 200, 150, 300, 250, 400],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
            
        }]
    }
    // ,
    // options: {
    //     // responsive: true,
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
});