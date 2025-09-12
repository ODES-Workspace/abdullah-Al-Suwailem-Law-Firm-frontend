import { login } from "@/apis/authServices";
import { useMutation } from "@tanstack/react-query";

function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}

export default useLogin;
