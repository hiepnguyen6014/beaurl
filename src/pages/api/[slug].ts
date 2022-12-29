import getOriginalLink from "~/apis/get-original-link";
import type { NextApiRequest, NextApiResponse } from "next";

const handler: (req: NextApiRequest, res: NextApiResponse) => void = async (req, res) => {
  const { slug } = req.query;

  const originUrl = await getOriginalLink(slug as string);

  res.setHeader("Location", originUrl);
  res.statusCode = 301;
  res.end();
};

export default handler;
