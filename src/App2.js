import React from 'react';

class PassMessage extends React.Component{
    constructor()
    {
        super()
        this.state={
            message:'WELCOME VISITOR'
        }
    }
    changeMessage()
    {
        this.setState({
            message: 'thank you for subscribe'

        })
    }
    render(){
        return (
            <div>
            <h1>{this.state.message}</h1>
            <form>
  <label for="fname">First name:</label><br></br>
  <input type="text" id="fname" name="fname" /><br></br>
  <label for="lname">Last name:</label><br></br>
  <input type="text" id="lname" name="lname" /><br></br>
   <h1>Which Language do You like ?</h1> <br></br>
   <input type="radio" id="html" name="fav_language" value="HTML" />
  <label for="html">HTML</label><br /><br></br>
  <input type="radio" id="css" name="fav_language" value="CSS" />
  <label for="css">CSS</label><br /><br></br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
  <label for="javascript">JavaScript</label>

  <br></br><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label for="vehicle1"> I have a bike</label><br />
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label for="vehicle2"> I have a car</label><br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label for="vehicle3"> I have a boat</label>
</form><br></br>
            <button onClick={()=>this.changeMessage()}>Subcribe</button>
            </div>
        );
    }
}
export default PassMessage;