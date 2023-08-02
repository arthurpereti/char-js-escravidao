  // DIVISÃO POR SETOR
  // DIVISÃO POR SETOR
  // DIVISÃO POR SETOR

  const setoreseconomicos = document.getElementById('setoreseconomicos');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '1000'

  new Chart(setoreseconomicos, {
    type: 'pie',
    data: {
      labels: ['Atividades de apoio à agricultura ','Produção florestal - florestas plantadas','Cultivo de café','Construção de Edifícios','Cultivo de laranja','Fabricação de produtos de fumo','Criação de bovinos','Outros'],
      datasets: [{
        label: 'Setores Econômicos mais frequentemente Envolvidos',
        data: [204,101,87,73,57,54,50,248],
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
  // DIVISÃO POR TRABALHO MAIS RECENTE
  // DIVISÃO POR TRABALHO MAIS RECENTE
  // DIVISÃO POR TRABALHO MAIS RECENTE

  const ocupacaomaisrecente = document.getElementById('ocupacaomaisrecente');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '1000'

  new Chart(ocupacaomaisrecente, {
    type: 'pie',
    data: {
      labels: ['Trabalhador volante da agricultura','Trabalhador da cultura de café','Trabalhador de pecuária','Cortador de pedras','Servente de obras','Pedreiro','Outros'],
      datasets: [{
        label: 'Ocupações mais frequentes',
        data: [96,90,51,41,32,29,50],
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
  // DIVISÃO POR ETNIA
  // DIVISÃO POR ETNIA
  // DIVISÃO POR ETNIA

  const divisaoporetnia = document.getElementById('divisaoporetnia');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(divisaoporetnia, {
    type: 'pie',
    data: {
      labels: ['Parda','Branca','Preta'],
      datasets: [{
        label: 'Divisão por Etnia',
        data: [426,79,71],
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
  // DIVISÃO POR ESCOLARIDADE
  // DIVISÃO POR ESCOLARIDADE
  // DIVISÃO POR ESCOLARIDADE
  
  const divisaoescolaridade = document.getElementById('divisaoescolaridade');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(divisaoescolaridade, {
    type: 'pie',
    data: {
      labels: ['Ensino Médio Completo','Ensino Médio Incompleto','Fundamental Completo','6° ao 9° ano incompleto','5° ano completo','5° ano incompleto','Analfabeto'],
      datasets: [{
        label: 'Divisão por Escolaridade',
        data: [98,65,123,105,37,107,30],
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
  // DIVISÃO POR SEXO
  // DIVISÃO POR SEXO
  // DIVISÃO POR SEXO

  const divisaosexo = document.getElementById('divisaosexo');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(divisaosexo, {
    type: 'pie',
    data: {
      labels: ['Homem','Mulher'],
      datasets: [{
        label: 'Divisão por Sexo',
        data: [550,26],
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
  // FAIXA ETARIA
  // FAIXA ETARIA
  // FAIXA ETARIA

  const faixaetaria = document.getElementById('faixaetaria');

  Chart.defaults.borderColor = '#000'
  Chart.defaults.color = '#000'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(faixaetaria, {
    type: 'pie',
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