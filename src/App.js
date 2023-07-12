import "./main.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "./api";
import Menu from "./menu";

function App() {
  let dispatch = useDispatch();
  let { loading, data, error } = useSelector((state) => state.apiData);
  // let data_original = data_of_selector.apiData.state.data;
  const [page_number, setPageNumber] = useState(1);

  let itemPerPage = 9;
  let lastindex = itemPerPage * page_number;
  let firstIndex = lastindex - itemPerPage;
  let data_bro = data.slice(firstIndex, lastindex);
  let total_number = Math.ceil(data.length / itemPerPage);
  console.log(data);
  function handleClick() {
    if (!(page_number >= 500)) {
      setPageNumber((prev) => prev + 1);
    } else {
      setPageNumber(500);
    }
  }

  function handleDecrement() {
    if (!(page_number <= 1)) {
      setPageNumber((prev) => prev - 1);
    } else {
      setPageNumber(1);
    }
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <p>it is loading...</p>
      ) : (
        <>
          <header>
            <Menu />
          </header>
          <main>
            <section id="gallery_container">
              <div className="result">
                {data_bro.map((item, index) => {
                  return (
                    <>
                      <div key={index} className="data_container">
                        <img src={item.thumbnailUrl} alt="image"></img>
                        <p>
                          <b>Short Description:</b>
                          {item.title}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="numbers">
                <button onClick={handleDecrement}>Prev</button>
                <p>Page Number:{page_number}</p>
                <button onClick={handleClick}>Next</button>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
