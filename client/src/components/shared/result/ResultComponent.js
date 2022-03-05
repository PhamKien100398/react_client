import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ResultComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.background);
        return (
            <div class="relative flex justify-center items-center w-1/5 h-1/5 m-auto">
                <CircularProgressbar value={this.props.totalPoint} text={`${this.props.totalPoint}/100`} styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                    // Path color
                    stroke: `${this.props.background}`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    },
                    // Customize the text
                    text: {
                    // Text color
                    fill: '#f88',
                    // Text size
                    fontSize: '16px',
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                    fill: '#B6B813',
                    },}}/>
            </div>
        )
    }
}

export default ResultComponent;