import Option from './option'

export default function Section (props) {
    return (
        <div className={"section"}>
            <div className={"title"}>{props.title}</div>
            <div className={"options pratos"}>
                {props.section.map((obj, option) => (obj.sectionIndex = props.sectionIndex, obj.option = option, obj.key = option, (<Option {...obj}/>)))}
            </div>
        </div>
    );
}