import React, {useEffect, useState} from "react";
import { Axios } from '../utils/helpers';

export default function Products() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (page == 1) { // first time load once
            getData();
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        var userHeight   = window.innerHeight + window.scrollY - 55;
        var windowHeight = document.getElementById("myDIV").offsetHeight;
 
        if (userHeight == windowHeight) {
            getData();
        }
    }

    const getData = () => {
        Axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).then(response => {
            
            if (response.status== 200 && response.data && response.data.data) {
                setPage(page => (page+1));

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
        <div className="container" id="myDIV">
            <div className="row justify-content-md-center">
                <div className="col-md-8" align="center"> 
                <div className="cord-body bg-light">
                    <h5 className="text text-danger">
                        This page load 10 records for 1 time and load again when you go to bottom, you can view infinte details like other social meadias.
                    </h5>
                </div>
                    {users && users.length > 0 && users.map((user) => { 
                        return(
                            <div key={Math.random()}>
                                <div className="card mt-5">
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
                                {/* Another Model design */}

                                {/* <div className="container mt-3"> 
                                    <div className="card">
                                    <img className="card-img-top" src={user.airline[0].logo} alt="Card image" />
                                        <div className="card-body">
                                        <h4 className="card-title">{user.name}</h4>
                                        <p className="card-text">{user.airline[0].slogan}</p>
                                        <a href={user.airline[0].website} target="_blank" className="btn btn-primary">Website</a>
                                        </div>
                                        </div>  
                                    </div> */}
                            </div>
                        )
                    })
                }
                <div className="" id="loader"></div>
                </div> 
            </div>
        </div>
    );
}