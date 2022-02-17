import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchFail, fetchBitcoinPrice } from "./../state/action-creators";

import axios from "axios";

const Bitcoin = ({ price, isFetching, error, dispatch }) => {
  useEffect(() => {
    dispatch(fetchBitcoinPrice());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching ₿itcoin price...</h2>;
  }

  const handleClick = () => {
    dispatch(fetchBitcoinPrice());
  };
  return (
    <>
      <div>
        <h1>₿</h1>
        <h2>${price.rate}</h2>
        <h4>{price.description}</h4>
      </div>
      <button onClick={handleClick}>Current ₿itcoin price </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.price,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Bitcoin);
