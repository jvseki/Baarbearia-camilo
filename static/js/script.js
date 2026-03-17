document.addEventListener("DOMContentLoaded", function() {
    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay(); 

    let mensagemEscolhida = "";

    if (diaSemana === 1 || diaSemana === 2) {
        mensagemEscolhida = "Começando a semana do jeito certo! 💈🔥<br><br>Semana iniciando e a agenda já está aberta! Nada melhor do que começar os dias alinhado, atualizado e na régua ✂️<br><br>Se você gosta de manter o padrão lá em cima, já garante seu horário e evita ficar sem vaga.";
    } else if (diaSemana === 3 || diaSemana === 4) {
        mensagemEscolhida = "Meio de semana já chegou! Passando para lembrar que o final de semana está logo aí e nada melhor do que já se organizar para garantir seu horário.<br><br>Se programe, agende com antecedência e venha passar o final de semana alinhado e com a autoestima lá em cima!";
    } else if (diaSemana === 5 || diaSemana === 6) {
        mensagemEscolhida = "O final de semana já chegou, então já é hora de se atualizar.<br><br>Se você quer chegar alinhado, esse é o momento de garantir seu horário e deixar o corte em dia. Minha agenda já está rodando, evite correria de última hora.";
    } else {
        mensagemEscolhida = "Clientes e amigos, a agenda da semana da Lacami Barbearia já se encontra aberta para agendamentos.<br><br>Para reservar seu horário, pedimos a gentileza de entrar em contato. Desejamos a todos uma ótima semana!";
    }

    document.getElementById("mensagem-dinamica").innerHTML = mensagemEscolhida;
});