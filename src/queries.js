import { Pool } from "pg";

const pool = new Pool({
  user: "admin",
	password: "admin",
  host: "profiler-postgres",
  port: 5432,
	database: "profiler"
});

export function getProfiles() {
	return new Promise((resolve, reject) => {
		pool.query("SELECT * FROM profiles;", (error, result) => {
			if (error) {
				reject(error);
			}

			resolve(result);
		});
	});
}
