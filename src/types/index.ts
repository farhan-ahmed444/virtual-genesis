export interface Product {
  id: string
  name: string
  slug: string
  price: number
  compareAtPrice?: number
  description: string
  category: ProductCategory
  images: string[]
  colors?: ProductColor[]
  sizes?: string[]
  rating: number
  reviewCount: number
  isNew?: boolean
  isBestSeller?: boolean
  isFeatured?: boolean
  createdAt: string
}

export interface ProductColor {
  name: string
  hex: string
  image?: string
}

export type ProductCategory = 'apparel' | 'artwork' | 'accessories'

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
  category: string
  productCount: number
}

export interface PodcastEpisode {
  id: string
  title: string
  description: string
  image: string
  duration: string
  date: string
  episodeNumber: number
  audioUrl: string
}

export interface Program {
  id: string
  title: string
  description: string
  image: string
  type: 'coaching' | 'course'
  price: number
  sessions?: number
  duration?: string
  instructor: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color?: string
}

export type PageTransitionDirection = 'up' | 'down' | 'left' | 'right'
