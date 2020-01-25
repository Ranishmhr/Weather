import React, {Component} from 'react';
import LabratChora from "./LabratChora";

class LabRat extends Component {

    alertValue = (val) => {
        console.log("here");
        alert(val);
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.alertValue('from labrat')}>Labrat</button>
                <LabratChora alertGara={this.alertValue}/>
            </div>
        )
    }
}

export default LabRat;