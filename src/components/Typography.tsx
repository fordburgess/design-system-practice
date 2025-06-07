import React, { type ReactNode } from 'react'

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
  children: ReactNode
}

const Typography: React.FC<TypographyProps> = ({ children }: TypographyProps) => {

  return (
    <span>{children}</span>
  )
}

export default Typography
