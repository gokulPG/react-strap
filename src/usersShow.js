import React from 'react'
import axios from 'axios'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap"

class UserShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:{},
        }
    }

   
    componentDidMount(){
        const id = this.props.id 
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                this.setState(() => ({
                    user: response.data
                }))
            })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <Modal
                  isOpen={this.props.modal}
                  onClick={this.handle}
                  className={this.props.className}>
                    <ModalHeader> User Details </ModalHeader>
                    <ModalBody>
                        <div>
                            <h2>{this.state.user.name}</h2>
                            <p>{this.state.user.email}</p>
                            <p>{this.state.user.phone}</p>
                            <p>{this.state.user.website}</p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>
                        Cancel
                        </Button>
                    </ModalFooter>
                </Modal>   
            </div>
        )
    }
}

                    // <h2>{this.state.user.name}</h2>
                    // <p>{this.state.user.email}</p>
                    // <p>{this.state.user.phone}</p>
                    // <p>{this.state.user.website}</p>

export default UserShow