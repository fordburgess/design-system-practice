
import React, { type ReactNode } from 'react'
import { useTheme } from '../contexts/ThemeContext'

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  children: ReactNode
}

type Classnames = {
  'h1' : string,
  'h2' : string,
  'p' : string,
  'span' : string,
}

// these class styles are defined in app-base
const classnames: Classnames = {
  'h1' : 'header-text',
  'h2' : 'subheader-text',
  'p' : 'paragraph-text',
  'span' : 'small-text'
}

const Typography: React.FC<TypographyProps> = ({ children, variant }: TypographyProps) => {
  const themeStyles = useTheme().themeStyles;

  switch(variant) {
    case "h1":
      return <h1 className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.primary}}>{children}</h1>
    case "h2":
      return <h2 className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.primary}}>{children}</h2>
    case "h3":
      return <h3 className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.primary}}>{children}</h3>
    case "h4":
      return <h4 className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.primary}}>{children}</h4>
    case "h5":
      return <h5 className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.secondary}}>{children}</h5>
    case "h6":
      return <h6 className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.secondary}}>{children}</h6>
    case "p":
      return <p className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.secondary}}>{children}</p>
    case "span":
      return <span className={classnames[variant as keyof Classnames]} style={{ color: themeStyles.palette.text.ternary}}>{children}</span>
    // specifically does not allow default/fallback cases- variant must be of type specified in props

  }
}

export default Typography
