import { Axios } from '../utils/helpers';
import React, {useEffect, useState} from "react";

export default function Products() {
    var currentPage = 0; // Can also set in state
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (currentPage == 0) { // first time load 2
            getData();
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        var userHeight   = window.innerHeight + window.scrollY - 55;
        var windowHeight = document.getElementById("myDIV").offsetHeight;
 
        if (userHeight >= windowHeight) {
            getData();
        }
    }

    const getData = () => {
        currentPage++; 
        Axios.get(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`).then(response => {

            if (response.status== 200 && response.data && response.data.data) {
                var resData = response.data.data;
                setUsers((value) => ([
                    ...value,
                    ...resData
                ]));
            }
            return Promise.resolve;
        });
    }

    return(
        <div className="card m-3 shadow p-3 bg-body rounded" id="myDIV">
            <div className="row justify-content-md-center">
                <div className="col-md-8" align="center">
                <div className="cord-body bg-light">
                    <h3 className='text-center'>Infinite Scroll 2</h3>
                    <p>This page load 10 records for 1 time and load again when you go to bottom, you can view infinte details like other social meadias.</p>
                </div>
                    {users && users.length > 0 && users.map((user) => { 
                        return(
                            <>
                                <div key={Math.random()} className="card m-3 ">
                                    <div className="cord-body">
                                        <div className="card-title">
                                            <h1 className="text bg-primary">{user.name} </h1>
                                        </div>
                                        <div className="cord-body bg-light">
                                            {user.airline && user.airline.length > 0 &&
                                                <>
                                                    <a href={user.airline[0].website} target="_blank" className="text text-warning">
                                                        <img src={user.airline[0].logo} className="logo" />
                                                    </a>
                                                    <h2 className="text text-danger">{user.airline[0].country}</h2>
                                                        <h3>{user.airline[0].name}</h3>
                                                </>
                                            }
                                            <p>Traveled more then {user.trips}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                <div className='loader' id='loader'></div>
                </div> 
            </div>
        </div>
    );
}