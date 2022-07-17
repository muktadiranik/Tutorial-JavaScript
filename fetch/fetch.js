// .then() or async await
console.clear();

// list all data
const list = () => {
  fetch("http://127.0.0.1:8000/list/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

// add data
const add = () => {
  fetch("http://127.0.0.1:8000/add/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: "added from fetch API",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

// update data
const update = () => {
  fetch("http://127.0.0.1:8000/update/38", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: "updated by fetch API",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const deleteData = () => {
  fetch("http://127.0.0.1:8000/delete/35", {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

// list();
// add();
// update();
// deleteData();

// async await
const makeRequest = async (url, config = null) => {
  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};

const getData = () => {
  makeRequest("http://127.0.0.1:8000/list/", null)
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const sendData = () => {
  makeRequest("http://127.0.0.1:8000/add/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: "added from fetch API",
    }),
  })
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const updateData = () => {
  makeRequest("http://127.0.0.1:8000/update/44", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: "updated by fetch API",
    }),
  })
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const asyncDeleteData = () => {
  makeRequest("http://127.0.0.1:8000/delete/34", {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

// getData();
// sendData();
// updateData();
// asyncDeleteData();
