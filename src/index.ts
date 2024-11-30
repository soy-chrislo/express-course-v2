import express from "express";

const app = express();

// GET /users/packages?id=101
app.get("/", (request, response) => {
	response.send("Hello, world");
});

app.listen(3000);
