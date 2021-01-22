import React from 'react'

const Contact = () =>{
    return (
        <div>
            <h1>Welcome to Contact page</h1>
        </div>
    )
}
export default Contact;

// const API_URL = 'http://jsonplaceholder.typicode.com';

// class PersonList extends Component {
//     state = {
//         users: []
//     }
//     componentDidMount() {
//         const url = `${API_URL}/users/`;
//         axios.get(url).then(response => response.data)
//             .then((data) => {
//                 this.setState({ users: data })
//                 console.log(this.state.users)
//             })
//     }

//     render() {

//         return (

//                 <div>
//                     <h1 className='title'>React Axios Example</h1>
//                     {this.state.users.map((user) => (
//                         <div>
//                             <h4>
//                                 id : {user.id}
//                             </h4>
//                             <h4> Name :{user.name}</h4>
//                             <h5>
//                                 Email : {user.email}
//                             </h5>
//                             <h5>
//                                 Phone : {user.phone}
//                             </h5>
//                             <br></br>
//                         </div>

//                     ))}
//                 </div>
//         );
//     }


// }