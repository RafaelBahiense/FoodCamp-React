import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

const serverResponse = { data :
[
    {
    section :  [{img : "frango_yin_yang", title : "Frango Yin Yang", description : "Um pouco de batata, um pouco de salada", price : "14,90"},
                {img : "frango_yin_yang", title : "Carne Yin Yang", description : "Um pouco de batata, um pouco de salada", price : "17,90"},
                {img : "frango_yin_yang", title : "Peixe Yin Yang", description : "Um pouco de batata, um pouco de salada", price : "16,90"}],
    title : "Primeiro, seu prato"
    },
    {
    section :  [{img : "coquinha_gelada", title : "Coquinha gelada", description : "Lata 350ml", price : "16,90"},
                {img : "coquinha_gelada", title : "Guaraná gelado", description : "Lata 350ml", price : "4,90"},
                {img : "coquinha_gelada", title : "Suquinho gelado", description : "500ml", price : "7,90"}],
    title : "Agora, sua bebida"
    },
    {
    section :  [{img : "pudim", title : "Pudim", description : "Apenas um pudim", price : "7,90"},
                {img : "pudim", title : "Mousse", description : "Cremoso, gostoso", price : "6,90"},
                {img : "pudim", title : "Brownie", description : "É um bolinho", price : "4,90"}], 
    title : "Por fim, sua sobremesa"
    }
]}

function App() {
    return (
    <>
        <Navbar />
        <Menu {...serverResponse}/>
        <Footer />
    </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
