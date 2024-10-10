import {CSSProperties, DetailedHTMLProps, FC, HTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type IconsProps = ReactSpanProps & {
  name: string
}

export const Icon: FC<IconsProps> = ({name, className: _className, ...props}) => {
  const className = `material-icons ${_className}`
  return (
    <span className={className} {...props}>
      {name}
    </span>
  )
}
