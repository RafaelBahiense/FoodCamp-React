import Option from './option'

export default function Section (props) {
    return (
        <div class="secao">
            <div class="titulo">{props.title}</div>
            <div class="opcoes pratos">
                {props.section.map((obj) => (<Option {...obj}/>))}
            </div>
        </div>
    );
}