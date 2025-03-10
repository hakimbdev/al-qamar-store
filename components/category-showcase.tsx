import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Arabian Jewelry",
    description: "Exquisite handcrafted pieces",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603101/image5_talmgt.jpg",
    href: "/category/jewelry",
  },
  {
    id: 2,
    name: "Egyptian Abayas",
    description: "Elegant traditional designs",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600328/image12_etwvxp.jpg",
    href: "/category/abayas",
  },
  {
    id: 3,
    name: "Male Wear",
    description: "Authentic Arabian fashion",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741605789/image18_sjyd1f.jpg",
    href: "/category/male-wear",
  },
  {
    id: 4,
    name: "Female Wear",
    description: "Modern cultural elegance",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741603852/image21_r1if5h.jpg",
    href: "/category/female-wear",
  },
  {
    id: 5,
    name: "Shoes",
    description: "Handcrafted footwear",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1741600321/image24_visflt.jpg",
    href: "/category/shoes",
  },
]

export default function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={category.href} className="group relative overflow-hidden rounded-lg h-[300px]">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm text-white/80 mb-3">{category.description}</p>
            <div className="flex items-center text-sm font-medium transition-all group-hover:translate-x-1">
              Shop Now <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

