"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample product data
const products = [
  {
    id: 1,
    name: "Golden Arabesque Necklace",
    category: "Arabian Jewelry",
    price: 299.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603101/image5_talmgt.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 2,
    name: "Premium Egyptian Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    originalPrice: 55000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600328/image12_etwvxp.jpg",
    isNew: false,
    isSale: true,
    discount: 16,
  },
  {
    id: 3,
    name: "Men's Traditional Thobe",
    category: "Male Wear",
    price: 129.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605781/image8_iowmnl.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Handcrafted Pearl Earrings",
    category: "Arabian Jewelry",
    price: 159.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603100/image4_whm94j.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 5,
    name: "Women's Embroidered Kaftan",
    category: "Female Wear",
    price: 179.99 * 1300,
    originalPrice: 219.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603852/image21_r1if5h.jpg",
    isNew: false,
    isSale: true,
    discount: 18,
  },
  {
    id: 6,
    name: "Leather Arabian Sandals",
    category: "Shoes",
    price: 89.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600321/image24_visflt.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Silver Filigree Bracelet",
    category: "Arabian Jewelry",
    price: 119.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603100/image6_pbmelg.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 8,
    name: "Luxury Velvet Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600328/image7_1_gie05d.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
]

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden border-border">
          <div className="relative aspect-square overflow-hidden">
            {/* Product Image */}
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </Link>

            {/* Product Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-primary text-white">New</Badge>}
              {product.isSale && <Badge className="bg-destructive text-white">Sale</Badge>}
            </div>

            {/* Quick Actions */}
            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex justify-between items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-destructive text-destructive" : ""}`}
                        />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to wishlist</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <Link href={`/products/${product.id}`}>
                          <Eye className="h-5 w-5" />
                          <span className="sr-only">Quick view</span>
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Quick view</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          <CardContent className="p-4">
            <Link href={`/products/${product.id}`} className="hover:text-primary">
              <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <div className="flex items-center">
              <span className="font-semibold text-lg">₦{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through ml-2">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button className="w-full" variant="outline">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

