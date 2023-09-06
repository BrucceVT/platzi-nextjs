import Database from "@/database";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database();
  const id = request.query.id;
  const avo = await db.getById(id as string);

  response.status(200).json(avo)
};

export default allAvos;
