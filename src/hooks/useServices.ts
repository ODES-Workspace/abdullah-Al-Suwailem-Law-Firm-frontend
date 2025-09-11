import getServices from "@/apis/getServices";
import { useQuery } from "@tanstack/react-query";

function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
}

export default useServices;
