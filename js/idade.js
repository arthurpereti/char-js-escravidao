const idade_mas = document.getElementById('idade_mas');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '1000'

  new Chart(idade_mas, {
    type: 'radar',
    data: {
      labels: ['menor de 18','18-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','maior de 60'],
      datasets: [{
        label: '62 homens escravizados residentes do Distrito Federal',
        data: [2,7,8,12,13,7,4,4,3,2],
        borderWidth: 5
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

  /* =================================== */

  const idade_fem = document.getElementById('idade_fem');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '1000'

  new Chart(idade_fem, {
    type: 'radar',
    data: {
      labels: ['menor de 18','18-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','maior de 60'],
      datasets: [{
        label: '16 mulheres escravizadas residentes do Distrito Federal',
        data: [0,4,1,4,2,2,2,1,0,0],
        borderWidth: 3
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

  /* =================================== */

  const idade_mas_ = document.getElementById('idade_mas_');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(idade_mas_, {
    type: 'radar',
    data: {
      labels: ['menor de 18','18-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','maior de 60'],
      datasets: [{
        label: '48 homens escravizados naturais do Distrito Federal',
        data: [4,12,9,8,6,4,2,1,2,0],
        borderWidth: 5
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

  /* =================================== */
  
  const idade_fem_ = document.getElementById('idade_fem_');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(idade_fem_, {
    type: 'radar',
    data: {
      labels: ['menor de 18','18-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','maior de 60'],
      datasets: [{
        label: '10 mulheres escravizadas residentes do Distrito Federal',
        data: [0,2,2,2,1,0,0,1,1,1],
        borderWidth: 5
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

  /* =================================== */
  