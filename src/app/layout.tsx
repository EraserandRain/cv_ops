import { ReactNode } from 'react'
import "app/styles/globals.css"
import "app/styles/print.css"
import "app/styles/phone.css"

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {
    return children
}
