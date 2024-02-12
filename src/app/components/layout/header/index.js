"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { isEmpty } from "lodash";

import { getPathNameFromUrl } from "../../../utils/miscellaneous";
import { Bag, BurgerIcon, TailwindIcon, User, Wishlist } from "@/app/icons";
import { AppContext } from "../../context";

const Header = ({ header }) => {
  const [cart, setCart] = useContext(AppContext);

  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle } =
    header || {};

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <>
      <div className="header">
        <nav className="bg-white py-5">
          <div className="flex items-center justify-between flex-wrap container mx-auto">
            <div className="flex items-center flex-shrink-0 text-black mr-20">
              <Link href="/">
                {siteLogoUrl ? (
                  <img
                    className="mr-2"
                    src={siteLogoUrl}
                    alt={`${siteTitle} logo`}
                    width="86"
                    height="86"
                  />
                ) : (
                  <TailwindIcon />
                )}
              </Link>
              <span>
                <Link href="/" className="font-semibold text-xl tracking-tight">
                  {siteTitle || "WooNext"}
                </Link>
                {siteDescription ? (
                  <p className="mb-0">{siteDescription}</p>
                ) : null}
              </span>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setMenuVisibility(!isMenuVisible)}
                className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
              >
                <BurgerIcon className="fill-current h-3 w-3" />
              </button>
            </div>
            <div
              className={`${
                isMenuVisible ? "max-h-full" : "h-0"
              } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-sm font-medium uppercase lg:flex-grow">
                {!isEmpty(headerMenuItems) && headerMenuItems.length
                  ? headerMenuItems.map((menuItem) => (
                      <Link
                        key={menuItem?.ID}
                        href={getPathNameFromUrl(menuItem?.url ?? "") || "/"}
                        className="block mt-4 lg:inline-block lg:mt-0 hover:text-brand-royal-blue duration-500 mr-10"
                        dangerouslySetInnerHTML={{ __html: menuItem.title }}
                      ></Link>
                    ))
                  : null}
                <Link
                  href="/blog"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-brand-royal-blue duration-500 mr-10"
                >
                  Blog
                </Link>
              </div>
              <div className="text-sm font-medium">
                <Link
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <User className="mr-1 lg:mr-0" />
                    Profile
                  </span>
                </Link>
                <Link
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Wishlist className="mr-1 lg:mr-0" />
                    Wishlist
                  </span>
                </Link>
                <Link
                  href="/cart"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Bag className="mr-1 lg:mr-0" />
                    <span className="ml-1">
                      Bag{cart?.totalQty ? `(${cart?.totalQty})` : null}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
