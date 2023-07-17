const mas = document.getElementById('mas')

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

new Chart(mas, {
  type: 'bar',
  data: {
    labels: ['Homem'],
    datasets: [{
      label: 'Masculinos naturais de Goiás',
      data: [4, 12, 9, 8, 6, 4, 2, 1, 2, 0],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

/* ============================== */

let fem = document.getElementById('fem')

  new Chart(fem, {
    type: 'bar',
    data: {
      labels: ['Mulher'],
      datasets: [{
        label: 'Femininos naturais de Goiás',
        data: [0, 2, 2, 2, 1, 0, 0, 1, 1, 1],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

/* ================================== */

const res_mas = document.getElementById('res_mas')

  new Chart(res_mas, {
    type: 'bar',
    data: {
      labels: ['Homem'],
      datasets: [{
        label: 'Masculinos residentes de Goiás',
        data: [2,7, 8, 12, 13, 7, 4, 4, 3,2],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

/* ======================================== */

const res_fem = document.getElementById('res_fem')

  new Chart(res_fem, {
    type: 'bar',
    data: {
      labels: ['Mulher'],
      datasets: [{
        label: 'Femininos naturais de Goiás',
        data: [0,4,1,4,2,2,2,1,0,0],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });