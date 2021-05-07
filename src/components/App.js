import React from 'react';
import Navbar from './navbar/navbar';
import Menu from './menu/menu';
import Footer from './footer/footer';

const serverResponse = { data :
[
    {
    section :  [{img : "frango_yin_yang", alt : "Frango Yin Tang", title : "Frango Yin Yang", description : "Um pouco de batata, um pouco de salada", price : "14,90", quantity : 0},
                {img : "frango_yin_yang", alt : "Frango Yin Tang", title : "Carne Yin Yang", description : "Um pouco de batata, um pouco de salada", price : "17,90", quantity : 0},
                {img : "frango_yin_yang", alt : "Frango Yin Tang", title : "Peixe Yin Yang", description : "Um pouco de batata, um pouco de salada", price : "16,90", quantity : 0}],
    title : "Primeiro, seu prato"
    },
    {
    section :  [{img : "coquinha_gelada", alt : "Coquinha Gelada", title : "Coquinha gelada", description : "Lata 350ml", price : "16,90", quantity : 0},
                {img : "coquinha_gelada", alt : "Coquinha Gelada", title : "Guaraná gelado", description : "Lata 350ml", price : "4,90", quantity : 0},
                {img : "coquinha_gelada", alt : "Coquinha Gelada", title : "Suquinho gelado", description : "500ml", price : "7,90", quantity : 0}],
    title : "Agora, sua bebida"
    },
    {
    section :  [{img : "pudim", alt : "Pudim", title : "Pudim", description : "Apenas um pudim", price : "7,90", quantity : 0},
                {img : "pudim", alt : "Pudim", title : "Mousse", description : "Cremoso, gostoso", price : "6,90", quantity : 0},
                {img : "pudim", alt : "Pudim", title : "Brownie", description : "É um bolinho", price : "4,90", quantity : 0}], 
    title : "Por fim, sua sobremesa"
    }
]}

export default function App() {
    const [list, setList] = React.useState(serverResponse.data);
    const [finishedOrder, setFinishedOrder] = React.useState(false);

    function setQuantity(sectionIndex, option, num) {
        serverResponse.data[sectionIndex].section[option].quantity = num;
        setList([...serverResponse.data]);
        orderWatcher();
    }

    serverResponse.data.forEach((obj) => obj.section.forEach((obj) => {obj.setQuantity = setQuantity}));
    
    function orderWatcher() {
        const isOrderValid = [false,false,false];
        serverResponse.data.forEach((obj,index) => obj.section.forEach((obj) => obj.quantity > 0 ?  isOrderValid[index] = true : isOrderValid[index]));
        setFinishedOrder(isOrderValid[0] && isOrderValid[1] && isOrderValid[2]);
    }

    return (
    <>
        <Navbar />
        <Menu {...serverResponse}/>
        <Footer finishedOrder={finishedOrder}/>
    </>
    );
}
