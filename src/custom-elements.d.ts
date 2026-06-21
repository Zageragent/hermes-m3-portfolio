import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type MaterialElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  href?: string
  target?: string
  rel?: string
  selected?: boolean
  disabled?: boolean
  type?: string
  value?: string
  name?: string
  label?: string
  supportingText?: string
  errorText?: string
  rows?: number
  slot?: string
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': MaterialElementProps
      'md-outlined-button': MaterialElementProps
      'md-text-button': MaterialElementProps
      'md-assist-chip': MaterialElementProps
      'md-filter-chip': MaterialElementProps
      'md-suggestion-chip': MaterialElementProps
      'md-icon': MaterialElementProps
      'md-icon-button': MaterialElementProps
      'md-filled-tonal-icon-button': MaterialElementProps
      'md-fab': MaterialElementProps
      'md-divider': MaterialElementProps
      'md-linear-progress': MaterialElementProps
      'md-outlined-text-field': MaterialElementProps
    }
  }
}
