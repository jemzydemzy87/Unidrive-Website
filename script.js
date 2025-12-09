const responses = {
    "ride": "You can request a ride anywhere on campus. Where are you heading?",
    "request": "To request a ride, just tell me your pickup and destination.",
    "price": "UniRide trips usually cost between ₦100 and ₦300 depending on distance.",
    "cost": "Our fares are student-friendly — ₦100 to ₦300 typically.",
    "share": "Ride-sharing lets you split costs with another student going your way.",
    "safety": "Your safety matters. All UniRide drivers are verified students with ID.",
    "hello": "Hello! How can I help with your UniRide experience?",
    "hi": "Hi there! Need help moving around campus?",
    "bike": "Bikes are available at the UniRide stations near hostels and faculties.",
    "shuttle": "Campus shuttles run every 10–15 minutes across major locations.",
    "help": "Sure! Ask me anything about UniRide services, prices, or campus mobility.",
    "contact": "You can reach UniRide support via the contact page or this chatbot.",
    "when": "UniRide operates 6am – 10pm daily for all students.",
    "where": "UniRide covers all major campus locations: hostels, faculties, library, senate building, and sports complex."
};

const fallbackReplies = [
    "Hmm… I’m not sure about that, but I can help with rides, routes, prices, and services.",
    "I don’t understand that yet, but I’m learning! Try asking about rides or services.",
    "Not sure I get that, but I can answer questions about campus transportation."
];

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (!inputField || !chatBox) return; // Page safety check

    let userText = inputField.value.trim();
    if (userText === "") return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.textContent = userText;
    chatBox.appendChild(userMsg);

    inputField.value = "";

    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.classList.add("message", "bot");

        const reply = getBotResponse(userText.toLowerCase());
        botMsg.textContent = reply;

        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotResponse(message) {
    for (let keyword in responses) {
        if (message.includes(keyword)) {
            return responses[keyword];
        }
    }

    const random = Math.floor(Math.random() * fallbackReplies.length);
    return fallbackReplies[random];
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
