import { useState } from "react";

const Home = ({data}) => {

    const [noOfElement, setNoOfElement] = useState(4);

    const loadMore = () => {
        setNoOfElement(noOfElement + 4);
    }

    const slice = data.cardData.slice(0, noOfElement);


  return (
    <div className="py-4 container">
      <div className="row justify-content-center">
          {
              slice.map((item, index)=>(
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                    <div className="card p-0 overflow-hidden h-100 shadow">
                        <img src={item.image} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title tit">{item.title}</h5>
                            <p className="card-text desc">{item.description}</p>
                        </div>
                    </div>
                </div>
              ))
          }
          <button className="btn btn-dark d-block w-100" onClick={()=>loadMore()}>
            Load more
          </button>
      </div>
    </div>
  )
}

export default Home
