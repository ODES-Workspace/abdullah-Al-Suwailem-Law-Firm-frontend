import getPartners from "@/apis/getPartners";
import { useQuery } from "@tanstack/react-query";

function usePartners() {
  return useQuery({
    queryKey: ["partners"],
    queryFn: getPartners,
  });
}

export default usePartners;
