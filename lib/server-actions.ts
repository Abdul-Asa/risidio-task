"use server";
import { cookies } from "next/headers";
import { userType } from "./types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function setUserCookie(userData: userType, path?: string) {
  cookies().set("session", JSON.stringify(userData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
  redirect(path || "/");
}

export async function getUserCookie(): Promise<userType> {
  const sessionData = cookies().get("session")?.value;
  if (!sessionData) {
    return {
      id: "",
      name: "",
      amount: 0,
      currency: "",
      wallet: "",
      nftCollections: [],
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

export async function updateUserData(userData: userType) {
  cookies().set("session", JSON.stringify(userData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
}
