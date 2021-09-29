import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/item')
      .then(res => {
        // this.setState({items: res.data})
        // console.log(this.state.items);
          console.log(res.data);
       
        
      })
  }
  // In the above, within setState, I am setting the books variable's value to a variable res.data.

  render() {
    return (
      
        <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title">
                BOOK CATALOG
            </h3>
            </div>
            <div class="panel-body">
            {/* <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4> */}
            <table className="table table-stripe">
                <thead>
                <tr>
                    <th>Company</th>
                    <th>JobType</th>
                    <th>Register</th>
                    <th>Referal</th>
                    <th>Source</th>
                    
                </tr>
                </thead>
                <tbody>
                {this.state.items.map(item =>
                    <tr>
                         <td><Link to={`/show/${item._id}`}>{item.company}</Link></td>
                        <td>{item.jobType}</td>
                        <td>{item.register}</td>
                        <td>{item.referal}</td>
                        <td>{item.source}</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
        </div>        
    );
  }
}

export default Homepage;