"use client";
import { useSetAtom } from "jotai";
import { Button } from "./ui/button";
import { sidebarState } from "@/lib/jotai";

const AccountButton = () => {
  const setTrigger = useSetAtom(sidebarState);
  return (
    <Button variant={"outline"} onClick={() => setTrigger(true)}>
      Account
    </Button>
  );
};

export default AccountButton;
