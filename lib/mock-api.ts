export const collectionItems = [
  {
    id: 1,
    slug: "night-sky",
    title: "Night sky",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    artist: "Léa Jacquot",
    avatar: "/avatars/avatar.svg",
    image: "/images/star.svg",
    trending: true,
    lowestPrice: 0.12,
    highestPrice: 0.18,
    numberOfNFTs: 120,
    currency: "BTC",
    nftList: [
      {
        id: 1.1,
        title: "Night is coming",
        image: "/images/clouds.svg",
        price: 0.12,
      },
      {
        id: 1.2,
        title: "With the stars",
        image: "/images/star.svg",
        price: 0.12,
      },
      {
        id: 1.3,
        title: "Summer",
        image: "/images/summer.svg",
        price: 0.12,
      },
      {
        id: 1.4,
        title: "Quiet",
        image: "/images/quiet.svg",
        price: 0.12,
      },
      {
        id: 1.5,
        title: "Travel",
        image: "/images/travel.svg",
        price: 0.12,
      },
      {
        id: 1.6,
        title: "The rain",
        image: "/images/rain.svg",
        price: 0.18,
      },
    ],
  },
  {
    id: 2,
    slug: "future",
    title: "Future",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    artist: "Julien",
    avatar: "/avatars/avatar2.svg",
    image: "/images/future.png",
    trending: false,
    lowestPrice: 0.12,
    highestPrice: 0.18,
    numberOfNFTs: 120,
    currency: "BTC",
    nftList: [
      {
        id: 2.1,
        title: "Night is coming",
        image: "/images/clouds.svg",
        price: 0.12,
      },
      {
        id: 2.2,
        title: "With the stars",
        image: "/images/star.svg",
        price: 0.12,
      },
      {
        id: 2.3,
        title: "Summer",
        image: "/images/summer.svg",
        price: 0.12,
      },
      {
        id: 2.4,
        title: "Quiet",
        image: "/images/quiet.svg",
        price: 0.12,
      },
      {
        id: 2.5,
        title: "Travel",
        image: "/images/travel.svg",
        price: 0.12,
      },
      {
        id: 2.6,
        title: "The rain",
        image: "/images/rain.svg",
        price: 0.18,
      },
    ],
  },
  {
    id: 3,
    slug: "mother-nature",
    title: "Mother nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    artist: "Maria",
    avatar: "/avatars/avatar3.svg",
    image: "/images/nature.png",
    trending: false,
    lowestPrice: 0.12,
    highestPrice: 0.18,
    numberOfNFTs: 120,
    currency: "BTC",
    nftList: [
      {
        id: 3.1,
        title: "Night is coming",
        image: "/images/clouds.svg",
        price: 0.12,
      },
      {
        id: 3.2,
        title: "With the stars",
        image: "/images/star.svg",
        price: 0.12,
      },
      {
        id: 3.3,
        title: "Summer",
        image: "/images/summer.svg",
        price: 0.12,
      },
      {
        id: 3.4,
        title: "Quiet",
        image: "/images/quiet.svg",
        price: 0.12,
      },
      {
        id: 3.5,
        title: "Travel",
        image: "/images/travel.svg",
        price: 0.12,
      },
      {
        id: 3.6,
        title: "The rain",
        image: "/images/rain.svg",
        price: 0.18,
      },
    ],
  },
];

export const walletList = [
  {
    name: "MetaMask",
    icon: "/metamask.svg",
  },
  {
    name: "Trust Wallet",
    icon: "/trust-wallet.svg",
  },
  {
    name: "Coinbase t",
    icon: "/coinbase-wallet.svg",
  },
];

export const mockCollectionWithNfts = {
  id: 0,
  title: "Night sky",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  slug: "night-sky",
  avatar: "/avatars/avatar.svg",
  image: "/images/clouds.svg",
  trending: false,
  lowestPrice: 0.12,
  highestPrice: 0.18,
  numberOfNfts: 6,
  artist: "Léa Jacquot",
  nfts: [
    {
      id: 0,
      title: "Night is coming",
      image: "/images/clouds.svg",
      price: 0.12,
      currency: "BTC",
    },
    {
      id: 1,
      title: "With the stars",
      image: "/images/star.svg",
      price: 0.12,
      currency: "BTC",
    },
    {
      id: 2,
      title: "Summer",
      image: "/images/summer.svg",
      price: 0.12,
      currency: "BTC",
    },
  ],
};

export const mockNft = {
  id: 0,
  title: "Night is coming",
  image: "/images/quiet.svg",
  price: 0.92,
  currency: "ETH",
};
