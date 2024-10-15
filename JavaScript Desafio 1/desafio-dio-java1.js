const {gets, print} = require('./export-desafio-dio-java1')

const media = gets();

if (media < 5) {
    print('O Aluno está Reprovado');
} else if (media >= 5 && media < 7){
    print('O Aluno está de Recuperação');
} else {
    print('O Aluno está Aprovado')
}