import axiosInstance from "~/services/axios-services";

interface GetOriginalLinkResponse {
  target: string;
}

const getOriginalLink: (url: string) => Promise<string> = async (url) => {
  const result: GetOriginalLinkResponse = await axiosInstance.get("/shorten?path=" + url);

  return result.target;
};

export default getOriginalLink;
