import React, {useContext} from 'react'
import { ThemeContext } from '../App'

function User(props) {
    let myname = useContext(ThemeContext)
    return (
        <div>
        mai aa gya {myname}
        </div>
    )
}


export default User

