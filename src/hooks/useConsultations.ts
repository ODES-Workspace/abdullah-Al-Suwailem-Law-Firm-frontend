import createConsultation from "@/apis/createConsultation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddConsultation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createConsultation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consultant"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
