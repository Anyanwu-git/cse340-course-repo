const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const categoriesModel = require("./categories");
const organizationsModel = require("./organizations");
const projectsModel = require("./projects");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/categories", async (req, res) => {
    try {
        const categories = await categoriesModel.getAllCategories();
        res.render("categories", { title: "Categories", categories });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.get("/organizations", async (req, res) => {
    try {
        const organizations = await organizationsModel.getAllOrganizations();
        res.render("organizations", { title: "Organizations", organizations });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.get("/projects", async (req, res) => {
    try {
        const projects = await projectsModel.getAllProjects();
        res.render("projects", { title: "Projects", projects });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});