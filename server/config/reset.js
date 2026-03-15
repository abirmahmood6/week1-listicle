import { pool } from "./database.js";
import gearData from "./gearData.js";

async function createGearsTable() {
  const createTableQuery = `
    DROP TABLE IF EXISTS gears;

    CREATE TABLE IF NOT EXISTS gears (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePoint VARCHAR(10) NOT NULL,
        audience VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    );
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 Gears table created successfully");
  } catch (err) {
    console.error("⚠️ error creating gears table", err);
  }
}

createGearsTable();


const seedGearsTable = async () => {
  await createGearsTable();

  gearData.forEach((gear) => {
    const insertQuery = {
      text: `INSERT INTO gears 
      (name, pricePoint, audience, image, description, submittedBy, submittedOn) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)`
    };

    const values = [
      gear.name,
      gear.pricePoint,
      gear.audience,
      gear.image,
      gear.description,
      gear.submittedBy,
      gear.submittedOn
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting gear", err);
        return;
      }

      console.log(`✅ ${gear.name} added successfully`);
    });
  });
};

seedGearsTable();