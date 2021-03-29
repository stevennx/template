import Link from "next/link";
import React from "react";
import { User } from "src/interfaces";

type Props = {
  data: User;
};

const ListItem: React.FC<Props> = ({ data }) => (
  <React.Fragment>
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <div>
        {data.id}: {data.name}
      </div>
    </Link>
    <div tw="flex">
      <div tw="flex-none w-48 relative">
        <img
          src="/classic-utility-jacket.jpg"
          alt=""
          tw="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <form tw="flex-auto p-6">
        <div tw="flex flex-wrap">
          <h1 tw="flex-auto text-xl font-semibold">Classic Utility Jacket</h1>
          <div tw="text-xl font-semibold text-gray-500">$110.00</div>
          <div tw="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
          </div>
        </div>
        <div tw="flex items-baseline mt-4 mb-6">
          <div tw="space-x-2 flex">
            <label>
              <input
                tw="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
                name="size"
                type="radio"
                value="xs"
                checked
              />
              XS
            </label>
            <label>
              <input
                tw="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="s"
              />
              S
            </label>
            <label>
              <input
                tw="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="m"
              />
              M
            </label>
            <label>
              <input
                tw="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="l"
              />
              L
            </label>
            <label>
              <input
                tw="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="xl"
              />
              XL
            </label>
          </div>
          <div tw="ml-auto text-sm text-gray-500 underline">Size Guide</div>
        </div>
        <div tw="flex space-x-3 mb-4 text-sm font-medium">
          <div tw="flex-auto flex space-x-3">
            <button
              tw="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
              type="submit"
            >
              Buy now
            </button>
            <button
              tw="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            tw="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p tw="text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  </React.Fragment>
);

export default ListItem;
