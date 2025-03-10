"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search, ShoppingCart, User, Heart, Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"

const categories = [
  { name: "Arabian Jewelry", href: "/category/jewelry" },
  { name: "Male Wear", href: "/category/male-wear" },
  { name: "Female Wear", href: "/category/female-wear" },
  { name: "Shoes", href: "/category/shoes" },
  { name: "Egyptian Abayas", href: "/category/abayas" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-950 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm">
        Free shipping on orders over $100 | Use code WELCOME10 for 10% off your first order
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20%282%29-7ooQFoFhUUDpEK1l1Zyg7XrHRw0A42.png"
            alt="Qamar Beit Logo"
            width={120}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center text-sm font-medium">
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category.href} asChild>
                  <Link href={category.href} className="w-full">
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/products" className="w-full">
                  All Products
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/collections"
            className={`text-sm font-medium ${pathname === "/collections" ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            Collections
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${pathname === "/about" ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center relative">
            <Input type="search" placeholder="Search..." className="w-[200px] lg:w-[300px] pr-8" />
            <Search className="absolute right-2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>

          {/* Account */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-background border-t">
          <div className="p-4">
            <Input type="search" placeholder="Search products..." className="w-full mb-4" />
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-base font-medium ${pathname === "/" ? "text-primary" : "text-foreground"}`}
              >
                Home
              </Link>
              <div className="border-t pt-2">
                <p className="font-medium mb-2">Shop by Category</p>
                {categories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block py-2 pl-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link href="/products" className="block py-2 pl-2 text-sm text-muted-foreground hover:text-primary">
                  All Products
                </Link>
              </div>
              <Link
                href="/collections"
                className={`text-base font-medium ${pathname === "/collections" ? "text-primary" : "text-foreground"}`}
              >
                Collections
              </Link>
              <Link
                href="/about"
                className={`text-base font-medium ${pathname === "/about" ? "text-primary" : "text-foreground"}`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-base font-medium ${pathname === "/contact" ? "text-primary" : "text-foreground"}`}
              >
                Contact
              </Link>
              <div className="border-t pt-4 mt-2">
                <div className="flex space-x-4">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/account">My Account</Link>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href="/cart">Cart (3)</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

