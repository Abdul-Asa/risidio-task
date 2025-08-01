import { relations } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

//Table for nfts
export const nfts = sqliteTable("nfts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  image: text("image").notNull(),
  price: integer("price").notNull(),
  currency: text("currency").notNull(),
});

//Table for collections
export const collections = sqliteTable("collections", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  slug: text("slug").notNull(),
  avatar: text("avatar").notNull(),
  image: text("image").notNull(),
  trending: integer("trending", { mode: "boolean" }).notNull(),
  lowestPrice: integer("lowest_price").notNull(),
  highestPrice: integer("highest_price").notNull(),
  numberOfNfts: integer("number_of_nfts").notNull(),
  artist: text("artist").notNull(),
});

//An NFT can belong to multiple collections
export const nftRelations = relations(nfts, ({ many }) => ({
  nftCollections: many(nftCollections),
}));

//A collection can have multiple NFTs
export const collectionRelations = relations(collections, ({ many }) => ({
  nftCollections: many(nftCollections),
}));

//Table for nftCollections
export const nftCollections = sqliteTable("nft_collections", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nftId: integer("nft_id").references(() => nfts.id),
  collectionId: integer("collection_id").references(() => collections.id),
});

//Relations for nftCollections
export const nftCollectionsRelations = relations(nftCollections, ({ one }) => ({
  nfts: one(nfts, {
    fields: [nftCollections.nftId],
    references: [nfts.id],
  }),
  collections: one(collections, {
    fields: [nftCollections.collectionId],
    references: [collections.id],
  }),
}));

//Table for wallets
export const wallets = sqliteTable("wallets", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  address: text("address").notNull(),
  currency: text("currency").notNull(),
  amount: integer("amount").notNull(),
});

//Table for carts
export const carts = sqliteTable("carts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  walletId: integer("wallet_id").references(() => wallets.id),
});

//Table for cartNfts
export const cartNfts = sqliteTable("cart_nfts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  cartId: integer("cart_id").references(() => carts.id),
  nftId: integer("nft_id").references(() => nfts.id),
});

//A wallet only has one cart
export const walletRelations = relations(wallets, ({ one }) => ({
  cart: one(carts, {
    fields: [wallets.id],
    references: [carts.walletId],
  }),
}));
//A cart can have multiple NFTs
export const cartNftRelations = relations(cartNfts, ({ one }) => ({
  nfts: one(nfts, {
    fields: [cartNfts.nftId],
    references: [nfts.id],
  }),
}));

export type Nft = typeof nfts.$inferSelect;
export type NftCollection = typeof nftCollections.$inferSelect;
export type Collection = typeof collections.$inferSelect;
export type Wallet = typeof wallets.$inferSelect;
export type Cart = typeof carts.$inferSelect;
export type CartNft = typeof cartNfts.$inferSelect;
export type CollectionWithNfts = Collection & { nfts: Nft[] };
export type CartWithNfts = Cart & { nfts: Nft[] };
