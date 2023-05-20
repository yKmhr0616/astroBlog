export default function TopSectionSkill(props) {
    return (
        <section className="flex flex-col gap-2">
            <span className="mx-auto font-medium">{props.title}</span>
            <span className="mx-auto text-c-xs text-gray-400">{props.subTitle}</span>
            <div className="grid place-items-center">
                {props.name}
                <div className="flex flex-col gap-y-2">{props.text}</div>
            </div>
        </section>
    )
}
