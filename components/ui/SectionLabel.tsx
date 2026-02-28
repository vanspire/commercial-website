interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`text-label mb-4 ${light ? 'text-white/40' : 'text-brand-muted'} ${className}`}
    >
      {children}
    </p>
  )
}
