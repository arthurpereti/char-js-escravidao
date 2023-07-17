const nat = document.getElementById('nat');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '400'

  new Chart(nat, {
    type: 'pie',
    data: {
      labels: ['Parda','Preta','Branca',],
      datasets: [{
        label: 'Pessoas Naturais em Trabalho Analogo A escravidão Em Goiás',
        data: [160,28,28],
        borderWidth: 2
      }]
    },
    options: {
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear',
                from: 0.5,
                to: 0.2,
                loop: true
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
});

/* ==================================== */

const res = document.getElementById('res');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '400'

  new Chart(res, {
    type: 'pie',
    data: {
      labels: ['Parda','Preta','Branca',],
      datasets: [{
        label: 'Pessoas Residentes em Trabalho Analogo A escravidão Em Goiás',
        data: [266,41,51],
        borderWidth: 2
      }]
    },
    options: {
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
});