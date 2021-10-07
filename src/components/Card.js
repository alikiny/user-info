import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ user }) {


    const circleName = user.name.split('')[0]
    const website = 'http://' + user.website
    const userLink = '/user/' + user.id
 
    return (
        <div className='col-md-4 p-5'>

            <div className="card">
                <div className='text-center p-3'>
                    <div className='circle'>
                        {circleName}
                    </div>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title"> <b>{user.name}</b> </h6>
                    <p className="text-muted small "> <i> @{user.username}</i></p>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href={website} className='website small'>{website}</a>
                    </div>
                    <div className='mt-4'>
                        <Link
                            to={userLink}
                            target="_blank"
                            className="btn btn-dark">Show details</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;