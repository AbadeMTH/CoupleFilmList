import { database } from "../SQlite";

export function criaTabela(){
    database.transaction((transaction) => {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS ' +
            'Filmes ' +
            '(id INTEGER PRIMARY KEY AUTOINCREMENT, filme TEXT, status TEXT, anotacao TEXT, lancamento TEXT);');
    });
}

export async function buscaFilmes(){
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM Filmes;', 
            [], 
            (transaction, resultado) => {
                resolve(resultado.rows._array);
            });
        });
    });
}

export async function adicionaFilme(filme){
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('INSERT INTO Filmes (filme, status, anotacao, lancamento) VALUES (?, ?, ?, ?);',
            [filme.nomeFilme, filme.statusFilme, filme.anotacaoFilme, filme.dataAjustada],
            () => {
                resolve('Filme adicionado com sucesso!');
            });
        });
    });
}

export async function atualizaFilme(filme){
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('UPDATE Filmes SET filme = ?, status = ?, anotacao = ?, lancamento = ? WHERE id = ?;',
            [filme.nomeFilme, filme.statusFilme, filme.anotacaoFilme, filme.dataAjustada, filme.id],
            () => {
                resolve('Filme modificado com sucesso!');
            });
        });
    });
}

export async function removeFilme(filme){
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('DELETE FROM Filmes WHERE id = ?;',
            [filme.id],
            () => {
                resolve('Filme removido com sucesso!');
            });
        });
    });
}

export async function filtraFilmes(status){
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM Filmes WHERE status = ?;', 
            [status], 
            (transaction, resultado) => {
                resolve(resultado.rows._array);
            });
        });
    });
}

export async function filtraTodosFilmesPorNome(nome){
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM Filmes WHERE filme LIKE ?;', 
            [`%${nome}%`], 
            (transaction, resultado) => {
                resolve(resultado.rows._array);
            });
        });
    });
}

export async function filtraTodosFilmesPorNomeEStatus(nome, status){
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM Filmes WHERE filme LIKE ? AND status = ?;', 
            [`%${nome}%`, status], 
            (transaction, resultado) => {
                resolve(resultado.rows._array);
            });
        });
    });
}


