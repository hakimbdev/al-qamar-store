"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Sample related products
const relatedProducts = [
  {
    id: 7,
    name: "Silver Filigree Bracelet",
    category: "Arabian Jewelry",
    price: 119.99,
    image: "https://images.pexels.com/photos/9428319/pexels-photo-9428319.jpeg?auto=compress&cs=tinysrgb&w=500",
    isNew: true,
  },
  {
    id: 10,
    name: "Diamond Crescent Earrings",
    category: "Arabian Jewelry",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.pexels.com/photos/10018403/pexels-photo-10018403.jpeg?auto=compress&cs=tinysrgb&w=500",
    isSale: true,
  },
  {
    id: 15,
    name: "Pearl & Gold Choker",
    category: "Arabian Jewelry",
    price: 249.99,
    image: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    id: 18,
    name: "Sapphire Pendant Necklace",
    category: "Arabian Jewelry",
    price: 349.99,
    image:
      "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=500&sat=-50",
  },
]

export default function RelatedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Card key={product.id} className="group overflow-hidden border-border">
          <div className="relative aspect-square overflow-hidden">
            {/* Product Image */}
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Product Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-primary text-white">New</Badge>}
              {product.isSale && <Badge className="bg-destructive text-white">Sale</Badge>}
            </div>

            {/* Quick Actions */}
            <div className="absolute top-2 right-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white"
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart
                  className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-destructive text-destructive" : ""}`}
                />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>

          <CardContent className="p-4">
            <Link href={`/products/${product.id}`} className="hover:text-primary">
              <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <div className="flex items-center">
              <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button className="w-full" variant="outline">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

