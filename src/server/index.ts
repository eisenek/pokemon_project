import app from "./app";
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `[app] \x1b[1m\x1b[32mServer listening on port:\x1b[0m \x1b[1m\x1b[35m${PORT}\x1b[0m`
  );
});
