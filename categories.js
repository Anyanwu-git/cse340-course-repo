const pool = require("./database");

async function getAllCategories() {
    const [rows] = await pool.query(
        "SELECT category_id, category_name FROM categories"
    );
    return rows;
}

module.exports = { getAllCategories };