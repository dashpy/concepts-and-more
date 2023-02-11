// Debajo puedes encontrar el ejemplo “rethrow”.
// Rescríbelo usando async/await en vez de .then/catch.
// Y deshazte de la recursión en favor de un bucle en demoGithubUser:
// con async/await, que se vuelve fácil de hacer.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const request = await fetch(url);

  if (request.ok) {
    return request.json();
  } else {
    throw new HttpError(request);
  }
}

// Pide nombres hasta que github devuelve un usuario válido
async function demoGithubUser() {
  let name = "iliakan ";
  try {
    const response = await loadJson(`https://api.github.com/users/${name}`);
    return response;
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      console.log("No existe tal usuario, por favor reingrese.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}

demoGithubUser();
