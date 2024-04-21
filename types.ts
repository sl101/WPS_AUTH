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

export interface Project {
  id: string;
  title: string;
  image?: string;
  isFavorite?: boolean;
}

export interface AuthStore {
  email: string;
  name: string;
  auth_token: string;
  unique_id: string;
  uuid: string;
  device_id: string;
  profile_id: string;
  status: boolean;
}

export interface AuthResponce {
  email: string;
  name: string;
  auth_token: string;
  unique_id: string;
  uuid: string;
  profile_id: string;
  status: boolean;
}
