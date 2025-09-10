import { getAbout } from "@/apis";
import { useQuery } from "@tanstack/react-query";

function useAbout() {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
}

export default useAbout;
