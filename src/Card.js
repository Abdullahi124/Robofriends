import React from 'react'


const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green br2 dib pa2 ma2 bw2 grow'>
            <img alt='abdi' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card