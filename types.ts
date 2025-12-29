
export interface LinkItem {
  id: string;
  title: string;
  url: string;
  type: 'premium' | 'social' | 'message' | 'shop';
  icon?: string;
  isPriority?: boolean;
}

export interface CreatorProfile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
  verified: boolean;
  links: LinkItem[];
}

export enum LinkType {
  PREMIUM = 'premium',
  SOCIAL = 'social',
  MESSAGE = 'message',
  SHOP = 'shop'
}
