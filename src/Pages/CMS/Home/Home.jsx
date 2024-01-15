import React, { useState } from 'react'
const countries = [
    { name: "india", value: "in", cities: ["mumbai", "delhi"] },
    { name: "pakistan", value: "pak", cities: ["karachi", "lahore"] },
    { name: "bangladesh", value: "ban", cities: ["dhaka", "rangpur"] },
    { name: "srlanka", value: "sl", cities: ["colombo", "kandy"] },
    { name: "afghanistan", value: "afg", cities: ["kabul", "kandhar"] },
]

export default function Home() {
    const [country, setCountry] = useState(0);
    
    return (
        <div>
            <select name="country" id="" onClick={(e) => setCountry(e.target.value)} >
                {countries.map((item, index) => {
                    return (
                        <option value={index}  >  {item.name}</option>
                    )
                })}
            </select>
            <select value={country} id="" name='cities'>
                {countries[country].cities.map((item) => {
                    return (
                        <option value={item}>{item}</option>
                    )
                })}
            </select>

        </div>
    )
}
