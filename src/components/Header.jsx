import '../assets/styles/Header.css'
import Amz from '../assets/images/amazon_logo.jpg'
import Amc from '../assets/images/america_logo.jpg'
import { MapPin, ShoppingCart } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export default function Header(){
    return (
        <>
        <div className="flex flex-col text-sm">
            <div className="flex text-white bg-black justify-between items-center">
                <div className="flex justify-center items-center">
                    <img src={Amz} alt="" className="logo m-3  border-white p-1 hover:border cursor-pointer" />
                    <div className="flex justify-center items-center border-white hover:border cursor-pointer ">
                        <MapPin></MapPin>
                        <div className="p-1 flex flex-col">
                            <div className="">Deliver to</div>
                            <b className="">Vietnam</b>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="border-white hover:border flex justify-center items-center cursor-pointer">
                        <img src={Amc} alt="" className="flag pl-2" />
                        <div className="p-3">EN</div>
                    </div>
                    <div className="flex flex-col border-white hover:border justify-center  m-2 text-sm cursor-pointer">
                        <div className="p-1">Hello, sign in</div>
                        <b className="p-1">Account & Lists</b>
                    </div>
                    <div className="flex cursor-pointer flex-col border-white hover:border justify-center m-2">
                        <div className="p-1 pb-0">Return</div>
                        <b className="p-1 pr-2">& Orders</b>
                    </div>
                    <div className="flex cursor-pointer border-white items-center hover:border justify-center m-2">
                        <div className="p-2">
                            <ShoppingCart size={40}/>
                        </div>
                        <b className="pr-2 pb-2 pt-2">Cart</b>
                    </div>
                </div>
            </div>
            <div className="bg-slate-700 flex text-white underheader">
                <Link to='/' className="p-3 cursor-pointer border-white hover:border">
                    Home
                </Link>
                <Link to='/giftcards' className="p-3 cursor-pointer border-white hover:border">
                    Gift Card
                </Link>
                <Link to='/customer' className="p-3 cursor-pointer border-white hover:border">
                    Customer Service
                </Link>
                <Link to='/sell' className="p-3 cursor-pointer border-white hover:border">
                    Sell
                </Link>
            </div>
        </div>
        <Outlet />
        </>
    )
}