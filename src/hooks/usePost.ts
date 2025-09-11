import createPost from "@/apis/createPost";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
