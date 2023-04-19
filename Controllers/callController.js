require("dotenv").config();

exports.call1 = (req, res, next) => {
  var request = require("request");

  const beare_token = process.env.BEARE_TOKEN;

  request(
    {
      method: "POST",
      url: "https://api.nvoip.com.br/v2/calls/",
      headers: {
        "Content-Type": "application/json",
        Authorization: beare_token,
      },
      body: '{  "caller": "1049",  "called": "11990000000"}',
    },
    function (error, response, body) {
      console.log("Status:", response.statusCode);
      console.log("Headers:", JSON.stringify(response.headers));
      console.log("Response:", body);
    }
  );
};
