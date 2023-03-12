import React, { ChangeEvent, FC,useState } from 'react'
import { HairColor } from '../Emum';
import { User } from '../Interfaces';

// export const Person =  (props: Props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//             <h1>{props.email}</h1>
//         </div>
//     )
// }

export const Person:FC<User> =  ({name, age, email, hairColor}) => {
    const [country, setCountry]=useState<string | null>("")

    const handleChange =(event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }
    return (
        <div>
           
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <input placeholder="write down your country"
            onChange={handleChange} />
            <br></br>
            { country}
           {hairColor}
        </div>
    )
}

