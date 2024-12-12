const chatForm = document.getElementById('chatForm');
const chatWindow = document.getElementById('chatWindow');

chatForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const userMessage = document.getElementById('userMessage').value;

    if (userMessage.trim() !== '') {
        // Display user's message
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user';
        userMessageElement.textContent = userMessage;
        chatWindow.appendChild(userMessageElement);

        // Scroll to the latest message
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Simulate a bot reply
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'chat-message bot';
            botMessageElement.textContent = 'Thank you for reaching out! How can we help you?';
            chatWindow.appendChild(botMessageElement);

            // Scroll to the latest message
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }

    // Clear the input field
    document.getElementById('userMessage').value = '';
});
