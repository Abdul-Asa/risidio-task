import { eq } from 'drizzle-orm';
import { db } from './intialize';
import {
  Cart,
  CollectionWithNfts,
  cartNfts,
  carts,
  collections,
  wallets,
} from './schema';

export const getSingleCollection = async (
  slug: string
): Promise<CollectionWithNfts> => {
  const records = await db.query.collections.findFirst({
    where: eq(collections.slug, slug),
    with: {
      nftCollections: {
        with: {
          nfts: true,
        },
      },
    },
  });

  if (!records) {
    throw new Error(`Collection with slug ${slug} not found`);
  }

  const { nftCollections, ...collection } = records;

  return {
    ...collection,
    nfts: nftCollections
      .filter(({ nfts }) => Boolean(nfts))
      .map(({ nfts }) => nfts!),
  };
};

export const getAllCollections = async () => {
  const records = await db.query.collections.findMany({
    with: {
      nftCollections: {
        with: {
          nfts: true,
        },
      },
    },
  });

  if (!records) {
    throw new Error('No trending collection found');
  }

  return records.map(({ nftCollections, ...collection }) => ({
    ...collection,
    nfts: nftCollections
      .filter(({ nfts }) => Boolean(nfts))
      .map(({ nfts }) => nfts!),
  }));
};

export const getUserWalletNftCart = async (walletId: number) => {
  const record = await db.query.carts.findFirst({
    where: eq(carts.walletId, walletId),
  });

  if (!record) {
    return null;
  }

  const cartToNftRecords = await db.query.cartNfts.findMany({
    where: eq(cartNfts.cartId, record.id),
    with: { nfts: true },
  });

  const nfts = cartToNftRecords.map(({ nfts }) => nfts!);

  return { ...record, nfts };
};

export const createWalletNftCart = async (walletId: number): Promise<Cart> => {
  const insertedRecord = await db
    .insert(carts)
    .values({ walletId })
    .returning();

  return insertedRecord[0];
};

export const addNftToCart = async ({
  cartId,
  nftId,
}: {
  cartId: number;
  nftId: number;
}) => {
  return await db.insert(cartNfts).values({ cartId, nftId }).returning();
};

export const getWallet = async (walletId: number) => {
  const record = await db.query.wallets.findFirst({
    where: eq(wallets.id, walletId),
  });

  return record;
};
