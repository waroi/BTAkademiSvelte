function request(url, method = "POST", data) {
  return new Promise((resolve, reject) => {
    const options = {
      method,
    };
    if (data) {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      options.body = JSON.stringify(data);
      options.headers = myHeaders;
    }
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export const get = (url) => request(url, "GET");
export const post = (url, data) => request(url, "POST", data);

export default request;
