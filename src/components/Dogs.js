import React from 'react'

class Dogs extends React.Component {
    constructor() {
        super()
        this.state = {
            dogUrl: "",
            dogStatus: ""
        }
        this.dogFeth = this.dogFeth.bind(this);
    }

    componentDidMount(){
        this.dogFeth();
    }
        

    dogFeth() {
         this.setState({
            dogStatus: false
        }, () => {fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            this.setState({
                dogUrl: json.message,
                dogStatus: true
            })
        })})
        
        
    }   

    render(){
        const { dogStatus } = this.state
        if(!dogStatus){ 
            return(<h1 className="loading">LOADING...</h1>)
        }
        return(
            <div>
                <h1>Random Dog</h1>
                <img src={this.state.dogUrl} alt="dog" />
                <button onClick={this.dogFeth}>fetch</button>
            </div>
        );
    }
}

export default Dogs;