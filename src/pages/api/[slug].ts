import getOriginalLink from "~/apis/get-original-link";
import type { NextApiRequest, NextApiResponse } from "next";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

const handler: (req: NextApiRequest, res: NextApiResponse) => void = async (req, res) => {
  const { slug } = req.query;

  if (slug === "robots.txt") {
    res.setHeader("Content-Type", "text/plain");
    res.send(`User-agent: *\nDisallow: /_next/*\nDisallow: /api/*\nDisallow: /me/*\nDisallow: /js`);
    return;
  }

  const originUrl = await getOriginalLink(slug as string);

  // check originUrl is ""
  if (originUrl === "") {
    res.setHeader("Location", NEXT_PUBLIC_BASE_URL);
  } else {
    res.setHeader("Location", originUrl);
  }

  res.statusCode = 301;
  res.end();
};

export default handler;
