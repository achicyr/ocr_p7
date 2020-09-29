import React from 'react'
import $ from "jquery";

class Contest extends React.Component{
  constructor(p){
    super(p)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      slogan: "",
      slogans: ""
    }
    $('body').attr({'class': "menu_contest"})
  }
  manageForm = (event) => {
    event.preventDefault()
    let a = new FormData(event.target)
    console.log(a.get("slogan"));
    let b = {name:a.get("name"), slogan:a.get("slogan")}
    console.log(b);
    
    const name = event.target.name, surname = event.target.surname, email = event.target.email, slogan = event.target.slogan
    fetch("http://localhost:7000/contests.json", {
      method: 'POST', mode: 'cors',
      body: new FormData(event.target)
    }).then((e)=>{
      e.text().then((e)=>{
        if(e)alert("Slogan envoyé avec succès")
        else alert('erreur')
      });
    })
  }
  handleFirstName = (e) => {
    this.setState({firstName: e.target.value})
  }
  handleLastName = (e) => {
    this.setState({lastName: e.target.value})
  }
  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }
  handleSlogan = (e) => {
    this.setState({slogan: e.target.value})
  }
  render(){
    console.log();
    if(typeof this.state.slogans === "string")fetch("http://localhost:7000/contests.json").then((e)=>{
      e.json().then((e)=>{
        console.log(e);
        this.setState({slogans: e.map((el,i)=>(
          <li key={i}> 
            <p>{el.firstname || "{firsnName}"} - {el.lastname || "{lastname}"}</p>
            <p>{el.email || "{email}"}</p>
            <p className="slogan">{el.slogan}</p>
            <p><span>Votes: </span>
              <button className="btn">
                      <span className="badge badge-primary">{el.votes}</span>
              </button>
              <span className="float-right"><u><b>created at:</b></u> {el.created_at}</span>
            </p>
          </li>
        ))})
      });
    })
    return(
      <>
        <h2>Would you like to participate to the construction of the slogan for the tour bike this year ?</h2>
        <p>Just add your name, surname, email adress so that we can contact you if needed to announce that your slogan has been selected for example !!</p>
        <p>No add, no servey will be targetted to the email adress you fill here</p>
        <hr className="mb-5"/>
        <form onSubmit={this.manageForm} method="POST">
          <input name="id" type="hidden" className="form-control" value="12"/>
          <div className="form-group">
            <label htmlFor="firstname">Enter your firstname: </label>
            <input value={this.state.firstname} onChange={this.handleFirstName} name="firstname" type="text" className="form-control" placeholder="ex: Harry"/>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Enter your lastname: </label>
            <input value={this.state.lastname} onChange={this.handleLastName} name="lastname" type="text" className="form-control" placeholder="ex: Mike"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email @dress: </label>
            <input value={this.state.email} onChange={this.handleEmail} name="email" type="text" className="form-control" placeholder="ex: harry.mike@emailhost.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="slogan">Enter your slogan proposition (max of 50 characters): </label>
            <input value={this.state.slogan} onChange={this.handleSlogan} name="slogan" type="text" className="form-control" placeholder="ex: A good slogan is this !"/>
          </div>
          <hr/>
          <input type="submit"/>
        </form>
        <hr/>
        <article>
          <h3>Participants proposals:</h3>
          <div></div>
          <ul class="slogans">
            { this.state.slogans }
          </ul>
        </article>
      </>
    )
  }
}
export default Contest
