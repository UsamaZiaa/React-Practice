import { connect } from "react-redux";

const Counter = (props) => {
    return <h1>My Count: {props.myCount}</h1>
}

const mapStateToProps = (state) => {
    return {
        myCount: state.count
    }
}

const myConnect = connect(mapStateToProps);

export default myConnect(Counter);