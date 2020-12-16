import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const onAbout = () => {
        history.push("about")
    }
    const goToUser = () => {
        history.push("users")
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={onAbout}>About</button>
            <button onClick={goToUser}>User</button>
        </div>
    )
}

export default Home;