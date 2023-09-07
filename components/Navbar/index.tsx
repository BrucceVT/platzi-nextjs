import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useCart } from '@/store/Cart'
import { Avocado } from '@/components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <header className="bg-gray-900 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref legacyBehavior>
          <a className="text-white text-2xl font-semibold flex items-center">
            <Avocado />
            Avo Store
          </a>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/cart" passHref legacyBehavior>
              <a
                className={`text-white ${
                  pathname === '/cart' ? 'underline' : ''
                }`}
              >
                <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
