import React from 'react'
// npm install --save axios
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import UserShow from './usersShow';

class Users extends React.Component{
    constructor(){
        super()
        this.state = {
            users:[],
            modal:false,
            id: ''
        }
        this.toggle = this.toggle.bind(this);
    }   

    toggle(id) {
        this.setState(prevState => ({
          modal: !prevState.modal,
          id: id 
        }));
      }

    componentDidMount(){
        // ajax request or API call to the server

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response.data)
            this.setState(() => ({
                users: response.data

            }))
        })
    }
    render(){
        return(
            <div>
                {this.state.modal && <UserShow id={this.state.id}  toggle={this.toggle} modal={this.state.modal} /> }
                <h3>Listing Users - {this.state.users.length}</h3>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                        <tbody>
                                {this.state.users.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <th scope="row"> {item.id}</th> 
                                            <td>
                                                <Link onClick={() => {
                                                    this.toggle(item.id)
                                                }} >
                                                    {item.name}
                                                </Link>
                                               
                                            </td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    );
                            })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Users


