'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 3 projects',
      '5GB storage',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
    gradient: 'from-gray-600 to-gray-700',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom domains',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For large organizations with advanced needs',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    gradient: 'from-purple-600 to-pink-600',
  },
];

export default function CallToAction() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section
      id="cta"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-500/30">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Simple, transparent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center space-x-2 ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 card-hover ${
                plan.highlighted
                  ? 'bg-white shadow-2xl scale-105'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.highlighted ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.highlighted ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {plan.price === 'Free'
                    ? 'Free'
                    : billingPeriod === 'yearly'
                    ? `$${Math.floor(parseInt(plan.price.replace('$', '')) * 0.8)}`
                    : plan.price}
                </span>
                {plan.price !== 'Free' && (
                  <span
                    className={`text-sm ml-2 ${
                      plan.highlighted ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    /{billingPeriod === 'yearly' ? 'mo, billed annually' : 'month'}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? 'text-gray-700' : 'text-gray-300'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-2xl font-bold text-sm transition-all duration-200 hover:shadow-lg ${
                  plan.highlighted
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-blue-500/30`
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join over 10,000 teams already using our platform. No credit card
            required to start your free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
              Start Your Free Trial
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
