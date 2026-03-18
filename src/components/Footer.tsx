export default function Footer() {
  const currentYear = new Date().getFullYear();
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'MyLandingPage';

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'API Reference', 'Community', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
  };

  const socialLinks = [
    {
      name: 'Twitter',
      icon: '🐦',
      href: '#',
      label: 'Follow us on Twitter',
    },
    {
      name: 'GitHub',
      icon: '💻',
      href: '#',
      label: 'View our GitHub',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: '#',
      label: 'Connect on LinkedIn',
    },
    {
      name: 'Discord',
      icon: '💬',
      href: '#',
      label: 'Join our Discord',
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-white font-bold text-lg">{siteName}</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-xs">
              Building the future of productivity. The all-in-one platform for
              modern teams.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110"
                >
                  <span className="text-base">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} {siteName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-600 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
