'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: "If you're on the fence about whether or not you should look into therapy as a couple, here are a few things to keep in mind.",
    image: "/images/couple-coffee.jpg",
    cta: "Read more"
  },
  {
    id: 2,
    title: "Understanding the benefits of couples therapy and how it can strengthen your relationship",
    image: "/images/couple-therapy.jpg",
    cta: "Learn more"
  },
  {
    id: 3,
    title: "Take the first step towards a healthier relationship today",
    image: "/images/happy-couple.jpg",
    cta: "Get started"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="flex items-center gap-8">
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="flex-1 grid md:grid-cols-2 gap-8 items-center">
              <div className="pr-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <button className="bg-purple-600 text-white px-6 py-2.5 rounded hover:bg-purple-700 transition-colors">
                  {slides[currentSlide].cta}
                </button>
              </div>
              
              <div className="relative h-64 md:h-72 rounded-lg overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-500 text-sm">Couple therapy image</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}