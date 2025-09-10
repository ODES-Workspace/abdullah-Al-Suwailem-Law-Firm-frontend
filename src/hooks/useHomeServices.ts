import getHomeServices from "@/apis/getHomeServices";
import { useQuery } from "@tanstack/react-query";

function useHomeServices() {
  return useQuery({
    queryKey: ["home-services"],
    queryFn: getHomeServices,
  });
}

export default useHomeServices;
