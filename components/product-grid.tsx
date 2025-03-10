"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample product data - expanded for product listing page
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
    price: 8500,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605789/image18_sjyd1f.jpg",
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
  {
    id: 9,
    name: "Men's Embroidered Bisht",
    category: "Male Wear",
    price: 249.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605788/image17_jmiljy.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 10,
    name: "Diamond Crescent Earrings",
    category: "Arabian Jewelry",
    price: 399.99 * 1300,
    originalPrice: 499.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603100/image8_txvcze.jpg",
    isNew: false,
    isSale: true,
    discount: 20,
  },
  {
    id: 11,
    name: "Women's Silk Jalabiya",
    category: "Female Wear",
    price: 159.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603852/image20_qoi57t.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 12,
    name: "Handmade Leather Slippers",
    category: "Shoes",
    price: 79.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600323/image28_1_hhj2m3.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 13,
    name: "Classic Black Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600327/image10_1_d6qe0y.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 14,
    name: "Embroidered Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600327/image11_s74j4t.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 15,
    name: "Modern Cut Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600327/image8_1_cwtgyx.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 16,
    name: "Designer Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600326/image13_s2p88s.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 17,
    name: "Elegant Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600326/image15_talsek.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 18,
    name: "Premium Abaya Collection",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600326/image17_d5nq58.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 19,
    name: "Stylish Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600326/image14_si2zq8.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 20,
    name: "Contemporary Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600326/image18_rbjk9n.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 21,
    name: "Royal Abaya",
    category: "Egyptian Abayas",
    price: 46000,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600325/image19_oaietw.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 22,
    name: "Classic Arabian Sandals",
    category: "Shoes",
    price: 85.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600322/image29_vv2gx0.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 23,
    name: "Premium Leather Sandals",
    category: "Shoes",
    price: 95.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600321/image27_w579k3.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 24,
    name: "Traditional Arabian Footwear",
    category: "Shoes",
    price: 82.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600321/image28_x2zc3j.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 25,
    name: "Elegant Arabian Slippers",
    category: "Shoes",
    price: 78.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600321/image24_visflt.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 26,
    name: "Elegant Gold Necklace",
    category: "Arabian Jewelry",
    price: 289.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603100/image7_awdzkp.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 27,
    name: "Traditional Gold Set",
    category: "Arabian Jewelry",
    price: 459.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603100/image9_ft9zue.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 28,
    name: "Royal Gold Collection",
    category: "Arabian Jewelry",
    price: 599.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603100/image10_ciaaee.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 29,
    name: "Elegant Evening Kaftan",
    category: "Female Wear",
    price: 189.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603851/image19_wmgafp.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 30,
    name: "Designer Jalabiya",
    category: "Female Wear",
    price: 209.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603851/image18_fpwr7n.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 31,
    name: "Luxury Kaftan Set",
    category: "Female Wear",
    price: 249.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603851/image17_fmsoo3.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 32,
    name: "Modern Arabic Dress",
    category: "Female Wear",
    price: 169.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603841/image16_zkpvrj.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 33,
    name: "Premium Jalabiya Collection",
    category: "Female Wear",
    price: 229.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603841/image12_v2t0zz.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 34,
    name: "Traditional Arabic Gown",
    category: "Female Wear",
    price: 199.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603841/image13_cq2eaz.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 35,
    name: "Embellished Evening Dress",
    category: "Female Wear",
    price: 259.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603841/image15_dfmbza.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 36,
    name: "Royal Arabic Ensemble",
    category: "Female Wear",
    price: 279.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603841/image14_s8ijoy.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 37,
    name: "Classic Jalabiya Design",
    category: "Female Wear",
    price: 189.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603841/image11_x2vbun.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 38,
    name: "Formal Arabic Dress",
    category: "Female Wear",
    price: 219.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603840/image10_we0ism.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 39,
    name: "Contemporary Kaftan",
    category: "Female Wear",
    price: 199.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603840/image8_mdzeyv.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 40,
    name: "Elegant Arabic Dress",
    category: "Female Wear",
    price: 239.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603840/image9_vktbcw.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 41,
    name: "Premium Arabic Thobe",
    category: "Male Wear",
    price: 189.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605789/image20_tg8kii.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 42,
    name: "Luxury Bisht Collection",
    category: "Male Wear",
    price: 299.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605782/image14_dq8ggg.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
  {
    id: 43,
    name: "Traditional Arabic Robe",
    category: "Male Wear",
    price: 8600,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605781/image10_wefgzb.jpg",
    isNew: true,
    isSale: false,
    discount: 0,
  },
  {
    id: 44,
    name: "Designer Arabic Thobe",
    category: "Male Wear",
    price: 219.99 * 1300,
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605782/image12_ty6ena.jpg",
    isNew: false,
    isSale: false,
    discount: 0,
  },
]

export default function ProductGrid() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

