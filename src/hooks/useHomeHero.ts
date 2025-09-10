import { getHomeHero } from "@/apis";
import { useQuery } from "@tanstack/react-query";

function useHomeHero() {
  return useQuery({
    queryKey: ["home-hero"],
    queryFn: getHomeHero,
  });
}

export default useHomeHero;
