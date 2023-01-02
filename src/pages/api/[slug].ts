import getOriginalLink from "~/apis/get-original-link";
import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

const handler: (req: NextApiRequest, res: NextApiResponse) => void = async (req, res) => {
  const { slug } = req.query;

  const originUrl = await getOriginalLink(slug as string);

  // check originUrl is ""
  if (originUrl === "") {
    res.setHeader("Location", BASE_URL);
  } else {
    res.setHeader("Location", originUrl);
  }

  res.statusCode = 301;
  res.end();
};

export default handler;
