import db from "../config/db.js";
import { usersTable } from "../drizzle/schema.js";

export const createUser = async ({ userName, name, email, password }) => {
  try {
    return await db
      .insert(usersTable)
      .values({ userName, name, email, password });
  } catch (err) {
    return null;
  }
};
