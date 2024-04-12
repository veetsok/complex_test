import { useProducts } from "@/business.InterfaceLayer/hooks/store/useQueryStore/useQueryStore";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";

export default function Home() {
  const { products } = useProducts();
  console.log(products);

  return <main className={`${globalContainer}`}>adssd</main>;
}
