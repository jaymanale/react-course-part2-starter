import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.data);
  };

  return useQuery<Todo[], Error>({
    queryKey: ["todos"], // Key to store in cache
    queryFn: fetchTodos, // Actual backend call to fetch call
  });
};

export default useTodos;
