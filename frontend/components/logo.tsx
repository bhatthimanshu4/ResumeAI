import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  href?: string
}

function LogoIcon({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { container: "h-6 w-6", icon: 12 },
    md: { container: "h-7 w-7", icon: 14 },
    lg: { container: "h-8 w-8", icon: 16 },
  }

  const s = sizes[size]

  return (
    <div className={`flex ${s.container} items-center justify-center rounded-lg bg-[#16A34A]`}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield outline */}
        <path
          d="M12 3L4 7V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V7L12 3Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* AI Sparkle - 4-point star */}
        <path
          d="M12 8L12.8 10.4L15 11L12.8 11.6L12 14L11.2 11.6L9 11L11.2 10.4L12 8Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

function LogoText({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const textSizes = {
    sm: "text-[16px]",
    md: "text-[19px]",
    lg: "text-[22px]",
  }

  return (
<span className={`${textSizes[size]} font-extrabold tracking-tight`}>
       <span className="text-slate-900 dark:text-white">Resume</span>
       <span className="text-[#16A34A]">AI</span>
     </span>
  )
}

export function Logo({ size = "md", showText = true, href = "/" }: LogoProps) {
  const content = (
    <div className="flex items-center gap-2">
      <LogoIcon size={size} />
      {showText && <LogoText size={size} />}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

export { LogoIcon, LogoText }
