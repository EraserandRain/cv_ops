import { ReactNode } from 'react'
import './styles/styles.css'

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {
    return children
}
