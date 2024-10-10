// import {FC, ReactNode} from 'react'

import {FC, PropsWithChildren} from 'react'

// export type PProps = {
//   children?: ReactNode
// }

// const P: FC<PProps> = props => {
//   const {children} = props
//   return <p children={children} />
// }

// export default P

export type PProps = {}
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}

export default P
