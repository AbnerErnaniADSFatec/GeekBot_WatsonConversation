msg.payload = {
    chatId : msg.chatId,
    type : "message",
    content : msg.payload.output.text[0]
};
return msg;