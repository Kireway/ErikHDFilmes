function entrar() {
    const nome = document.getElementById('nomeVer').value.trim(); // Remove espaços em branco

    if (nome === "ErikGames") {
        window.location.href = 'principal.html';
    } else {
        window.alert("Usuário não encontrado!");
    }
}

function resenhaUltimato() {
    window.location.href = 'ultimato.html';
}