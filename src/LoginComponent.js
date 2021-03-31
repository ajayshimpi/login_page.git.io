import React,{Component} from 'react';
class LoginComponent extends Component {
    constructor(){
        super();
        this.state ={
   err:''
        };
    }
    login(e){
        e.preventDefault();        
        var Email = e.target.elements.Email.value;
        var Password = e.target.elements.Password.value;
        if (Email == 'ajay@gmail.com' && Password == '123456') {
            this.props.history.push('/Welcome/'+ Email);

        }else{
            this.setState({
                err:'invalid'
            });
        }
    }
    render() {
        let format = {
            color:"red" 
            
            
        };
      return(
        <div className="main_div">
            
            
            <span style={format}>{this.state.err !== '' ? this.state.err : ''}</span>
            <form method ="post" onSubmit={this.login.bind(this)}>
                Email<input type="text" name="Email"/>
                <br/> <br/>
                Password <input type="Password" name="Password"/>
                <br/> <br/>
                <input  type="submit" value="Login"/>
                <br/> <br/>
            </form>
        </div>
        );
    }
  }

  export default LoginComponent;