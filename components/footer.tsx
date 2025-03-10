import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-muted pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20%282%29-7ooQFoFhUUDpEK1l1Zyg7XrHRw0A42.png"
                alt="Qamar Beit Logo"
                width={150}
                height={75}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-4">
              Discover authentic Arabian luxury with our curated collection of jewelry, clothing, and Egyptian abayas.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/jewelry" className="text-muted-foreground hover:text-primary">
                  Arabian Jewelry
                </Link>
              </li>
              <li>
                <Link href="/category/male-wear" className="text-muted-foreground hover:text-primary">
                  Male Wear
                </Link>
              </li>
              <li>
                <Link href="/category/female-wear" className="text-muted-foreground hover:text-primary">
                  Female Wear
                </Link>
              </li>
              <li>
                <Link href="/category/shoes" className="text-muted-foreground hover:text-primary">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="/category/abayas" className="text-muted-foreground hover:text-primary">
                  Egyptian Abayas
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-primary">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-muted-foreground hover:text-primary">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Arabian Market Street, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+971123456789" className="text-muted-foreground hover:text-primary">
                  +971 12 345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:info@qamarbeit.com" className="text-muted-foreground hover:text-primary">
                  info@qamarbeit.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Customer Service Hours:</h4>
              <p className="text-muted-foreground">
                Monday to Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Qamar Beit. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50" alt="Apple Pay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

