interface Slug {
  params: {
    slug: string;
  };
}

const getAllShortenLink: () => Promise<Slug[]> = async () => {
  return await Promise.resolve([
    {
      params: {
        slug: "daihiep",
      },
    },
  ]);
};

export default getAllShortenLink;
