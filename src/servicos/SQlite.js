import * as SQLite from 'expo-sqlite';

function abreConexao(){
    const database = SQLite.openDatabase('localdb.db');
    return database;
}

export const database = abreConexao();