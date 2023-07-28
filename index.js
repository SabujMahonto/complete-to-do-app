const app = require("./app");
const port = process.env.PORT;
app.listen(5000, () => {
  console.log("App running port 5000");
});
