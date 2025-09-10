import { getFields } from "@/apis";
import { useQuery } from "@tanstack/react-query";

function useFields() {
  return useQuery({
    queryKey: ["fields"],
    queryFn: getFields,
  });
}

export default useFields;
