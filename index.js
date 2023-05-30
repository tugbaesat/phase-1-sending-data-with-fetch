// Add your code here

function submitData(name, email) {
  const data = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(parsedResponse => {
      const id = parsedResponse.id;
      document.body.innerHTML += `<p>Received new ID: ${id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}

