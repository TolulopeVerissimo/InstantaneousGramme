import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router';


export const Search = ({ user, users }) => {
    const [item] = useState([
        // for-loop user.object 
    ])
    const [word, setWord] = useState("")
    const [filter, setFilter] = useState(item)
    const CHANGE = e => {
        let yeOldeList = item.map(el => {
            return { 'user': el.username.toLowerCase() }
        })
        if (e !== "") {
            let newList = []
            setWord(e)
            newList = yeOldeList.filter(el => el.username.includes(word.toLowerCase()))
            setFilter(newList)
        }
        setFilter(item.users)
    }
    return (
        <>
            <h1>search</h1>
            <input onChange={e => CHANGE(e.target.value)} />
            {
                filter.map((el, idx) =>
                (
                    <div key={idx}>
                        <li>
                            {el.username} &nbsp;
                        <span>{el.name}</span>
                        </li>
                    </div>
                ))
            }
        </>
    )
}
export default Search

