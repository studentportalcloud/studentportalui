import React from "react";

class BodyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.url = "https://www.google.com";
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://development-service.us-east-1.elasticbeanstalk.com/", requestOptions)
            .then(response => response.text())
            .then(result =>this.setState((state, props) => {
                state.data = result;
                console.log(result);
                return state;
            }))
            .catch(error => console.log('error', error));
    }
    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default BodyComponent;