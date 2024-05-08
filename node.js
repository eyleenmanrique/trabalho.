const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNotaFinal(mediaProvas, mediaTrabalhos) {
  return mediaProvas + mediaTrabalhos;
}

const alunos = [];

function lerInformacoesAlunos() {
  rl.question('Informe o nome, número de matrícula, média das provas e média dos trabalhos (separados por espaço) para cada aluno:\n', (input) => {
    const info = input.split(' ');
    const nome = info[0];
    const matricula = parseInt(info[1]);
    const mediaProvas = parseInt(info[2]);
    const mediaTrabalhos = parseInt(info[3]);
    alunos.push({ nome, matricula, mediaProvas, mediaTrabalhos });

    if (alunos.length < 5) {
      lerInformacoesAlunos();
    } else {
      rl.close();
      calcularResultados();
    }
  });
}

function calcularResultados() {
  let maiorNotaFinal = -1;
  let nomeMaiorNota = '';
  let matriculaMaiorNota = '';
  let somaNotasFinais = 0;

  for (let i = 0; i < alunos.length; i++)
  console.log('Matrícula do aluno com a maior nota final:', matriculaMaiorNota);
  console.log('Média aritmética das notas finais:', mediaNotasFinais);
}

lerInformacoesAlunos();
