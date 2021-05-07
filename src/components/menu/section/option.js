import React from 'react'

export default function Option (props) {
    const {img, alt, title, description, price, setQuantity, sectionIndex, option} = props;
    const [counter, setCounter] = React.useState(0);
    function changeList (num) {
        setCounter(counter + num);
        setQuantity(sectionIndex, option, counter + num);
    }
    
    return (
        <div className={`option ${counter > 0 ? "selected" : ""}`} onClick={() => counter === 0 ? changeList(1) : counter}>
            <img src={`assets/img/${img}.png`} alt={alt}/>
            <div className={"title"}>{title}</div>
            <div className={"description"}>{description}</div>
            <div className={"add"}>
                <div className={"price"}>{`R$ ${(Math.round(price * 100) / 100).toFixed(2)}`}</div>
                <div className={"counter"}>
                    <ion-icon className={"red"} name="remove-outline" onClick={() => changeList(-1)}></ion-icon>
                    {counter}
                    <ion-icon className={"green"} name="add-outline" onClick={() => changeList(1)}></ion-icon>
                </div>
            </div>
        </div>
    );
}