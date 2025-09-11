import { logout } from "@/apis/authServices";
import { useMutation } from "@tanstack/react-query";

export default function useLogout() {
  return useMutation({
    mutationFn: logout,
  });
}
