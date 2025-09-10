import getGoals from "@/apis/getGoals";
import { useQuery } from "@tanstack/react-query";

function useGoals() {
  return useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
  });
}

export default useGoals;
