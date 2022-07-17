// event --> onload(), onerror()
// property ==> response, responseText, responseType, responseURL, status, statusText
// function --> open(), send(), setRequestHeader()
console.clear();

const makeRequest = (method, url, DATA = null) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
    document.getElementsByTagName("p")[0].innerText = JSON.stringify(
      JSON.parse(data),
      null,
      4
    );
  };
  xhr.send(JSON.stringify(DATA));
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};

const getDataFromLocalAPI = () => {
  makeRequest("GET", "http://127.0.0.1:8000/list/");
};

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });
};

const sendDataToLocalAPI = () => {
  makeRequest("POST", "http://127.0.0.1:8000/add/", {
    body: "added from XMLHttpRequest",
  });
};

const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });
};

const updateDataToLocalAPI = () => {
  makeRequest("PUT", "http://127.0.0.1:8000/update/6", {
    body: "updated by XMLHttpRequest PUT",
  });
};

const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      title: "foofoo",
      body: "barbar",
    }),
  });
};

const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};

const deleteDataFromLocalAPI = () => {
  makeRequest("DELETE", "http://127.0.0.1:8000/delete/15");
};

// getData();
// getDataFromLocalAPI();
// sendData();
// sendDataToLocalAPI();
// updateData();
// updateDataToLocalAPI();
// updateSingleData();
// deleteData();
// deleteDataFromLocalAPI();
