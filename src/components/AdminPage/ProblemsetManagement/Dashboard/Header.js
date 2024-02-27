import React from "react";


const Header = ({ setIsAdding}) => {
  return (
    <header>
      <h1>ProblemSet Management</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)}>Add ProblemSet</button>
      </div>


    </header>
  );
};

export default Header;
