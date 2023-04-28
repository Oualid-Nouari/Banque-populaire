import React, { useState } from 'react'

const Questions = () => {
    const [displaySearch, setDisplaySearch] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [selected, setSelected] = useState(null)
    const handleHover = () => {
        setDisplaySearch(!displaySearch)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchInput !== '') {
            window.open('https://bpnet.gbp.ma/public/CustomerService/FAQ', '_blank');
            setSearchInput('')
        }
    }
    const handleSelect = (x) => {
        if (selected === x) {
            return setSelected(null)
        }
        setSelected(x)

    }
    return (
        <article className='questions'>
            <div className='questions-header'>
                <i class="fa-solid fa-question"></i>
                <h1>DO YOU HAVE ANY QUESTIONS?</h1>
                <h3>Please check our help platform or contact us!</h3>
            </div>
            <div className='freq-ques'>
                <div className='freq-header'>
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                    <form onSubmit={handleSubmit} className='searching'>
                        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='search' style={{ width: displaySearch ? '100%' : '0', height: displaySearch ? '45px' : 0, transform: displaySearch ? 'translate(0, 0)' : 'translate(-10px, 10px)' }} type="text" placeholder='Enter your question...' />
                        <button><i class="fa-solid fa-magnifying-glass" onClick={handleHover}></i></button>
                    </form>
                </div>
                <div className='accordions' >
                {data.map((accord, x) => {
                    return (
                        
                            <article className='acc' onClick={() => handleSelect(x)}>
                                <div className='ques'>
                                    <h1>{accord.question}</h1>
                                    <button>{selected === x ? '-' : '+'}</button>
                                </div>
                                <div className={selected === x ? 'res active' : 'res'}>
                                    {accord.response}
                                </div>
                            </article>
                    )
                })}
                </div>
            </div>
        </article>
    )
}

const data = [
    {
        question: "COMMENT FAIRE POU L'UTILISER ?",
        response:
            `Il suffit d’aller à la rubrique « TRANSFERTS - Virement » et suivre les étapes suivantes :
         - Choisissez le compte émetteur et le compte bénéficiaire. Utilisez les flèches « vers le bas » et « vers le haut » pour naviguer entre les comptes
         - Saisissez le montant du virement et le libellé
         - Si vous voulez ajouter cette opération à votre liste des « Favoris Transferts », alors cochez la case « Ajouter à mes transferts favoris » et saisissez un libellé pour ce nouveau favori
         - Cliquez sur « Valider »
         - Un message de confirmation est ensuite affiché confirmant l’exécution avec succès du virement `
    },
    {
        question: "DANS QUELLES CONDITIONS PEUT-ON UTILISER CE SERVICE ?",
        response:
            `On peut utiliser ce service sous réserve d’une provision suffisante et à hauteur de :
        - Dix ordres de virement par jour.
        - 200.000 DH maximum par jour vers des comptes de même client
        - 50.000 DH maximum par jour vers des comptes tiers Banque Populaire
        - 50.000 DH maximum par jour vers des comptes d’autres banques marocaines. `
    },
    {
        question: "COMMENT CONNAITRE LE SORT D'UN VIREMENT",
        response: `En consultant mes relevés de compte sur chaabi net ou l'historique des virements émis.`
    }
]

export default Questions
