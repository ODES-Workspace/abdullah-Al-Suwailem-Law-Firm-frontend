import { getVission } from "@/apis";
import { useQuery } from "@tanstack/react-query";

function useVission() {
  return useQuery({
    queryKey: ["vission"],
    queryFn: getVission,
  });
}

export default useVission;
