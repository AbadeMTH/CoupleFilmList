const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const gerarStatusAleatorio = () => {
    const numeroAleatorio = gerarNumeroAleatorio(1, 15);
    if( numeroAleatorio > 10){
        return 'Assistido'
    } else if (numeroAleatorio > 5 && numeroAleatorio < 10){
        return 'Ainda não terminado';
    }
    return 'Não Assistido';
}

const filmes = {
    lista: [
        {
            nomeFilme: 'Crepúsculo: Amanhecer',
            status: gerarStatusAleatorio(),
            saibaMais: 'Clique para mais informações',
            duracao: '2 horas e 20 minutos de duração',
            sinopse: 'Lorem ipsum da puta q pariu', 
        },
        {
            nomeFilme: 'Carros 2',
            status: gerarStatusAleatorio(),
            saibaMais: 'Clique para mais informações',
            duracao: '2 horas e 20 minutos de duração',
            sinopse: 'Lorem ipsum da puta q pariu', 
        },
        {
            nomeFilme: 'Knives Out',
            status: gerarStatusAleatorio(),
            saibaMais: 'Clique para mais informações',
            duracao: '2 horas e 20 minutos de duração',
            sinopse: 'Lorem ipsum da puta q pariu', 
        },
    ]
}

export default filmes;