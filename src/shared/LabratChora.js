import React, {Component} from 'react';
import LabratNati from "./LabratNati";

class LabratChora extends Component {
    render() {
        return (
            <div>
                <button onClick={()=> this.props.alertGara('from child')}>LabratChora</button>
                <LabratNati alertGaraiHaal={this.props.alertGara}></LabratNati>
            </div>
        );
    }
}

export default LabratChora;