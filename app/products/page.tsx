import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, SlidersHorizontal } from "lucide-react"
import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button variant="outline" className="w-full flex items-center justify-between">
          <span>Filters</span>
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="hidden lg:block w-full lg:w-1/4 space-y-6">
          {/* Search */}
          <div>
            <h3 className="font-medium mb-3">Search</h3>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..." className="pl-8" />
            </div>
          </div>

          {/* Categories */}
          <Accordion type="single" collapsible defaultValue="categories">
            <AccordionItem value="categories">
              <AccordionTrigger className="font-medium">Categories</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="all" />
                    <Label htmlFor="all">All Products</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="jewelry" />
                    <Label htmlFor="jewelry">Arabian Jewelry</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="male-wear" />
                    <Label htmlFor="male-wear">Male Wear</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="female-wear" />
                    <Label htmlFor="female-wear">Female Wear</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shoes" />
                    <Label htmlFor="shoes">Shoes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="abayas" />
                    <Label htmlFor="abayas">Egyptian Abayas</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Price Range */}
          <Accordion type="single" collapsible defaultValue="price">
            <AccordionItem value="price">
              <AccordionTrigger className="font-medium">Price Range</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Slider defaultValue={[0, 500]} min={0} max={1000} step={10} />
                  <div className="flex items-center justify-between">
                    <div className="w-[45%]">
                      <Label htmlFor="min-price" className="text-xs">
                        Min
                      </Label>
                      <Input id="min-price" type="number" placeholder="$0" />
                    </div>
                    <span className="text-muted-foreground">-</span>
                    <div className="w-[45%]">
                      <Label htmlFor="max-price" className="text-xs">
                        Max
                      </Label>
                      <Input id="max-price" type="number" placeholder="$500" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Material */}
          <Accordion type="single" collapsible>
            <AccordionItem value="material">
              <AccordionTrigger className="font-medium">Material</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gold" />
                    <Label htmlFor="gold">Gold</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="silver" />
                    <Label htmlFor="silver">Silver</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cotton" />
                    <Label htmlFor="cotton">Cotton</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="silk" />
                    <Label htmlFor="silk">Silk</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="leather" />
                    <Label htmlFor="leather">Leather</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Size */}
          <Accordion type="single" collapsible>
            <AccordionItem value="size">
              <AccordionTrigger className="font-medium">Size</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    XS
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    S
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    M
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    L
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    XL
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    XXL
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Apply Filters Button */}
          <Button className="w-full">Apply Filters</Button>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          {/* Sort and View Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">145</span> products
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="best-selling">Best Selling</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products */}
          <ProductGrid />

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="default" size="icon">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                4
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

