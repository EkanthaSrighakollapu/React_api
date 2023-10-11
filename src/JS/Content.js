import React from 'react'
function content(){
  return(
    <div>
      <h1 align="center"> Student Registration form</h1>
      <form>
      <table align="center" width="300" height="150" bgcolor="#f5a142">
          <tr>
            <td><label>Enter Name:</label></td>
            <td><input type="text" placeholder="Enter your name" id="i1" name="i1"></input></td>
          </tr>
          <tr>
            <td><label>Enter RegNo</label></td>
            <td><input type="text" placeholder="Enter your regno" id="i2" name="i2"></input></td>
          </tr>
          <tr>
            <td><label>Branch</label></td>
            <td>
              <select>
                <option value="aim">AIM</option>
                <option value="cai">CAI</option>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="civil">CIVIL</option>
              </select>
            </td>
          </tr>
         </table>
         </form> 
    </div>
    );
  }
  export default content





/*import './Content.css';
class Content extends React.Component
{
    render() {
        return (
          <div>
          <h1 style={{background color:'red'}}>Hello Style!</h1>
          <p>Add a little style!</p>
          </div>
        );
      }
}
export default Content*/