import { useState } from "react";
import cross from "./cross.png";
import hori from "./horizontal.png";
function Menu() {
  const [isHori, setHori] = useState(true);

  function handleclick() {
    if (isHori === true) {
      setHori(false);
    } else {
      setHori(true);
    }
  }
  return (
    <>
      <div className="menu_container">
        <div className="gallery_menu_title">
          <h3>Gallery World</h3>
          <img src={hori} alt="hori" onClick={handleclick} />
          <div
            className={isHori === true ? "list_item" : "list_item_one"}
            id="trans_menu"
          >
            <img src={cross} alt="cross" onClick={handleclick} />

            <div className="list_one">Home</div>
            <div className="list_one">About</div>
            <div className="list_one">Contact</div>
            <div className="list_one">Motive</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
