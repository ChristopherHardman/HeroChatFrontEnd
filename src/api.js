const target = 'http://localhost:3001/';

const api = {

  conversations: async () => {
    try {
      const response = await fetch(`${target}conversations`,  {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
          }
      })
      if(response.status ===200) return response.json();
    }
    catch (error) {
        console.log('Error', error);
        return 'Error';
    }
  },


  addMessage: async (data) => {
    try {
      const response = await fetch(`${target}addMessage`,  {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          'message': data,
        })
      })
      if(response.status ===200) return 'Success';
    }
    catch (error) {
        console.log('Error', error);
        return 'Error';
    }
  },

  addConversation: async (data) => {
    try {
      const response = await fetch(`${target}addConversation`,  {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          'title': data,
        })
      })
      if(response.status ===200) return 'Success';
    }
    catch (error) {
        console.log('Error', error);
        return 'Error';
    }
  }
}

export default api;
