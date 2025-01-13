const url = "https://accounts.spotify.com/api/token";
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

export async function fetchAccessToken() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret
      })
    });
    const data = await response.json();
    const token = data.access_token;
    const expiresIn = Date.now() + data.expires_in * 1000;
    // 13.01.25 20:55 - Date.now()
    // 13.01.25 21:55 - expiresIn (variable)
    localStorage.setItem("token", token);
    localStorage.setItem("expiresIn", expiresIn);

    return token;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccessToken() {
  try {
    const token = localStorage.getItem("token");
    const expiresIn = localStorage.getItem("expiresIn");

    if (token && expiresIn && Date.now() < expiresIn) {
      return token;
    }

    return await fetchAccessToken();
  } catch (error) {
    console.log(error);
  }
}
