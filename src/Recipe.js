import React from "react";
import style from "./recipe.module.css";

const recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1>{props.item.recipe.label}</h1>
      <h4>
        <span>{props.item.recipe.dietLabels}</span>
        {props.item.recipe.healthLabels.map((hl) => (
          <span> | {hl}</span>
        ))}
      </h4>
      <ol>
        {props.item.recipe.ingredients.map((ingrediant) => (
          <li>{ingrediant.text}</li>
        ))}
      </ol>
      <p>
        Total Calories:{" "}
        <span style={{ color: "maroon", fontWeight: "bold" }}>
          {Math.round(props.item.recipe.calories)}
        </span>
      </p>
      <img className={style.image} src={props.item.recipe.image} alt="" />
    </div>
  );
};
export default recipe;
