const prompt = require("prompt");

prompt.start();

prompt.get(["username", "password"], function (err, result) {
  if (err) {
    return console.error(err);
  }

  console.log("Command-line input received:");
  console.log("  Username: " + result.username);
  console.log("  Password: " + result.password);
});
