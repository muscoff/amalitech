export default function List(props){
    const {list, title} = props;
    let listItems = list.map((item, index)=>{
        return (
            <div key={index.toString()} className="font-gothic capitalize margin-bottom-5 amali-blue font-14">
                <a href={item.link} className="underline-blue">{item.name}</a>
            </div>
        );
    });
    return (
        <div>
            <div className="font-gotham uppercase margin-bottom-10">{title}</div>
            {listItems}
        </div>
    );
}