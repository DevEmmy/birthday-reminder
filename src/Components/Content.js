import React, { useState } from 'react'

const img_5 = 'https://images.ctfassets.net/u4vv676b8z52/60zM6XTHxGoqD9Am2KllNr/9c671ede560f911271385a0e19a1299e/why-people-wink-hero-678x4446-compressor.jpg?fm=jpg&q=80';

const img_4 = 'https://static.scientificamerican.com/sciam/cache/file/3204E59E-28AA-4DAD-862A1330E209A96D_source.jpg?w=590&h=800&5EA09B3A-60E4-4748-8E18ED67610745FE';

const img_3 = 'https://research.fb.com/wp-content/uploads/2020/06/Opuada-Headshots.jpeg';

const img_2 = 'https://research.fb.com/wp-content/uploads/2021/01/Accame-David-e1610736093148.jpg';

const img_1 = 'https://research.fb.com/wp-content/uploads/2018/04/sameer-agarwal-2.jpg?resize=1024,1024'

function Content() {

    const data = [
        {id:1, name:'Sameer Agarwal', age:'29 years', img: img_1 },

        {id:2, name:'David Accame', age:'35 years', img: img_2 },

        {id:3, name:'Opuada Abusi', age:'28 years', img: img_3 },

        {id:4, name:'Sean Walsh', age:'31 years', img: img_4 },

        {id:5, name:'Lola Gardner', age:'19 years', img: img_5 }
    ]

    const [peopleData, setPeopleData] = useState(data);

    const [numOfBirthday, sNB] = useState('5 birthdays today')

    const clearItem = ()=>{
        setPeopleData([])
        sNB('0 birthday today')
    }
    return (
        <div className='content'>
            <header>{ numOfBirthday }</header>
            {peopleData.map((people)=>{
                const {id, name, age, img}=people
                return(
                    <div key = { id } className='people'>
                       <img src={ img } alt=""/>
                       <div className="text">
                           <h6>{name}</h6>
                           <p>{age}</p>
                       </div>
                    </div>
                    
                )
            })}

        <button onClick={clearItem}>Clear All</button>
           
        </div>
    )
}

export default Content
