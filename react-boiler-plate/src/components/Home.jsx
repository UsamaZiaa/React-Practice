import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const history = useHistory();
    // console.log(history)
    const onAbout = () => {
        setTimeout(() => {
            history.push("about")
        }, 2000)
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={onAbout}>About</button>
        </div>
    )
}

export default Home;