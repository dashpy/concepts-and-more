const dummyAjaxRequest = (url) => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random) {
      resolve(true);
    } else {
      reject(true);
    }
  });
};

dummyAjaxRequest("/some-url", (response, error) => {
  if (error) {
    throw Error("Error");
  } else {
    dummyAjaxRequest("/some-url-b", (response, error) => {
      if (error) {
        throw Error("Error");
      } else {
        dummyAjaxRequest("/some-url-b", (response, error) => {
          if (error) {
            throw Error("Error");
          } else {
            return true;
          }
        });
      }
    });
  }
});
