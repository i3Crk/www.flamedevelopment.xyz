const socket = io();

socket.on('new_message', (data) => {
  console.log(`New message received from ${data.sender} to ${data.recipient}: ${data.message}`);

  const chatLog = document.getElementById('chat-log');
  const messageElement = document.createElement('div');
  messageElement.innerText = `${data.sender}: ${data.message}`;
  chatLog.appendChild(messageElement);
});
