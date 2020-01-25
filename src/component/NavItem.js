import React,{Component} from 'react';

class NavItem extends Component{

  render (){
    return(
    <div className="nav-item">
    {this.props.name}
  
    </div>
  );
}
}

export default NavItem;