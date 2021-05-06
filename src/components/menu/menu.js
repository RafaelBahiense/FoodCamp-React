import Section from './section/section';

export default function Menu(props) {
    return (
        <div class="menu">
            {props.data.map((obj) => (<Section {...obj}/>))}
        </div>
    );
}