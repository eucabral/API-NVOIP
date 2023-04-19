require("dotenv").config();

exports.auth = (req, res, next) => {
  var request = require("request");

  const secret_username = process.env.SECRET_USERNAME;
  const secret_password = process.env.SECRET_PASSWORD;

  console.log(secret_password, secret_username);

  request(
    {
      method: "POST",
      url: "https://api.nvoip.com.br/v2/oauth/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic TnZvaXBBcGlWMjpUblp2YVhCQmNHbFdNakl3TWpFPQ==",
      },
      body: `username=${secret_username}&password=${secret_password}&grant_type=password`,
    },
    function (error, response, body) {
      console.log("Status:", response.statusCode);
      console.log("Headers:", JSON.stringify(response.headers));
      console.log("Response:", body);
    }
  );
};
