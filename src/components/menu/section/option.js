import React from 'react'

export default function Option (props) {
    const {img, title, description, price} = props;
    const [counter, setCounter] = React.useState(0);

    return (
        <div class={`option ${counter > 0 ? "selected" : ""}`} onClick={() => counter === 0 ? setCounter(counter + 1) : counter}>
            <img src={`assets/img/${img}.png`} />
            <div class="title">{title}</div>
            <div class="description">{description}</div>
            <div class="add">
                <div class="price">{`R$ ${price}`}</div>
                <div class="counter">
                    <ion-icon class="red" name="remove-outline" onClick={() => setCounter(counter - 1)}></ion-icon>
                    {counter}
                    <ion-icon class="green" name="add-outline" onClick={() => setCounter(counter + 1)}></ion-icon>
                </div>
            </div>
        </div>
    );
}