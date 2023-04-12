import { database } from "../SQlite";

export function criaTabelaTema() {
    database.transaction((transaction) => {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS ' +
            'Theme ' +
            '(id INTEGER PRIMARY KEY, estaNoModoEscuro INTEGER NOT NULL);');
    });
}

export async function salvarTema(estaNoModoEscuro) {
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql(
                'REPLACE INTO Theme (id, estaNoModoEscuro) VALUES (1, ?);',
                [estaNoModoEscuro],
                () => { resolve('Theme salvo com sucesso!'); },
                (transaction, error) => { resolve('erro', error); }
            );
        });
    });
};

export async function pegarTema() {
    return new Promise((resolve) => {
        database.transaction((transaction) => {
            transaction.executeSql('SELECT estaNoModoEscuro FROM Theme WHERE id = 1',
                [],
                (transaction, resultado) => { resolve(resultado.rows.item(0).estaNoModoEscuro); },
                (transaction, error) => { resolve('erro ao pegar', error) }
            );
        });
    });
};
