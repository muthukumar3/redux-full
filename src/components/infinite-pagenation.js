import axios from "axios";
import React, { useState, useEffect, Fragment} from "react"; 
import Button from "./components/button";

export default function InfinitePagenation() {
    const [data, setData] = useState({});
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        setProcessing(true); 
        axios.get(`https://api.instantwebtools.net/v1/passenger?page=1&size=15`).then(response => {
            if (response.status == 200) {
                setData((data)=> ({
                    data : response.data.data,
                    next_page : 2
                }));
            }
            setProcessing(false); 
            return Promise.resolve;
        });
        window.addEventListener('scroll', handleScroll, true);
    }, []);

    const fetchMoreData = () => {
        if (data.next_page) {
            setProcessing(true); 
            axios.get(`https://api.instantwebtools.net/v1/passenger?page=${data.next_page}&size=15`).then(response => {
                if (response.status == 200) {
                    setData((data)=> ({
                        data : [...data.data, ...response.data.data],
                        next_page : data.next_page+1
                    }));
                }
                setProcessing(false); 
                return Promise.resolve;
            }).then((err) => {
                setProcessing(false); 
                console.log(err);
                return Promise.reject;
            });
        }  
    };
    
    const handleScroll = (e) => {
        const bottom = Math.round(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;
        if (bottom && document.getElementById("more_button")) {
            document.getElementById("more_button").click();
        }
    } 

    return(
        <Fragment>
            <div className="card m-3 shadow p-3 bg-body rounded">
                <section className="d-flex align-items-center summary-list category-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center"> 
                                <h3>Infinite Scroll functionolity </h3>
                            </div>
                            {data && data.data && data.data.length > 0 && data.data.map((user) => {
                                return(
                                    <Fragment key={Math.random()}>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-2"> 
                                            <div className="card m-3 shadow p-3 bg-body rounded"> 
                                                <img src={user.airline[0].logo} className="logo" alt="card-image1"/>
                                                <div className="card-body">
                                                    <h5 className="card-title card-heading">{user.name}</h5>
                                                    <h5 className="card-title card-heading">{user.airline[0].name}</h5>
                                                    <p className="card-content">{user.airline[0].slogan}</p>
                                                </div>
                                            </div> 
                                        </div>
                                    </Fragment>
                                )
                            })}
                            {processing && <div className='loader align-items-center' id='loader'></div> }
                            {data && data.next_page &&   
                                <Button 
                                    type     = "button" 
                                    className= "hidden" 
                                    onClick  = {fetchMoreData} 
                                    id       = "more_button" 
                                    name     = "More" 
                                    disabled = {processing} 
                                /> 
                            }
                        </div>
                    </div>
                </section>
            </div>

        </Fragment>
    );
} 
 