import Database from "@/database";
import enablePublicAccess from '@/cors'
import { NextApiRequest, NextApiResponse } from "next";

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await enablePublicAccess(req, res)

    const db = new Database()
    const avoId = req.query.id as string

    const avo = await db.getById(avoId)

    res.status(200).json(avo)
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default AvoDetail