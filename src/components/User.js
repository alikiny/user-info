import React, { useEffect, useState } from 'react';

function User(props) {

    const userId = props.match.params.id
    const [user, setUser] = useState()
    const [isloading, setLoading] = useState()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setLoading(true)
                console.log(data)
            });
    }, [])
    return (
        <div>
            {isloading && (
                <div className='container p-5'>
                    <div className='margin-auto'>
                        <h3 className='text-center'>User info</h3>
                        <div className='row justify-content-center'>
                            <div className='card col-4 border p-5'>
                                <ul>
                                    <li>name: {user.name}</li>
                                    <li>username: {user.username}</li>
                                    <li>email: {user.email}</li>
                                    <li>phone: {user.phone}</li>
                                    <li>company: {user.company.name}</li>
                                    <li>website: {user.website}</li>
                                    <li>address:
                                        <ul>
                                            <li>street: {user.address.street}</li>
                                            <li>suite: {user.address.suite}</li>
                                            <li>zipcode: {user.address.zipcode}</li>
                                            <li>city: {user.address.city}</li>
                                        </ul>

                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
            )
            }

        </div>

    );
}

export default User;