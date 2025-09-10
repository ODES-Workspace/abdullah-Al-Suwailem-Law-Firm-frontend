import getFeatures from "@/apis/getFeatures";
import { useQuery } from "@tanstack/react-query";

function useFeatures() {
  return useQuery({
    queryKey: ["features"],
    queryFn: getFeatures,
  });
}

export default useFeatures;
