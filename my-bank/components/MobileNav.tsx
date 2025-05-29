"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            width={30}
            height={30}
            className="cursor-pointer"
            src="hamburger.svg"
            alt="hamburger"
          />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]" side="left">
          <SheetClose >
            <nav className="flex flex-col gap-4">
              <Link
                rel="stylesheet"
                href="/"
                className=" flex mb-12 cursor-pointer items-center gap-2"
              >
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={34}
                  height={34}
                  className="size-[24px] max-xl:size-14"
                />
                <h1 className="sidebar-logo">Zel</h1>
              </Link>
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);
                return (
                  <SheetClose key={item.route} asChild>
                    <Link
                      href={"item.route"}
                      key={item.label}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        className={cn({ "brightness-[3] invert-0": isActive })}
                        height={20}
                        width={20}
                      />
                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "!text-white": isActive,
                        })}
                      >
                        {" "}
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
              USER
            </nav>
          </SheetClose>
          
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
