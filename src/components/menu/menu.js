import Section from './section/section';

export default function Menu(props) {
    return (
        <div className={"menu"}>
            {props.data.map((obj, section) => (obj.sectionIndex = section, obj.key = section, (<Section {...obj} />)))}
        </div>
    );
}