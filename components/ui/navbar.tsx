"use client";

import {
  Cloud,
  Code,
  Smartphone,
  Menu,
  Search,
  Cpu,
  Database,
  Zap,
} from "lucide-react";
import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
}

export default function Navbar({
  logo = {
    url: "/",
    src: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop", // Placeholder - replace with your actual logo
    alt: "Stryxon Technologies logo",
    title: "Stryxon",
  },

  menu = [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "#services",
      items: [
        {
          title: "Cloud Infrastructure",
          description: "AWS, Azure, GCP and serverless solutions",
          icon: <Cloud className="size-5 shrink-0" />,
          url: "/services/cloud-infrastructure",
        },
        {
          title: "AI Engineering",
          description: "Custom AI agents and machine learning models",
          icon: <Cpu className="size-5 shrink-0" />,
          url: "/services/ai-engineering",
        },
        {
          title: "Web Development",
          description: "React, Next.js and modern web applications",
          icon: <Code className="size-5 shrink-0" />,
          url: "/services/web-development",
        },
        {
          title: "Mobile Development",
          description: "iOS, Android and cross-platform apps",
          icon: <Smartphone className="size-5 shrink-0" />,
          url: "/services/mobile-development",
        },
        {
          title: "DevOps",
          description: "CI/CD, Docker, Kubernetes automation",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/services/devops",
        },
        {
          title: "API Development",
          description: "REST, GraphQL and microservices",
          icon: <Database className="size-5 shrink-0" />,
          url: "/services/api-development",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Speed Checker",
      url: "/#speed-checker",
    },
  ],

  mobileExtraLinks = [
    { name: "Tech Stack", url: "/#stack" },
    { name: "Testimonials", url: "/#testimonials" },
    { name: "Contact", url: "/#contact" },
  ],
}: NavbarProps) {
  const [openSearch, setOpenSearch] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSearch((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href={logo.url} className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-indigo-400" fill="currentColor" />
              <span className="text-xl font-bold text-white">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu className="[&_[data-radix-navigation-menu-viewport]]:rounded-3xl">
                <NavigationMenuList className="rounded-3xl">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpenSearch(true)}
              className="text-gray-300 hover:text-white"
            >
              <Search className="size-4" />
            </Button>

            {/* Contact Button */}
            <Button
              asChild
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={logo.url} className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-indigo-400" fill="currentColor" />
              <span className="text-xl font-bold text-white">{logo.title}</span>
            </Link>
            <div className="flex items-center gap-2">
              {/* Search button mobile */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenSearch(true)}
                className="text-gray-300 hover:text-white"
              >
                <Search className="size-4" />
              </Button>

              {/* Menu Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white"
                  >
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto bg-gray-900 text-white border-gray-800">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={logo.url} className="flex items-center gap-2">
                        <Zap
                          className="w-8 h-8 text-indigo-400"
                          fill="currentColor"
                        />
                        <span className="text-xl font-bold text-white">
                          {logo.title}
                        </span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="border-t border-gray-800 py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <a
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                            href={link.url}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button
                        asChild
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        <a href="/#contact">Contact Us</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
        <CommandInput placeholder="Search services, pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup className="text-gray-500" heading="Services">
            <CommandItem className="text-gray-800 dark:text-gray-200">
              <Link
                href="/services/cloud-infrastructure"
                className="flex w-full items-center"
              >
                <Cloud className="mr-2 size-4" />
                Cloud Infrastructure
              </Link>
            </CommandItem>
            <CommandItem className="text-gray-800 dark:text-gray-200">
              <Link
                href="/services/ai-engineering"
                className="flex w-full items-center"
              >
                <Cpu className="mr-2 size-4" />
                AI Engineering
              </Link>
            </CommandItem>
            <CommandItem className="text-gray-800 dark:text-gray-200">
              <Link
                href="/services/web-development"
                className="flex w-full items-center"
              >
                <Code className="mr-2 size-4" />
                Web Development
              </Link>
            </CommandItem>
            <CommandItem className="text-gray-800 dark:text-gray-200">
              <Link
                href="/services/mobile-development"
                className="flex w-full items-center"
              >
                <Smartphone className="mr-2 size-4" />
                Mobile Development
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup className="text-gray-500" heading="Quick Links">
            <CommandItem className="text-gray-800 dark:text-gray-200">
              <Link href="/about" className="flex w-full">
                About Us
              </Link>
            </CommandItem>
            <CommandItem className="text-gray-800 dark:text-gray-200">
              <Link href="/#speed-checker" className="flex w-full">
                Speed Checker
              </Link>
            </CommandItem>
            <CommandItem className="text-gray-800 dark:text-gray-200">
              <Link href="/#contact" className="flex w-full">
                Contact
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </section>
  );
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem
        key={item.title}
        className="text-gray-300 !rounded-3xl"
      >
        <NavigationMenuTrigger className="!rounded-3xl bg-transparent hover:bg-gray-800 hover:text-white">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-3xl bg-gray-900 border-gray-800">
          <ul className="w-80 p-3">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <a
                  className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white"
                  href={subItem.url}
                >
                  {subItem.icon}
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {subItem.title}
                    </div>
                    {subItem.description && (
                      <p className="text-sm leading-snug text-gray-400">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b border-gray-800"
      >
        <AccordionTrigger className="py-0 font-semibold hover:no-underline text-white">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-gray-800 hover:text-white"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold text-white">
                  {subItem.title}
                </div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-gray-400">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="font-semibold text-white py-2 hover:text-indigo-400 transition-colors"
    >
      {item.title}
    </a>
  );
};
