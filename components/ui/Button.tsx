import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  target?: string
  rel?: string
}

const styles = {
  base: 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    primary: 'bg-brand-black text-white border border-brand-black hover:bg-white hover:text-brand-black',
    secondary: 'bg-white text-brand-black border border-brand-black hover:bg-brand-black hover:text-white',
    ghost: 'bg-transparent text-brand-black border border-brand-border hover:border-brand-black',
  },
  sizes: {
    sm: 'h-[38px] px-5 text-[13px]',
    md: 'h-[48px] px-7 text-[14px]',
    lg: 'h-[56px] px-9 text-[15px]',
  },
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = `${styles.base} ${styles.variants[variant]} ${styles.sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
