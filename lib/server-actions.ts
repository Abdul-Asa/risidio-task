"use server";
import { cookies } from "next/headers";
import { User } from "./types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  addNftToCart,
  createWalletNftCart,
  getNft,
  getUserWalletNftCart,
  getWallet,
  updateWallet,
} from "@/db/queries";

export async function setUserCookie(userData: User, path?: string) {
  cookies().set("session", JSON.stringify(userData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
  redirect(path || "/");
}

export async function getUserCookie(): Promise<User> {
  const sessionData = cookies().get("session")?.value;
  if (!sessionData) {
    return {
      walletId: 0,
      address: "",
      wallet: "",
      isLoggedIn: false,
    };
  }
  return JSON.parse(sessionData);
}

export async function removeUserCookie() {
  cookies().set("session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: -1,
    path: "/",
  });
  revalidatePath("/");
}

export async function updateCart({
  nftId,
  walletId,
}: {
  walletId: number;
  nftId: number;
}) {
  try {
    const wallet = await getWallet(walletId);
    const nft = await getNft(nftId);
    const existingCart = await getUserWalletNftCart(walletId);

    if (!wallet || !nft) {
      throw new Error("Wallet or NFT not found");
    }

    const cart = existingCart
      ? existingCart
      : await createWalletNftCart(Number(walletId));

    if (nft.price > wallet.amount) {
      throw new Error("Insufficient funds in wallet");
    }

    await updateWallet({
      walletId: wallet.id,
      amount: wallet.amount - nft.price,
    });
    await addNftToCart({ cartId: cart.id, nftId });

    revalidatePath("/");
  } catch (error) {
    console.error("Failed to add NFT to cart", error);
    throw error; // Throw the error so it can be handled
  }
}
