import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () => {
  const fetchData = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  };

  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchData,
    staleTime: 1 * 60 * 1000, // 1 Minute
  });
};

export default usePosts;
