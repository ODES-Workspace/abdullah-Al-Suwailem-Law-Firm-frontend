import { getMission } from "@/apis";
import { useQuery } from "@tanstack/react-query";

function useMission() {
  return useQuery({
    queryKey: ["mission"],
    queryFn: getMission,
  });
}

export default useMission;
