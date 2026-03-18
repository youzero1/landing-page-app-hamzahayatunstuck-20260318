'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote:
      "This platform completely transformed how our team works. We've seen a 40% increase in productivity within the first month alone. I can't imagine going back to our old workflow.",
    author: 'Sarah Johnson',
    role: 'CTO at TechFlow',
    avatar: '👩‍💼',
    rating: 5,
    company: 'TechFlow',
  },
  {
    quote:
      "The onboarding was seamless and the support team is incredibly responsive. We deployed our entire infrastructure in under an hour. This is genuinely the best product we've ever used.",
    author: 'Marcus Chen',
    role: 'Lead Developer at StartupXYZ',
    avatar: '👨‍💻',
    rating: 5,
    company: 'StartupXYZ',
  },
  {
    quote:
      "As a non-technical founder, I was worried about the learning curve. But the intuitive interface and excellent documentation made adoption incredibly easy for our whole team.",
    author: 'Emily Rodriguez',
    role: 'CEO at GrowthLabs',
    avatar: '👩‍🚀',
    rating: 5,
    company: 'GrowthLabs',
  },
  {
    quote:
      "The analytics features alone are worth the price. We've uncovered insights about our users that we never would have discovered otherwise. Game-changing for our product roadmap.",
    author: 'David Kim',
    role: 'Product Manager at Innovate Inc',
    avatar: '👨‍🔬',
    rating: 5,
    company: 'Innovate Inc',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 sm:p-12 mb-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

          <div className="relative">
            {/* Quote icon */}
            <div className="text-6xl text-white/20 font-serif leading-none mb-4">&ldquo;</div>

            <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8 max-w-4xl">
              {testimonials[activeIndex].quote}
            </blockquote>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <div className="text-white font-bold text-lg">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-white/70">{testimonials[activeIndex].role}</div>
              </div>
              <div className="ml-auto flex space-x-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                activeIndex === index
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">
                {testimonial.quote.substring(0, 80)}...
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
