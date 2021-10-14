import React from 'react'
import Link from 'next/link'

const NotFound = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh'

  }}>
    <h3>Ups...podana stronie nie istnieje</h3>
    <Link href={'/'} passHref>
      <button><h3>Przejdź do strony głównej</h3></button>
    </Link>
  </div>
)

export default NotFound
