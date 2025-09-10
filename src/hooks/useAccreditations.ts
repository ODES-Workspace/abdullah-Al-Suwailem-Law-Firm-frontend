import getAccreditations from "@/apis/getAccreditations";
import { useQuery } from "@tanstack/react-query";

function useAccreditations() {
  return useQuery({
    queryKey: ["accreditations"],
    queryFn: getAccreditations,
  });
}

export default useAccreditations;
