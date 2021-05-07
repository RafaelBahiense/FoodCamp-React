import React from "react";

export default function Footer(props) {
    return (
        <div className={"footer"}>
            <a href="#" className={`fazer-pedido ${props.finishedOrder ? "active" : ""}`} onClick={() => props.finishedOrder ? props.buildOrder() : alert("finalize seu pedido")}>
                Selecione os 3 itens<br></br>para fechar o pedido
            </a>
        </div>
    );
}