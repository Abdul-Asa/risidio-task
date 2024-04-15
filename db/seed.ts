import { db } from "./intialize";
import {
  Collection,
  Nft,
  Wallet,
  cartNfts,
  carts,
  collections,
  nftCollections,
  nfts,
  wallets,
} from "./schema";

export const NFTS: Array<Nft> = [
  {
    id: 111,
    title: "Night is coming",
    image: "/images/clouds.svg",
    price: 0.12,
    currency: "BTC",
  },
  {
    id: 222,
    title: "With the stars",
    image: "/images/star.svg",
    price: 0.12,
    currency: "BTC",
  },
  {
    id: 333,
    title: "Summer",
    image: "/images/summer.svg",
    price: 0.12,
    currency: "BTC",
  },
  {
    id: 444,
    title: "Quiet",
    image: "/images/quiet.svg",
    price: 0.12,
    currency: "BTC",
  },
  {
    id: 555,
    title: "Travel",
    image: "/images/travel.svg",
    price: 0.12,
    currency: "BTC",
  },
  {
    id: 666,
    title: "The rain",
    image: "/images/rain.svg",
    price: 0.18,
    currency: "BTC",
  },
];

export const COLLECTIONS: Array<Collection> = [
  {
    id: 11,
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
    numberOfNfts: 120,
  },
  {
    id: 22,
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
    numberOfNfts: 120,
  },
  {
    id: 33,
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
    numberOfNfts: 120,
  },
];

export const WALLETS: Array<Wallet> = [
  {
    id: 1,
    name: "MetaMask",
    icon: "/icons/metamask.png",
    address: "STV6Q...4Z7WD",
    amount: 120,
    currency: "BTC",
  },
  {
    id: 2,
    name: "Trust Wallet",
    icon: "/icons/trust.png",
    address: "0x0987654321",
    amount: 0.12,
    currency: "BTC",
  },
  {
    id: 3,
    name: "Coinbase",
    icon: "/icons/coinbase.png",
    address: "0x1234567890",
    amount: 200,
    currency: "BTC",
  },
];

const seed = async () => {
  console.log("Seeding DB");
  // Clear DB first
  await db.delete(cartNfts);
  await db.delete(nftCollections);
  await db.delete(carts);
  await db.delete(wallets);
  await db.delete(nfts);
  await db.delete(collections);
  console.log("DB Cleared");

  // Seed DB
  await db.insert(collections).values(COLLECTIONS);
  await db.insert(nfts).values(NFTS);
  await db.insert(wallets).values(WALLETS);
  await db
    .insert(nftCollections)
    .values(
      COLLECTIONS.flatMap((collection) =>
        NFTS.map((nft) => ({ nftId: nft.id, collectionId: collection.id }))
      )
    );
  console.log("DB Seeded");
};

seed();
