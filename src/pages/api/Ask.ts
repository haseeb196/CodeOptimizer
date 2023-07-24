/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import GetResult from "@/GetResults/GetResult";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.body;

  const result = await GetResult({ code });
  res.json({ results: await result });
}
