import Database from "@/database";
import enablePublicAccess from '@/cors'
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await enablePublicAccess(request, response)

    const db = new Database()
    const allEntries = await db.getAll()
    const length = allEntries.length

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET')
    response.end(JSON.stringify({ length, data: allEntries }))
  } catch (e) {
    console.error(e)
    response.statusCode = 500
    response.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default allAvos;
