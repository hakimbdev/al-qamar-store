import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, Star, Truck, RotateCcw, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RelatedProducts from "@/components/related-products"

// This would typically come from a database or API
const product = {
  id: 1,
  name: "Gold Arabesque Necklace",
  category: "Arabian Jewelry",
  price: 299.99,
  description:
    "This exquisite Gold Arabesque Necklace showcases the intricate craftsmanship of Arabian jewelry artisans. Featuring delicate geometric patterns inspired by traditional Islamic art, this piece is crafted from 18K gold with meticulous attention to detail. The pendant hangs from a fine gold chain, creating an elegant statement piece that captures the essence of Arabian luxury.",
  features: [
    "18K gold construction",
    "Intricate arabesque pattern",
    "Secure lobster clasp",
    "Length: 18 inches (45.7 cm)",
    "Pendant size: 1.2 inches (3 cm)",
    "Weight: 8.5 grams",
  ],
  material: "18K Gold",
  images: [
    "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9428319/pexels-photo-9428319.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10018403/pexels-photo-10018403.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  colors: ["Gold", "Rose Gold", "White Gold"],
  sizes: ['16"', '18"', '20"', '22"'],
  stock: 12,
  sku: "JWL-GAN-001",
  rating: 4.8,
  reviewCount: 24,
  care: "Clean with a soft, lint-free cloth. Avoid contact with perfumes, lotions, and chemicals. Store in a jewelry box or pouch when not in use.",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/products" className="text-muted-foreground hover:text-primary">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link
          href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-muted-foreground hover:text-primary"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium text-foreground">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg border cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : i < product.rating
                        ? "text-yellow-400 fill-yellow-400 opacity-50"
                        : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>

          {/* Description */}
          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <Button key={color} variant={index === 0 ? "default" : "outline"} className="rounded-md px-4">
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Size</h3>
              <Button variant="link" className="p-0 h-auto text-primary">
                Size Guide
              </Button>
            </div>
            <Select defaultValue={product.sizes[1]}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center border rounded-md w-32">
              <Button variant="ghost" size="icon" className="rounded-none">
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1 text-center">1</div>
              <Button variant="ghost" size="icon" className="rounded-none">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Buy Now
            </Button>
          </div>

          {/* SKU & Stock */}
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <div className="mr-6">
              <span className="font-medium text-foreground">SKU:</span> {product.sku}
            </div>
            <div>
              <span className="font-medium text-foreground">Availability:</span>{" "}
              {product.stock > 0 ? `In Stock (${product.stock} items)` : "Out of Stock"}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center">
              <Truck className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm">Free shipping over $100</span>
            </div>
            <div className="flex items-center">
              <RotateCcw className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm">30-day returns</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm">2-year warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="details"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="care"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
            >
              Care Instructions
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
            >
              Reviews ({product.reviewCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-6">
            <div className="prose max-w-none dark:prose-invert">
              <p>{product.description}</p>
              <p>
                The arabesque pattern is a hallmark of Islamic art and architecture, characterized by its rhythmic
                linear patterns of interlacing foliage and geometric figures. This necklace brings this ancient art form
                to life in a wearable piece that connects the wearer to centuries of artistic tradition.
              </p>
              <p>
                Each necklace is handcrafted by skilled artisans who have inherited techniques passed down through
                generations. The result is a piece of jewelry that not only adorns but also tells a story of cultural
                heritage and artistic excellence.
              </p>
              <p>
                Perfect for special occasions or as an everyday luxury, this necklace pairs beautifully with both
                traditional Arabian attire and contemporary fashion, making it a versatile addition to any jewelry
                collection.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="features" className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="care" className="pt-6">
            <p>{product.care}</p>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < product.rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">Based on {product.reviewCount} reviews</span>
                  </div>
                </div>
                <Button>Write a Review</Button>
              </div>

              {/* Sample Reviews - In a real app, these would be fetched from a database */}
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">2 months ago</div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2">Absolutely stunning piece!</h4>
                  <p className="text-muted-foreground">
                    This necklace exceeded my expectations. The craftsmanship is exquisite and the attention to detail
                    in the arabesque pattern is remarkable. It's become my go-to piece for special occasions.
                  </p>
                </div>

                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Ahmed K.</div>
                    <div className="text-sm text-muted-foreground">1 month ago</div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2">Beautiful gift</h4>
                  <p className="text-muted-foreground">
                    I purchased this as an anniversary gift for my wife and she loves it. The gold has a beautiful
                    luster and the design is both traditional and contemporary. The only reason for 4 stars instead of 5
                    is that the clasp is a bit difficult to manage.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Layla H.</div>
                    <div className="text-sm text-muted-foreground">3 weeks ago</div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2">Heirloom quality</h4>
                  <p className="text-muted-foreground">
                    This piece is truly a work of art. The arabesque pattern is intricate and beautifully executed. The
                    weight of the gold feels substantial and luxurious. I can see this becoming a family heirloom that
                    will be passed down through generations.
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <RelatedProducts />
      </div>
    </div>
  )
}

