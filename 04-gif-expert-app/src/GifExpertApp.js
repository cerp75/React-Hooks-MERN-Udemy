
import React, {useState} from 'react'
import { AddCategory } from './componets/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories(c => [...c, 'HounterXHounter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map(category=> {
                        return <li key={ category }> { category }</li>;
                    })
                }
            </ol>
        </>
    )
}
