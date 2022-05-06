import React, {useState} from "react"; 
import InfiniteScroll from "react-infinite-scroll-component";

export default function InfinitePagenation() {

    const [state, setState] = useState({
        items: Array.from({ length: 51 }),
        hasMore: true
    });

    const fetchMoreData = () => {
        if (state.items.length >= 500) {
          setState({ hasMore: false });
          return;
        } 
        setTimeout(() => {
            setState({
                items: state.items.concat(Array.from({ length: 51 }))
            })
        },5000);
      };
      const style = {
        height: 150,
        border: "1px solid green",
        margin: 6,
        padding: 8
      };
      console.log(state.items.length);
    return(
        <>
            <InfiniteScroll
                dataLength={state.items}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
            >
            {state.items.map((i, index) => (
                <div style={style} key={index}>
                div - #{index}
                </div>
            ))}
            </InfiniteScroll>
        </>
    )
} 
 