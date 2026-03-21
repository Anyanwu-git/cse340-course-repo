const pool = require("./database");

async function getAllOrganizations() {
    const [rows] = await pool.query(
        "SELECT organization_id, organization_name, phone, email FROM organizations"
    );
    return rows;
}

module.exports = { getAllOrganizations };