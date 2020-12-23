import React from 'react'
import style from './recipe.module.css'


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.h1}>{title}</h1>
            <ol className={style.ol}>
                {ingredients.map(ingredient =>(
                    <li className={style.li}>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt={title}></img>
            <p className={style.p}><b>Calories: {calories}</b></p>
        </div>
    )
}

export default Recipe;