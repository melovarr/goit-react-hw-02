import axios from "axios";
import type { Article } from "../types/article";

interface ArticlesHttpResponse {
  hits: Article[];
}
export const fetchArticles = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<ArticlesHttpResponse>(
    `http://hn.algolia.com/api/v1/search?query=${topic}`
  );
  return response.data.hits;
};
