import React,{Component} from "react";
import './Search-box.styles.css'


class SearchBox extends Component{
    render(){
        return(
            <input
          className={`search-box ${this.props.className}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
        );
    }
}

export default SearchBox;