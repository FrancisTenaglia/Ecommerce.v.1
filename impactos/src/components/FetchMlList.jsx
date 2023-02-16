import FetchMl from "./FetchMl";

const FetchMlList = ({items}) => {
    return (  
        <div className="row">
            {items.map(item => ( 
                <div className="col-md-2 mb-3" key={item.id}>
                    <FetchMl item={item} />  
                </div>
                ))
            }
        </div>
    )
}

export default FetchMlList;

