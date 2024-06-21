export const getNews = async (category, page, pageSize) => {
  try {
    const url_key = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_NEWS_API
    }&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url_key);
    let finalData = await data.json();

    return {
      articles: finalData?.articles,
      totalResults: finalData?.totalResults,
    };
  } catch (error) {
    console.log(error);
  }
};
