import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='buttons'>
                <a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/CRC' className='footer-link'>
                    <i class="fa-solid fa-phone icon"></i>
                    <h4>CALL US</h4>
                </a>
                <a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/ContactPublic' className='footer-link'>
                    <i class="fa-solid fa-envelope icon"></i>
                    <h4>SEND US AN EMAIL</h4>
                </a>
                <a target='_black'  href='https://bpnet.gbp.ma/Public/CustomerService/Agence' className='footer-link'>
                    <i class="fa-solid fa-location-dot icon"></i>
                    <h4>FIND AN AGENCY</h4>
                </a>
                <a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/FAQ' className='footer-link'>
                    <i class="fa-solid fa-question icon"></i>
                    <h4>FAQ</h4>
                </a>
            </div>
            <div className='lists'>
                <ul>
                    <h4>Practical</h4>
                    <li><a target='_black' href="https://bpnet.gbp.ma/Public/FinaServices/CreditSimulateurs">Simulators</a></li>
                    <li><a target='_black' href="https://bpnet.gbp.ma/Public/FinaServices/ExchangeRate">Currency rates</a></li>
                    <li><a target='_black' href="https://bpnet.gbp.ma/Public/FinaServices/StockPrice">Stock rates</a></li>
                    <li><a target='_black' href="https://bpnet.gbp.ma/Public/FinaServices/FeesCommissions">Commission booklet </a></li>
                </ul>
                <ul>
                    <h4>Contact & help</h4>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/ContactPublic'>Contact Us</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/crc'>customer service center</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/FAQ'>Frequently Asked Questions</a> </li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/FAQ'>Tutorial</a></li>
                </ul>
                <ul>
                    <h4>USEFULL INFORMATIONS</h4>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/Agence'>Our agencies</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/Agence'>Our offers</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/Convention'>Remote Banking Agreement</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/ConditionsTarifaires'>Pricing conditions</a></li>
                </ul>
                <ul>
                    <h4>SECURITY</h4>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/risk'>Risks</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/solution'>Solutions</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/QR'>Frequently Asked Questions</a></li>
                    <li><a target='_black' href='https://bpnet.gbp.ma/Public/CustomerService/GoodPractice'>Good practices</a></li>
                </ul>
            </div>
            <div className='rights'>
            Copyright @ 2023 Banque Populaire Group
            </div>
        </footer>
    )
}

export default Footer
