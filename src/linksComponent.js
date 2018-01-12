import React, { Component } from 'react';
import './App.css';

class Links extends Component {


    render() {
        console.log(this.props.links)
        return (
            <div>
                <h1>hello world</h1>
                {(this.props.elName==="img")?
                 (this.props.source.map((links, index) => {
                    return (
                        <div key={index}>
                            <img src={links} alt="img" /><br /><br /><br />
                        </div>
                    )
                })) : 
                (this.props.source.map((links, index) => {
                    return (
                        <div key={index}>
                            <a href={links} target="_blank">links {index + 1}</a><br /><br /><br />
                        </div>
                    )
                }))
                }
            </div>

        );
    }
}

export default Links;
