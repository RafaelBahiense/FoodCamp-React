import Option from './option'

export default function Section (props) {
    return (
        <div class="section">
            <div class="title">{props.title}</div>
            <div class="options pratos">
                {props.section.map((obj, option) => (obj.sectionIndex = props.sectionIndex, obj.option = option, obj.key = option, (<Option {...obj}/>)))}
            </div>
        </div>
    );
}