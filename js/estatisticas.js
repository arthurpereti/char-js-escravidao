  /* =================================== */
  // FAIXA ETARIA
  // FAIXA ETARIA
  // FAIXA ETARIA

  const faixaetaria = document.getElementById('faixaetaria');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(faixaetaria, {
    type: 'bar',
    data: {
      labels: ['<18','18-34','35-49','50-60+'],
      datasets: [{
        label: 'Divisão pela faixa etária',
        data: [16,185,165,75],
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