import React from "react";
import star from '../images/star.png';

export function ContactCard(props) {
    console.log(props);
    const { img, name, phone, email } = props;
    console.log(phone);
    return (
        <div className='contact-card'>
            <img className='card--photo' src={img} alt=''/>
            <h3>{name}</h3>
            <div className='info-group'>
                <img className='card--star' src={star} alt=''/>
                <p>{phone}</p>
            </div>
            <div className='info-group'>
                <img className='card--star' src={star} alt=''/>
                <p>{email}</p>
            </div>
        </div>
    )
}