import createPost from "@/apis/createPost";
import deletePost from "@/apis/deletePost";
import updatePost from "@/apis/updatePost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddPost = (queryKey: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("تم إضافة البيانات بنجاح");
    },
    onError: (error) => {
      console.log(error);
      toast.error("حدث خطأ ما، حاول مرة أخرى");
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("تم تحديث البيانات بنجاح");
    },
    onError: (error) => {
      console.log(error);
      toast.error("حدث خطأ ما، حاول مرة أخرى");
    },
  });
};

export const useDeletePost = (queryKey: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("تم حذف البيانات بنجاح");
    },
    onError: (error) => {
      console.log(error);
      toast.error("حدث خطأ ما، حاول مرة أخرى");
    },
  });
};
