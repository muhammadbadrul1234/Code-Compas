import React from "react";
import { useCartContext } from "../context/cart_context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { MdClear } from "react-icons/md";
import HomeNavbar from "../../LandingPage/Components/Navbar";
import { auth, db} from "../../firebase";
import {
  collection,
  getCollection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { Navigate } from "react-router-dom";


const CartPage = () => {
  const navigate = useNavigate();
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <NotFoundWrapper>
        <div className="container">No items found in the cart.</div>
      </NotFoundWrapper>
    );
  }
  console.log(cartItems);

  console.log(cartItems[0].course_name);

  const courseName = cartItems[0].course_name;
  const courseId = cartItems[0].courseID;
  const coursePrice = cartItems[0].discounted_price;
  const mentor = cartItems[0].creator;
  
  const email = auth.currentUser.email;



  const datawrite = async (e) => {

    const docRef = doc(db, "purchasedata", auth.currentUser.email);

    await updateDoc(docRef, {
      courseName: arrayUnion(courseName),
    });

 
    cartItems.fill(null);
    clearCart();
    navigate("/home");
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    datawrite();
  };

  return (
    <CartWrapper>
      <HomeNavbar />
      <div className="container">
        <div className="cart-pg-title">
          <h3>Shopping Cart</h3>
        </div>
        <div className="cart-grid grid">
          {/* card grid left */}
          <div className="cart-grid-left">
            <div className="flex flex-wrap flex-between">
              <div className="cart-count-info">
                <span className="fw-7 fs-18">{total_items}</span> Course in Cart
              </div>
              <button
                type="button"
                className="cart-clear-btn flex fs-15 fw-6 text"
                onClick={() => clearCart()}
              >
                <MdClear className="text-pink" />
                <span className="d-inline-block text-pink">Clear All</span>
              </button>
            </div>

            <div className="cart-items-list grid">
              {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.courseID} cartItem={cartItem} />;
              })}
            </div>
          </div>
          {/* end of grid left */}
          {/* cart grid right */}
          <div className="cart-grid-right">
            <div className="cart-total">
              <span className="d-block fs-18 fw-6">Total:</span>
              <div className="cart-total-value fw-8">
                BDT{total_amount.toFixed(2)}
              </div>
              <button
                type="button"
                className="checkout-btn bg-purple text-white fw-6"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
          {/* end of cart grid right */}
        </div>
      </div>
    </CartWrapper>
  );
};

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

const CartWrapper = styled.div`
  padding: 30px 0;
  .card-pg-title {
    padding: 20px 0 6px 0;
  }
  .cart-grid {
    row-gap: 40px;
    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-left: 6px;
      }
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value {
      font-size: 34px;
    }
    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-dark);
      }
    }
    .cart-total {
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }
`;

export default CartPage;
