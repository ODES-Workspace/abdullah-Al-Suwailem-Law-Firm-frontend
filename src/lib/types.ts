export type MetaTranslation = {
  id?: number;
  post_meta_id?: number;
  locale: string;
  value: string;
};

export type Meta = {
  id?: number;
  post_id?: number;
  meta_key?: string;
  value?: string | null;
  translations?: MetaTranslation[];
};

export type Translation = {
  id?: number;
  post_id?: number;
  locale: string;
  title?: string | null;
  description: string | null;
};

export type Item = {
  id?: number;
  post_type: string;
  featured_image?: string | null;
  slug?: string;
  is_active: number;
  created_at?: string;
  updated_at?: string;
  title?: string | null;
  description?: string | null;
  translations?: Translation[];
  metas?: Meta[];
  post_meta?: Meta[];
};
