import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addToBasket } from "../actions";

function Listing(props) {
  const { items } = props;
  // const submit = (e) => {
  //   e.preventDefault();
  //   props.dispatch(addToBasket(item));
  // };

  return (
    <Main>
      <Item_container>
        {items.map((item) => {
          return (
            <Item key={item.id} className="Item">
              <Description>
                <h2>{item.name}</h2>
                <h5>{item.description}</h5>

                <h3>${item.price}</h3>
                <Rating>
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <p>🌟</p>
                    ))}
                </Rating>
                <button onClick={() => props.dispatch(addToBasket(item))}>
                  Add to cart
                </button>
              </Description>
              <img src={item.image} alt="fishing reel" />
            </Item>
          );
        })}
      </Item_container>
      <footer></footer>
    </Main>
  );
}

const mapState = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapState)(Listing);
const Item_container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  .Item:hover {
    box-shadow: 0px 0px 10px grey;
  }
`;
const Item = styled.div`
  //border: 2px solid grey;
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
  margin-top: 20px;
  width: 35%;
  img {
    width: 50%;
    padding: 15px;
  }
  transition: box-shadow 0.3s;
`;
const Main = styled.div`
  margin: auto;
`;
const Description = styled.div`
  padding: 15px;
`;
const Rating = styled.div`
  display: flex;
`;
