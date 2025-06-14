import Image from 'next/image'
import { Clock } from 'lucide-react'

interface ArticleCardProps {
  title: string
  description: string
  author: string
  readTime?: string
  image: string
}

export default function ArticleCard({ title, description, author, readTime, image }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          {image}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{author}</span>
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}