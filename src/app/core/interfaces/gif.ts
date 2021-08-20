export interface GifQuery {
  q: string;
  limit: number;
  offset: number;
}

export interface GifResponse {
  data: Gif[];
  pagination: Pagination;
  meta: Object;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface Gif {
  id: string;
  images: GiphyImages;
}

export interface GiphyImages {
  preview_gif: Image;
  downsized: Image;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}
