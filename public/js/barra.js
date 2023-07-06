var ctx = document.getElementById("barra").getContext('2d');

var chartGraph = new Chart(ctx,{
    type: 'bar',
    data: {
        labels:["10+","20+","30+","40+","50+","60+"],
        datasets: [{
                label:"Escravos soltos",
                data:[1,4,5,6,7,8],
                borderwidth: 1,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'black'
            }]
    } 
});