import React,{Component} from 'react';
import NavItem from '../component/NavItem';

class NavItems extends Component{
  render (){
    return(
    <div className="nav-items">
     {this.props.navItems.map(item=>(
     	<NavItem name={item}/>
     	))}
     </div>
  );
}
}
export default NavItems;
