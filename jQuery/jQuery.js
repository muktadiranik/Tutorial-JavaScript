console.clear();

const BASEURL = "http://127.0.0.1:8000/";
const makeRequest = async (config) => {
  const response = await jQuery.ajax(config);
  return response;
};

const getData = () => {
  makeRequest({
    url: `${BASEURL}list/`,
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

const sendData = () => {
  makeRequest({
    url: `${BASEURL}add/`,
    method: "POST",
    data: {
      body: "added from jquery",
    },
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
  makeRequest({
    url: `${BASEURL}update/52`,
    method: "PUT",
    data: {
      body: "updated by jquery",
    },
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
  makeRequest({
    url: `${BASEURL}delete/52`,
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

const sendRemoteDataToLocalAPI = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/todos",
  })
    .then((response) => {
      for (var i = 0; i < response.length; i++) {
        makeRequest({
          url: `${BASEURL}add/`,
          method: "POST",
          data: {
            body: JSON.stringify(response[i]["title"]),
          },
        }).then((response) => console.log(response));
      }
    })
    .catch((error) => console.log(error));
};

getData();
// sendData();
// updateData();
// deleteData();
// getRemoteData();
// sendRemoteDataToLocalAPI();
