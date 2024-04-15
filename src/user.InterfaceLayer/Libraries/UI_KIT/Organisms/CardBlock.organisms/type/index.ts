export interface CardBlockProps {
  image_url?: string;
  title?: string;
  description?: string;
  price?: number;
  onClick?: (id: number) => void;
  id?: number;
  isLoading?: boolean;
}
