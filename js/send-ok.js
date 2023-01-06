function sendOk() {
    var nome = document.getElementById("name");

    if (nome.value != "") {
        alert('Obrigado ' + nome.value + ' os seus dados foram encaminhados com sucesso!');
    }
}