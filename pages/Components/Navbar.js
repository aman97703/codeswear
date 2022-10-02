import Link from 'next/link'
import React from 'react'
import { ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-1 shadow-lg'>
            <div className='flex items-center'>
                <div className="logo pointer">
                    <Link href={'/'}>
                        <img src="/logo2.png" alt="" />
                    </Link>
                </div>
                <div className="nav mx-5">
                    <ul className='flex space-x-4 font-bold'>
                        <li><Link href={'/tshirts'}>Tshirts</Link></li>
                        <li><Link href={'/hoodies'}>Hoodies</Link></li>
                        <li><Link href={'/stickers'}>Stickers</Link></li>
                        <li><Link href={'/mugs'}>Mugs</Link></li>
                    </ul>
                </div>
            </div>
            <div className="cart">
                <button><ShoppingCartOutlined/></button>
            </div>
        </div>
    )
}

export default Navbar