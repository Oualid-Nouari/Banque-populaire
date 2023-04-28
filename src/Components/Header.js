import React from 'react'
import Logo from '../imgs/bp_logo-.png'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt='' />
        <div className="header-buttons">
          <a target='_black' href='https://jedeviensclient.gbp.ma/#/?_k=0n4p99'><i class="fa-solid fa-check"></i> I Subscribe</a>
          <a target='_black' href='https://jemabonne.gbp.ma/abonnement/#/login'><i class="fa-solid fa-user-plus"></i> I become a client</a>
          <a target='_black' href='https://oauth2.gbp.ma/?cid=4DB746D2-AB15-4E2B-A613-0A6DF077FF07&aid=25329310-2c28-4143-97d5-42e431bc71c7&LCID=1036'><i class="fa-solid fa-right-to-bracket"></i> I Login</a>
        </div>
      </div>
    </header>
  )
}

export default Header
