export default function Option (props) {
    return (
        <div class="opcao" onclick="selecionarPrato()">
            <img src={`assets/img/${props.img}.png`} />
            <div class="titulo">{props.title}</div>
            <div class="descricao">{props.description}</div>
            <div class="preco">{`R$ ${props.price}`}</div>
            <div class="check">
            <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    );
}