const pool = require("./database");

async function getAllProjects() {
    const [rows] = await pool.query(
        `SELECT project_id, project_name, project_description, organization_id 
         FROM projects`
    );
    return rows;
}

module.exports = { getAllProjects };