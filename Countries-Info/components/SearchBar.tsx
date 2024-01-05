"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  //   const router = useRouter();
  //   const searchParams = useSearchParams();
  //   const searchString = searchParams.get("search");

  return (
    <form className="relative flex items-center w-full max-w-sm">
      <Input
        type="text"
        // value={searchString}
        placeholder="Search for a country..."
        className="pl-10 w-full max-w-sm"
        // onChange={(e) => router.push(`?search=${e.target.value}`)}
      />
      <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          height="18"
          width="18"
          fill="currentColor"
        >
          <path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </div>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0.5 top-0.5 h-8 w-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          height="18"
          width="18"
          fill="currentColor"
        >
          <path d="M480-120q-17 0-28.5-11.5T440-160v-160q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320v40h280q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H520v40q0 17-11.5 28.5T480-120Zm-320-80q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h160q17 0 28.5 11.5T360-240q0 17-11.5 28.5T320-200H160Zm160-160q-17 0-28.5-11.5T280-400v-40H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h120v-40q0-17 11.5-28.5T320-600q17 0 28.5 11.5T360-560v160q0 17-11.5 28.5T320-360Zm160-80q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520h320q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H480Zm160-160q-17 0-28.5-11.5T600-640v-160q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v40h120q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H680v40q0 17-11.5 28.5T640-600Zm-480-80q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h320q17 0 28.5 11.5T520-720q0 17-11.5 28.5T480-680H160Z" />
        </svg>
      </Button>
    </form>
  );
}
