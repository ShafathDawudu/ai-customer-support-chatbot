const responses = {
    "hello": "Hello! Welcome to customer support. How can I help you?",
    "order": "Please provide your order ID to check the order status.",
    "refund": "Refund requests can be submitted within 7 days of purchase.",
    "complaint": "I can create a complaint ticket for your issue.",
    "default": "Sorry, I could not understand. I will forward this to a support agent."
};

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) return responses.hello;
    if (message.includes("order")) return responses.order;
    if (message.includes("refund")) return responses.refund;
    if (message.includes("complaint")) return responses.complaint;

    return responses.default;
}
