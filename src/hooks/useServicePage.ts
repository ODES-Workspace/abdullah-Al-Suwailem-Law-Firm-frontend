import getServicePage from "@/apis/getServicePage";
import { useQuery } from "@tanstack/react-query";

function useServicePage() {
  return useQuery({
    queryKey: ["servicePage"],
    queryFn: getServicePage,
  });
}

export default useServicePage;
