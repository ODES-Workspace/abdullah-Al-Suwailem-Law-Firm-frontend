import getPresident from "@/apis/getPresident";
import { useQuery } from "@tanstack/react-query";

function usePresident() {
  return useQuery({
    queryKey: ["president"],
    queryFn: getPresident,
  });
}

export default usePresident;
