import React, { PropsWithChildren } from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <main className="container mx-auto px-4 py-8">{children}</main>
    <Footer />
  </>
)

export default Layout
