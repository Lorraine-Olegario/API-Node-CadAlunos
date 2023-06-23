const sqlite3 = require('sqlite3').verbose();

// Cria uma conexão com o banco de dados
const db = new sqlite3.Database('database.sqlite');

// Executa a instrução SQL para excluir a tabela
db.run('DROP TABLE IF EXISTS students');
db.run('DROP TABLE IF EXISTS addresses');
db.run('DROP TABLE IF EXISTS SequelizeMeta', function(err) {
    if (err) {
        console.error(err.message);
    } else {
            console.log('Tabela excluída com sucesso');
    }
});

// Fecha a conexão com o banco de dados
db.close();
