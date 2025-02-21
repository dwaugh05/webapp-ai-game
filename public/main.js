function createThread() {
  fetch('got-game-api.dwaugh05.workers.dev', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages: [{role: 'user', content: 'Hello, world!'}]
    })
  })
  .then(res => res.json())
  .then(data => console.log('Thread created:', data))
  .catch(err => console.error('Error:', err));
}
