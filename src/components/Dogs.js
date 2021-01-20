import React from 'react'

class Dogs extends React.component {
    constructor() {
        super()
        this.state = {
            dogUrl: ""
        }
    }

    componentDidMount(){
        this.dogFeth();
    }

    dogFeth() {
        fetch('https://dog.ceo/api/breeds/image/random Fetch!')
        .then(a => console.log(a))
    }

    render(){
        return(
            <div>
                <h1>Random Dog</h1>
                <img src={} />
            </div>
        );
    }
}

export default Dogs;