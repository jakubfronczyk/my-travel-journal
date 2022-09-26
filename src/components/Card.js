import React from 'react';
import location from '../images/location-ikon.png'

export default function Card(props){
    return(
        <main className="main-journal">
            <img src={props.item.imageUrl} alt="Fuji Mountain" className="main-img"/>
            <div className="main-card">
                <div className="main-location">
                    <img src={location} alt="Location" className="main-location-icon"/>
                    <p className="main-location-country">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="main-location-url">View on Google Maps</a>
                </div>
                <h1 className="main-card-title">{props.item.title}</h1>
                <p className="main-card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="main-card-description">{props.item.description}</p>
            </div>
        </main>
    )
}