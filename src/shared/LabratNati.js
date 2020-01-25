import React, {Component} from 'react';

class LabratNati extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.alertGaraiHaal('from grandchild')}>LabratNati</button>
            </div>
        );
    }
}

export default LabratNati;