'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized for performance from the ground up. Experience sub-second load times and buttery smooth interactions that delight your users.',
    gradient: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'Bank-grade security with end-to-end encryption, SSO support, and compliance with SOC 2, GDPR, and HIPAA regulations.',
    gradient: 'from-blue-400 to-cyan-500',
    bg: 'bg-blue-50',
  },
  {
    icon: '🚀',
    title: 'Easy Deployment',
    description:
      'Deploy to any cloud provider in minutes with our one-click deployment tools. Scale effortlessly from startup to enterprise.',
    gradient: 'from-purple-400 to-pink-500',
    bg: 'bg-purple-50',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Real-time collaboration features let your team work together seamlessly, no matter where they are in the world.',
    gradient: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description:
      'Deep insights with customizable dashboards, real-time data processing, and predictive analytics powered by AI.',
    gradient: 'from-indigo-400 to-blue-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: '🎨',
    title: 'Fully Customizable',
    description:
      'Make it yours with extensive theming options, custom branding, white-label support, and a powerful plugin ecosystem.',
    gradient: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
  },
];

export default function Features() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools you need to build, launch, and
            scale your projects with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { refs.current[index] = el; }}
              className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl card-hover border border-gray-100 transition-all duration-500 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${feature.bg} rounded-2xl mb-6 text-2xl transition-transform group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Bottom gradient line */}
              <div
                className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
