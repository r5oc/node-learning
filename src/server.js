import app from "./app";

const PORT = 3000;
const URL = `http://localhost:${PORT}`;
app.listen(PORT);

console.clear();
const msg = `[${new Date().toLocaleString()}] Servidor executando em ${URL}`;
const t = '='.repeat(msg.length);
console.log(`${t}\n${msg}\n${t}`);
console.log('Aguardando requisições...');
