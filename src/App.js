import React from 'react'
import './index.css'



// npm i react-router-dom
// npm i react-router-dom






export class App extends React.Component{

  
  constructor(){
    super();
    this.state={

      name : "",
      dept :"",
      rating : "",
      divState:false,
      user :[]
    }
  }
   handleChange=(event)=>{
   

    this.setState({
      [event.target.name]: event.target.value})
    
   }

   clickHandler=(event)=>{

    event.preventDefault();

    var tempObj={
      name: this.state.name,
      dept : this.state.dept,
      rating: this.state.rating,
      
    }

    var Arr=this.state.user;
    Arr.push(tempObj);
    this.setState({user: Arr,divState:true});


   }



  render(){

    
     
  
    return (

      
      <div className="forms">
        <h2 >EMPLOYEE FEEDBACK FORM</h2>
      <form onSubmit={e=>e.preventDefault()} className="forms-div">
        <label >Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
        <input type="text" name="name" id="name" onChange={this.handleChange}></input>
        <p></p>
        <label>Department: &nbsp;</label>
        <input type="text" name="dept" id="dept" onChange={this.handleChange}></input>
        <p></p>
        <label>Rating: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</label>
        <input type="number" name="rating" id="Rating" onChange={this.handleChange}></input>
        <p></p>
        <button onClick={this.clickHandler.bind(this)}>Submit</button>

     

      </form>
      {this.state.divState ?<div className="wrapper">
      {this.state.user.map((value,index)=>{
        return (
          
         
          <div className="box">
            <span>Name:</span> {value.name} || <span>Department:</span> {value.dept} || <span>Rating:</span> {value.rating}
          </div>
          
        )
      })}
      </div>
  : null}

      </div>

      
      
    )
  }
}



  
 

