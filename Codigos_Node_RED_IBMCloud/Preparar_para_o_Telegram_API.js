fetch('https://api.themoviedb.org/3/movie/550?api_key=5d017f7c43b78aef46d78e425f821ed3&language=pt-BR').then(response => {
    return response.json();
}).then(data => {
    content = data.overview;
    msg.payload = {
        chatId : msg.chatId,
        type : "message",
        content : content
    };
    return msg;
}).catch(err => {
    content = "Nada achei sobre o gênero";
	msg.payload = {
        chatId : msg.chatId,
        type : "message",
        content : content
    };
    return msg;
});