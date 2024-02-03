import React from "react";
import star from '../images/star.png';

export function Card(props) {
    const { coverImg, stats, location, title, price, openSpots, } = props;
    return (
        <div className='card'>
            {openSpots === 0 ? <div className='card--badge'>SOLD OUT</div> : location === 'Online' 
                ? <div className='card--badge'>ONLINE</div> : ''}
            <img className='card--photo' src={coverImg} alt=''/>
            <div className='card--stats'>
                <img className='card--star' src={star} alt=''/>
                <span>{stats.rating}</span>
                <span className="gray">• ({stats.reviewCount} {stats.reviewCount > 1 ? 'reviews' : 'review'}) •</span>
                <span className="gray">{location}</span>
            </div>
            <p className='card--title'>{title}</p>
            <p className='card-text'><span className="bold">from £{price}</span> / person</p>
        </div>
    )
}