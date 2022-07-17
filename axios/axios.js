const getData = () => {
  axios
    .get("http://127.0.0.1:8000/list/")
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const sendData = () => {
  axios
    .post("http://127.0.0.1:8000/add/", {
      body: "added from axios",
    })
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const updateData = () => {
  axios
    .put("http://127.0.0.1:8000/update/48", {
      body: "updated by axios",
    })
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const deleteData = () => {
  axios
    .delete("http://127.0.0.1:8000/delete/25")
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

// getData();
// sendData();
// updateData();
// deleteData();

// async await
const BASEURL = "http://127.0.0.1:8000/";
const makeRequest = async (config) => {
  return await axios(config);
};

const asyncGetData = () => {
  makeRequest({
    url: `${BASEURL}list/`,
  })
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const asyncSendData = () => {
  makeRequest({
    url: `${BASEURL}add/`,
    method: "POST",
    data: {
      body: "added from axios",
    },
  })
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const asyncUpdateData = () => {
  makeRequest({
    url: `${BASEURL}update/50`,
    method: "PUT",
    data: {
      body: "updated by axios",
    },
  })
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

const asyncDeleteData = () => {
  makeRequest({
    url: `${BASEURL}delete/48`,
    method: "DELETE",
  })
    .then((response) => {
      console.log(response.data);
      document.getElementsByTagName("p")[0].innerText = JSON.stringify(
        response.data,
        null,
        4
      );
    })
    .catch((error) => console.log(error));
};

asyncGetData();
// asyncSendData();
// asyncUpdateData();
// asyncDeleteData();
