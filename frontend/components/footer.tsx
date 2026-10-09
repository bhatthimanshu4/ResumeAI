import Link from "next/link"
import { Logo } from "./logo"

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Templates", href: "/templates" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
}

export default function Footer() {
  return (
<footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020617] py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {/* Logo and Copyright */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <div className="mb-3">
              <Logo size="md" href="/" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 ResumeAI. All rights reserved.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{footerLinks.product.title}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.product.links.map((link, index) => (
                <li key={index}>
<Link
                    href={link.href}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{footerLinks.resources.title}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.resources.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{footerLinks.company.title}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{footerLinks.legal.title}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.legal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className="mt-4 sm:mt-5 flex items-center gap-2.5">
              <Link href="#" className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}