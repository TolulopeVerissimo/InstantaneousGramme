import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { getUsers } from "../../Store/user";
export const Search = (props) => {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.users)
    const [word, setWord] = useState("")
    const [filter, setFilter] = useState(userList)
    let list = []


    for (let i in userList) {
        list.push(i)
    }
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    if (userList) {
        setFilter(userList)
    }
    console.log("filter", filter)
    console.log("userList", userList)
    console.log("mappedList", list)

    const change = e => {
        let oldUser = userList.users.map(el => { name: el.username.toLowerCase() })

        if (e !== "") {
            let newUser = []
            setWord(e)
            newUser = oldUser.filter(i => i.username.includes(word.toLowerCase()))
            setFilter(newUser)
        }
        setFilter(userList.username)
    }

    return (
        <>
            search: <input type="text" placeholder="Search" className="navbar__searchfield" onChange={e => change(e.target.value)} />
            {userList && list.map((el, idx) => (
                <div key={idx}>
                    <li>
                        {el.username} &nbsp;
                    </li>
                </div>
            ))}
        </>
    )

}
export default Search