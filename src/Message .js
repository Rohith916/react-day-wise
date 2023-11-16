import React from 'react';

class Message extends React.Component {
  render() {
    
    const formStyle = {
      border: '2px solid #333',
      backgroundColor: 'lightblue',
      color:'black',
      padding: '30px',
      width: '500px',
      margin: '0 auto',
    };

    const labelStyle = {
      display: 'block',
      marginBottom: '10px',
    };

    const inputStyle = {
      width: '95%',
      padding: '10px',
      marginBottom: '15px',
    };

    const checkboxLabelStyle = {
      marginRight: '5px',
    };

    const submitButtonStyle = {
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    };

    const submitButtonHoverStyle = {
      backgroundColor: '#555',
    };

    return (
      <div>
        <h1>Registration Form</h1>
        <form action="/submit" method="post" style={formStyle}>
          <label for="name" style={labelStyle}>Name:</label>
          <input type="text" id="name" name="name" required style={inputStyle} />

          <label for="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" name="email" required style={inputStyle} />

          <label for="comments" style={labelStyle}>Comments:</label>
          <textarea id="comments" name="comments" rows="4" required style={inputStyle}></textarea>

          

          <label style={labelStyle}>
            <input type="checkbox" id="subscribe" name="subscribe" value="yes" />
            <span style={checkboxLabelStyle}>Subscribe to our newsletter</span>
          </label>

          <input type="submit" value="Submit" style={submitButtonStyle} onClick={()=>alert("Thanks for Registering")} />
          
        </form>
      </div>
    );
  }
}

export default Message;
