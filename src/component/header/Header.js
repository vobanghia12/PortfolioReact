import NavBar from "./NavBar";
import React from "react";
import Hero from "./Hero";

class Header extends React.Component {
    listener = null;
    state = {
        nav: false
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount()
        {
            window.removeEventListener('scroll')
        }
    handleScroll = () =>{
        if(window.pageYOffset > 140){
            if(!this.state.nav) {
                this.setState({nav: true});
            }
        }
        else {
                if(this.state.nav) this.setState({nav: false})
            }
    }
    
    render(){
        return(
            <header>
                <NavBar className={`${this.state.nav && 'bg-white z-10 overflow-hidden'}`}/>
                <Hero/>
            </header>
            
        )
    }
}

export default Header;