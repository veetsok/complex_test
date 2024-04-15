import { ProductsResponse } from "@/business.InterfaceLayer/hooks/store/useProducts/type";

export interface ProductsWidgetProps {
  products?: ProductsResponse;
  isLoading?: boolean;
}
