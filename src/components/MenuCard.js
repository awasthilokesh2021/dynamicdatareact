import React from "react";

const MenuCard = ({menuDa}) => {
  return (
    <>
    <section className="sectiondata">
      {menuDa.map((currElem) => {
        return (
          <>
            <div className="container">
              <div className="card">
                <div className="card-body">
                  <span className="number">{currElem.id}</span>
                  <span className="card-author">{currElem.category}</span>
                  <h2 className="card-title">{currElem.name}</h2>
                  <span className="description">
                    Food photography is an area of photography where food is
                    photographed as the main subject for still images.
                  </span>
                  <button style={{backgroundColor:"red", padding:"4px",cursor:"pointer"}}>Order Now</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;
