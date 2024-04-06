export interface HomeResponse {
  blocks: {
    id: string;
    title: string;
    api_endpoint: string | null;
    next_page: string | null;
    block_type: string;
    projects?: {
      id: string;
      title: string;
      favorite: boolean;
    }[];
  }[];
}