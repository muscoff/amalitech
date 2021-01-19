export default function Terms(){
    let yr = new Date().getFullYear();
    return (
        <div>
            <div className="width-100 height-3"></div>
            <div className="width-90 width-s-100 margin-auto font-13">
                <div className="row">
                    <div className="col-6 col-l-9 col-m-12 col-s-12">
                        <div className="font-gotham grey-text">{yr} Vineyard Vines. All rights reserved.</div><br />
                        <div className="row font-gothic light-grey-text">
                            <div className="padding-right-5 padding-bottom-5"><span className="underline-text">Privacy Policy</span></div>
                            <div className="padding-right-5 padding-bottom-5">|</div>
                            <div className="padding-right-5 padding-bottom-5"><span className="underline-text">Terms of Use</span></div>
                            <div className="padding-right-5 padding-bottom-5">|</div>
                            <div className="padding-right-5 padding-bottom-5"><span className="underline-text">California Supply Chains Act</span></div>
                            <div className="padding-right-5 padding-bottom-5">|</div>
                            <div className="padding-right-5 padding-bottom-5"><span className="underline-text">California Privacy Rights</span></div>
                            <div className="padding-right-5 padding-bottom-5">|</div>
                            <div className="padding-right-5 padding-bottom-5"><span className="underline-text-blue amali-blue">Do Not Sell My Personal Information</span></div>
                            <div className="padding-right-5 padding-bottom-5">|</div>
                            <div className="padding-right-5 padding-bottom-5"><span className="underline-text">Site Map</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="width-100 height-10"></div>
        </div>
    );
}