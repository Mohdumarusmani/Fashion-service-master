export interface Product {
  name:                   string;
  sku:                    string;
  url:                    string;
  brand:                  Brand;
  media:                  ProductMedia;
  meta:                   ProductMeta;
  website_id:             string;
  price:                  Price;
  description_text:       string;
  spider:                 string;
  stock:                  Stock;
  classification:         Classification;
  created_at:             CreatedAt;
  updated_at:             CreatedAt;
  similar_products:       SimilarProducts;
  positioning:            Positioning;
  lv_url:                 string;
  price_changes:          PriceChange[];
  price_positioning:      number;
  price_positioning_text: string;
}

export interface Brand {
  name:      string;
  sub_brand: string;
}

export interface Classification {
  l1: string;
  l2: string;
  l3: string;
  l4: string;
}

export interface CreatedAt {
  $date: Date;
}

export interface ProductMedia {
  standard:  Standard[];
  thumbnail: Standard[];
}

export interface Standard {
  order: number;
  url:   string;
}

export interface ProductMeta {
  breadcrumbs:                  { [key: string]: string };
  bert_original_classification: Classification;
  reference:                    string;
}

export interface Positioning {
  page: number;
  rank: number;
}

export interface Price {
  offer_price:   BasketPriceClass;
  regular_price: BasketPriceClass;
  basket_price:  BasketPriceClass;
}

export interface BasketPriceClass {
  value:    number;
  currency: string;
}

export interface PriceChange {
  date:                   CreatedAt;
  previous_offer_price:   number;
  current_offer_price:    number;
  previous_regular_price: number;
  current_regular_price:  number;
}

export interface SimilarProducts {
  meta:            SimilarProductsMeta;
  website_results: { [key: string]: WebsiteResult };
}

export interface SimilarProductsMeta {
  total_results: number;
  min_price:     AvgPriceClass;
  max_price:     AvgPriceClass;
  avg_price:     AvgPriceClass;
  avg_discount:  number;
}

export interface AvgPriceClass {
  regular: number;
  offer:   number;
  basket:  number;
}

export interface WebsiteResult {
  meta:      SimilarProductsMeta;
  knn_items: KnnItem[];
}

export interface KnnItem {
  _index:  string;
  _type:   string;
  _id:     string;
  _score:  number;
  _source: Source;
}

export interface Source {
  name:             string;
  url:              string;
  brand:            Brand;
  media:            SourceMedia;
  meta:             SourceMeta;
  stock:            Stock;
  sku:              number;
  description_text: string;
  website_id:       string;
  price:            Price;
  sizes:            string[];
  spider:           string;
  classification:   Classification;
  created_at:       CreatedAt;
  updated_at:       CreatedAt;
  lv_url:           string;
  positioning:      Positioning;
}

export interface SourceMedia {
  standard:  Standard[];
  thumbnail: Standard[];
  large:     Standard[];
}

export interface SourceMeta {
  breadcrumbs:                  { [key: string]: string };
  gender:                       string;
  bert_original_classification: Classification;
}

export interface Stock {
  available: boolean;
}
