import axiosInstance from "~/services/axios-services";

interface ShortenLinkResponse {
  path: string;
}

const shortenLink = async (url: string): Promise<string> => {
  const data: ShortenLinkResponse = await axiosInstance.post("/shorten", {
    url,
  });

  return data.path;
};

export default shortenLink;
