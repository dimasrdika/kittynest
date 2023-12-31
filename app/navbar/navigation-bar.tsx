"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Kitty Dialog",
    href: "/docs/kitty-nest/dialog",
    description:
      "A modal dialog that brings your kitty's attention to important content and expects a response.",
  },
  {
    title: "Purring Card",
    href: "/docs/kitty-nest/purring-card",
    description:
      "For your kitty to preview content available behind a link with soothing purring sounds.",
  },
  {
    title: "Nap Progress",
    href: "/docs/kitty-nest/nap-progress",
    description:
      "Displays an indicator showing the completion progress of a catnap, typically displayed as a cozy progress bar.",
  },
  {
    title: "Scratching Area",
    href: "/docs/kitty-nest/scratching-area",
    description:
      "Visually or semantically separates your kitty's favorite scratching spots.",
  },
  {
    title: "Playful Tabs",
    href: "/docs/kitty-nest/playful-tabs",
    description:
      "A set of layered sections of content—known as tab panels—that your kitty can playfully swipe through.",
  },
  {
    title: "Catnip Tooltip",
    href: "/docs/kitty-nest/catnip-tooltip",
    description:
      "A popup that displays information related to a catnip toy when your kitty's attention focuses on it.",
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden  md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src="/paws.png" className="w-8 h-8" alt="paws" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      KittyNest
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with KittyNest UI
                      and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Explore the world of Kitty Nest UI components designed for your
                cat delight.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install the Kitty Nest UI library for your cats favorite
                apps.
              </ListItem>
              <ListItem href="/docs/kitty-nest/typography" title="Typography">
                Styles for kitty headings, meow-agraphs, and listetc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
