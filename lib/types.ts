type collectionItemType = {
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
  nftList: NftType[];
};

type NftType = {
  id: number;
  title: string;
  image: string;
  price: number;
};

type userType = {
  id: string;
  name: string;
  amount: number;
  currency: string;
  wallet: string;
  nftCollections: NftType[];
};

type applicationType = {
  isLoggedIn: boolean;
  user: userType;
};

export type { collectionItemType, NftType, userType, applicationType };
