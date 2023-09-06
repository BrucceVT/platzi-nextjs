import Database from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify({ length, data: allEntries }));
};

export default allAvos;
