import { useParams, useLocation } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const location = useLocation();
    console.log(params)
    // console.log(location.state.email)
    return (
        <div>
            <h1>User Details</h1>
            <h2>User Id: {params.userId}</h2>
            <h2>User Email: {location.state.email}</h2>
        </div>
    )
}

export default User;