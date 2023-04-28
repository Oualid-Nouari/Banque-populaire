import React, { useState } from 'react'

const Aside = () => {
    const [openAside, setOpenAside] = useState(false)
    return (
        <aside className={openAside ? 'active' : ''}>
            <i class="fa-solid fa-bars-staggered" onClick={()=> setOpenAside(!openAside)}></i>
            <div className='aside-content'>
                <div>
                    <h3>MY ACCOUNTS</h3>
                    <a href='https://jedeviensclient.gbp.ma/#/?_k=0n4p99'>I Subscribe</a>
                    <a href='https://jemabonne.gbp.ma/abonnement/#/login'>I become a client</a>
                    <a href='https://oauth2.gbp.ma/?cid=4DB746D2-AB15-4E2B-A613-0A6DF077FF07&aid=25329310-2c28-4143-97d5-42e431bc71c7&LCID=1036'>I Login</a>
                </div>
                <div>
                    <h3>Practical</h3>
                    <a href="https://bpnet.gbp.ma/Public/FinaServices/CreditSimulateurs">Simulators</a>
                    <a href="https://bpnet.gbp.ma/Public/FinaServices/ExchangeRate">Currency rates</a>
                    <a href="https://bpnet.gbp.ma/Public/FinaServices/StockPrice">Stock rates</a>
                    <a href="https://bpnet.gbp.ma/Public/FinaServices/FeesCommissions">Commission booklet </a>
                </div>
                <div>
                    <h3>Contact & help</h3>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/ContactPublic'>Contact Us</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/crc'>customer service center</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/FAQ'>Frequently Asked Questions</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/FAQ'>Tutorial</a>
                </div>
                <div>
                    <h3>USEFULL INFORMATIONS</h3>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/Agence'>Our agencies</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/Agence'>Our offers</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/Convention'>Remote Banking Agreement</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/ConditionsTarifaires'>Pricing conditions</a>
                </div>
                <div>
                    <h3>SECURITY</h3>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/risk'>Risks</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/solution'>Solutions</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/QR'>Frequently Asked Questions</a>
                    <a href='https://bpnet.gbp.ma/Public/CustomerService/GoodPractice'>Good practices</a>
                </div>
            </div>
        </aside>
    )
}

export default Aside
