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
}): Promise<{ success: boolean; error?: string }> {
  try {
    const wallet = await getWallet(walletId);
    const nft = await getNft(nftId);
    const existingCart = await getUserWalletNftCart(walletId);

    if (!wallet || !nft) {
      return { success: false, error: "Wallet or NFT not found" };
    }

    const cart = existingCart
      ? existingCart
      : await createWalletNftCart(Number(walletId));

    // Check if NFT is already in this cart
    if (existingCart?.nfts.some((cartNft) => cartNft.id === nftId)) {
      // NFT already in cart, return success (idempotent operation)
      return { success: true };
    }

    if (nft.price > wallet.amount) {
      return {
        success: false,
        error:
          "Insufficient funds in wallet. Please add more balance to continue.",
      };
    }

    await updateWallet({
      walletId: wallet.id,
      amount: wallet.amount - nft.price,
    });
    await addNftToCart({ cartId: cart.id, nftId });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to add NFT to cart", error);
    // Return a user-friendly error instead of throwing
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while adding NFT to cart",
    };
  }
}
