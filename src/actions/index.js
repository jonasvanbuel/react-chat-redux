const endpoint = 'https://wagon-chat.herokuapp.com/general/messages';

export const GET_MESSAGES = 'GET_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';


export function getMessages() {
  return {
    type: GET_MESSAGES,
    payload: fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        return data.messages;
      })
  };
}

export function createMessage(channel, author, content) {
  const body = {
    author,
    content
  };

  return {
    type: MESSAGE_POSTED,
    payload: fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then((data) => {
        return data;
      })
  };
}
