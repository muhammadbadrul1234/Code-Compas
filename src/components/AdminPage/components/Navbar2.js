// import React, { useState } from "react";

// import h1logo from "../assets/h1logo.png";
// import styled from "styled-components";

// const AdminNavbar2 = () => {
//   const [showLinks, setShowLinks] = React.useState(false);

//   return (
//     <>
//       <NavbarSection1>
//         <nav>
//           <div className="main-nav">
//             {/* Logo Part */}
//             <div className="logo">
//               <img src={h1logo} alt="Code Compass" />
//             </div>
//             {/* Menu Part */}
//             <div className="menu">
//               <ul>
//                 <li>Signed in As Admin</li>
//                 <li>
//                   <a href="/admin">Admin Panel</a>
//                 </li>

//                 <li>
//                   <a href="/">Logout</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </NavbarSection1>
//       {/* hero section */}
//     </>
//   );
// };

// const NavbarSection1 = styled.div`
//   a {
//     text-decoration: none;

//     color: #000;
//   }
//   li {
//     list-style: none;
//   }

//   .main-nav {
//     background-color: #f9f9f9;
//     width: 100%;
//     height: 10rem;
//     display: grid;
//     grid-template-columns: 1.5fr 3fr;
//     align-items: center;
//     justify-content: center;
//   }
//   img {
//     width: 200px;
//     height: 80px;
//     object-fit: cover;
//     object-position: center;
//     margin-left: 10rem;
//   }

//   .logo {
//     display: flex;
//     grid-column: 1/2;
//     align-items: center;
//     justify-content: center;
//     margin-left: 3rem;
//   }
//   .menu {
//     width: 400px;
//     grid-column: 3/3;
//     margin-right: 3rem;
//     margin-top: 1rem;
//     align-items: center;
//     justify-content: center;
//     align-items: center;
//   }

//   .menu ul {
//     align-items: right;
//     display: flex;
//     justify-content: space-around;
//     font-family: "Poppins", sans-serif;
//     font-weight: 600;
//   }

//   .menu ul :hover {
//     color: #336cff;
//   }

//   .hamburger-menu {
//     display: none;
//   }

//   @media (max-width: 998px) {
//     .hamburger-menu {
//       grid-column: 2/3;
//       display: flex;
//       justify-content: flex-end;
//       align-items: right;
//       height: 45px;
//     }
//     .menu ul {
//       display: none;
//     }
//   }
// `;

// export default AdminNavbar2;

import React, { useState } from "react";
import h1logo from "../assets/h1logo.png";
import styled from "styled-components";

const AdminNavbar2 = () => {
  const [showLinks, setShowLinks] = useState(true);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <NavbarSection1>
        <nav>
          <div className="main-nav">
            {/* Hamburger Menu */}
            
           

            {/* Logo Part */}
            <div className="logo">
              <img src={h1logo} alt="Code Compass" />
            </div>

            {/* Menu Part */}
            <div className={`menu ${showLinks ? "open" : ""}`}>
              <ul>
                <li>Signed in As Admin</li>
                <li>
                  <a href="/admin">Admin Panel</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </NavbarSection1>
      {/* hero section */}
    </>
  );
};

const NavbarSection1 = styled.div`
  /* ... existing styles ... */

  .hamburger-menu {
    grid-column: 1/2;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  }

  .menu {
    /* ... existing styles ... */
    transition: transform 0.3s ease-in-out;
  }

  .menu.open {
    transform: translateX(0);
  }

  @media (max-width: 998px) {
    .hamburger-menu {
      display: flex;
    }

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 200px;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 3rem;
      transform: translateX(-100%);
    }
  }
`;

export default AdminNavbar2;
