document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const pessoas = document.getElementById('pessoas').value;

    if (!nome || !data || !hora || !pessoas) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const dataReserva = new Date(data);
    const diaSemana = dataReserva.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

    if (diaSemana === 1) {
        alert('Não é possível reservar mesas nas segundas-feiras.');
        return;
    }

    // Check if time is after 20:00
    const [horaReserva, minutoReserva] = hora.split(':').map(Number);
    if (horaReserva > 20 || (horaReserva === 20 && minutoReserva > 0)) {
        alert('As reservas só podem ser feitas até as 20:00.');
        return;
    }

    const diasSemanaPt = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaSemanaTexto = diasSemanaPt[diaSemana];

    // Format date as DD/MM/YYYY
    const dataParts = data.split('-'); // [YYYY, MM, DD]
    const dataFormatada = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;

    const mensagem = `Olá, gostaria de reservar uma mesa.\nNome: ${nome}\nData: ${dataFormatada} (${diaSemanaTexto})\nHora: ${hora}\nNúmero de Pessoas: ${pessoas}`;
    const telefoneWhatsApp = '5564981443459'; 

    const urlWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.location.href = urlWhatsApp;
});
