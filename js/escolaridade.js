const nat = document.getElementById('nat');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(nat, {
    type: 'line',
    data: {
      labels: ['6° ao 9° ano incompleto', 'Ensino Médio Incompleto', 'Até 5° ano incompleto', 'Ensino Médio Completo', 'Analfabeto', '5° Completo'],
      datasets: [{
        label: 'Foram Resgatadas 1623 Pessoas Em Trabalho Analógo A escravidão Naturais de Goiás',
        data: [38, , 686, 88, 419, 77],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
        color: '#fff',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
    }
  });

  /* =========================== */

  const res = document.getElementById('res');

  new Chart(res, {
    type: 'line',
    data: {
      labels: ['6° ao 9° ano incompleto', 'Ensino Médio Incompleto', 'Até 5° ano incompleto', 'Ensino Médio Completo', 'Analfabeto', 'Fundamental Completo'],
      datasets: [{
        label: 'oram Resgatadas 1927 Pessoas Em Trabalho Analógo A escravidão Naturais de Goiás',
        data: [67,42,65,57,17,83,],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
        color: '#fff',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
    }
  });