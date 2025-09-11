import createContact from "@/apis/createContact";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
