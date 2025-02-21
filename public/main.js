function createThread() {
  fetch('https://got-game-api.dwaugh05.workers.dev', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages: [{role: 'user', content: 'Hello, world!'}]
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log('Thread created:', data))
  .catch(error => console.error('Error:', error));
}