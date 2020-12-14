import React from 'react';

class GithubProfile extends React.Component{ 
    constructor() {
        super();
        this.state = {
            user: null,
            loading: false,
            username: ''
        }
    }

    fetchUserProfile = () => {
        let url = 'https://api.github.com/users/';
        url += this.state.username
        this.setState({
            loading: true
        })
        const promise = fetch(url)
        promise.then((res)=> {
            // console.log(res); // json
           const json = res.json()
           json.then((data)=> { 
               this.setState({
                   user: data,
                   loading: false
               })
               console.log(data)
           })
        })

        promise.catch(function(err) {
            this.setState({
                loading: false
            })
        })
    }

    renderContent = () => {

        if(this.state.loading === true) {
            return "Loading..."
        } else if(this.state.user === null){
            return 'Click button to get github user profile'
        } else {
            return <div>
                <img src={this.state.user.avatar_url} alt="IMG" width="150px"/>
                <h3>Username: {this.state.user.login}</h3>
                <p>Profile Name: {this.state.user.name}</p>
                <p>Followers: {this.state.user.followers}</p>
                <p>Following: {this.state.user.following}</p>
                <p>Location: {this.state.user.location}</p>
                <p>Repository: {this.state.user.public_repos}</p>
            </div> 
        }
    }

    handleInput = (event) =>{
        this.setState({
            username: event.target.value 
        })    
    }

    render() {
        return (
            <div>
                <h1>Github User Profile</h1>
                <input type="text" placeholder="Enter Github Username" onChange={this.handleInput}/>
                <button onClick={this.fetchUserProfile}> fetch Github User  </button>
                <h4>{this.renderContent()}</h4>
            </div>
        )
    }
}

export default GithubProfile;