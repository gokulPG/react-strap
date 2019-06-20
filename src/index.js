import React from 'react'
import ReactDOM from 'react-dom'
import UsersList from './usersList'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*routes*/}
                <UsersList />
                        {/* <Route path="/users/:id" render={(props) => {
                            return <UserShow {...props} />
                        }} exact={true} />  */}
            </div>
            </BrowserRouter>
        )
    }

}


ReactDOM.render(<App/>,document.getElementById('root'))
