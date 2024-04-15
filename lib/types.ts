type Collection = {
  id: number;
  slug: string;
  title: string;
  description: string;
  artist: string;
  avatar: string;
  image: string;
  trending: boolean;
  lowestPrice: number;
  highestPrice: number;
  numberOfNFTs: number;
  currency: string;
  nftList: Nft[];
};

type Nft = {
  id: number;
  title: string;
  image: string;
  price: number;
};

type User = {
  id: string;
  name: string;
  amount: number;
  currency: string;
  wallet: string;
  nftCollections: User[];
  isLoggedIn: boolean;
};

type App = {
  isLoggedIn: boolean;
  user: User;
};

export type { Collection, Nft, User, App };
