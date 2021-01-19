import BrandIcon from '../General/BrandIcon';
import Terms from '../General/Terms';
import List from './List';
import EmailSignUp from './EmailSignUp';

const Account = [
    {name: "Order Status", link: "order"}, 
    {name: "Start a Return", link: "start"}, 
    {name: "Wish List", link: "wishlist"}, 
    {name: "Shipping & Returns", link: "shipping"}, 
    {name: "FAQ's", link: 'faq'},
    {name: "International Shipping", link: 'intlshipping'}
];

const About = [
    {name: "Our Story", link: "story"}, 
    {name: "Find a Store", link: "store"}, 
    {name: "Our Stores", link: "stores"}, 
    {name: "Other Retailer", link: "retailers"}, 
    {name: "Careers", link: 'careers'},
];

const Services = [
    {name: "Our Services", link: "ourservices"}, 
    {name: "Gift Cards", link: "giftcards"}, 
    {name: "Size Charts", link: "sizecharts"}, 
    {name: "Contact Us", link: "contact us"}, 
    {name: "Donations", link: 'donation'},
    {name: "Buy Online Pick Up in Store", link: 'buyonline'},
    {name: "Custom & Corporate Gifts", link: 'customgifts'}
];

const Community = [
    {name: "Refer a Friend", link: "referral"}, 
    {name: "Student Discount", link: "studentdiscount"}, 
    {name: "Military Discount", link: "military"}, 
    {name: "Teacher Discount", link: "teachers"}, 
    {name: "First Respondent Discount", link: 'firstrespondent'},
    {name: "Nursers & Doctors Discount", link: 'nursesdiscount'},
    {name: "Whales for a Cause", link: 'whales'}
];

function Footer(){
    function onClick(email){
        alert(email);
    }
    return (
        <div>
            <div className="light-grey-bg">
                <div className="width-100 height-5"></div>
                <div className="width-90 margin-auto">
                    <div className="row align-items-center">
                        <div className="col-8 col-l-12 col-m-12 col-s-12">
                            <div className="row">
                                <div className="col-3 padding-all-5 col-l-6 col-m-6 col-s-12"><List title="My Account" list={Account} /></div>
                                <div className="col-3 padding-all-5 col-l-6 col-m-6 col-s-12"><List title="services" list={Services} /></div>
                                <div className="col-3 padding-all-5 col-l-6 col-m-6 col-s-12"><List title="about us" list={About} /></div>
                                <div className="col-3 padding-all-5 col-l-6 col-m-6 col-s-12"><List title="our community" list={Community} /></div>
                            </div>
                        </div>
                        <div className="col-4 col-l-12 col-m-12 col-s-12">
                            <div className="row">
                                <div className="uppercase font-gotham padding-all-10">Email sign up</div>
                                <EmailSignUp onClick={onClick} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width-100 height-10"></div>
            </div>
            <BrandIcon />
            <Terms />
        </div>
    );
}

export default Footer;