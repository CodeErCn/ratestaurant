import { ReactNode } from "react"
import Head from 'next/head'

const Layout = ({ children } : {children: ReactNode}) => {
    return <main>{children}</main>
}

export default Layout