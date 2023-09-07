import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer className="bg-gray-100 border-t border-gray-300 py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Nosotros</h4>
          <ul className="list-none">
            <li>
              <Link href="/about" passHref legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Conoce más</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Servicios</h4>
          <ul className="list-none">
            <li>
              <Link href="/" passHref legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">
                  Todos los productos
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Hecho para</h4>
          <p className="text-gray-600">
            <a
              href="https://platzi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              Platzi y su curso de Next.JS
            </a>
             de Platzi dictado por
            <a
              href="https://twitter.com/jonalvarezz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              @jonalvarezz
            </a>
          </p>
          <ul className="list-none">
            <li>
              <a
                href="https://twitter.com/jonalvarezz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonalvarezz/platzi-nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-600">
        <p className="mb-2">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            Freepik
          </a>
          from
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            www.flaticon.com
          </a>
        </p>
        <p className="mb-0">
          Avocado images taken from
          <a
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            Avocado 101
          </a>
          at
          <a
            href="https://www.californiaavocado.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            California Avocado
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
