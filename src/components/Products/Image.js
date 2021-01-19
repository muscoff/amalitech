export default function Image(props){
    const {img} = props;
    let len = img.length * 100;
    let listItem = img.map((item, index)=>{
        return (
            <div className="width-100 max-img" key={index.toString()}>
                <img src={item} alt="" />
            </div>
        );
    });

    return (
        <div className="col-5 col-l-5 col-m-6 col-s-8">
            <div className="flex-column justify-content-center overflow-hidden relative">
                <div id="trans" style={{ width: len+'%' }}>
                    <div className="flex-row">
                        {listItem}
                    </div>
                </div>
            </div>
        </div>
    );
}