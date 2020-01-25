import React,{Component} from 'react';
import Logo from '../component/Logo';
import NavItems from './NavItems';
import {withRouter} from 'react-router-dom'
class TopNav extends Component{

	// object = {
	// 	navItems:["Home","About","Services","Product","Contact"]
	// }
	state={
		search:''
	}
	searchTermHandler=(e)=>{
		if(e.key=='Enter'){
			this.props.history.replace('search/'+this.state.search)

		}else {

			this.setState({search: e.target.value})
		}
	}

  render (){
    return(
    <nav>
   		<Logo/>
		<div className={'search'}>

				<input type ="search"
					   onKeyUp={(e)=>this.searchTermHandler(e)}
					   placeholder={"Enter a title, actor or genre"}/>
		</div>
    </nav>
  )
}
}

export default withRouter(TopNav);