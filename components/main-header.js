import classes from './main-header.module.css';
import logo from '@/public/images/logo.png';

import Link from 'next/link';
import Image from 'next/image';



export default function MainHeader() {


    return <>
        <header className={classes.container}>
            <Link href='/' className={classes.headerleft}>
            <Image src={logo} alt='logo' className={classes.logo} priority />
                <p className={classes.title}>INDORI FOOD</p></Link>
            <div className={classes.headerright}>
                <p className='header-meals'><Link href='meals'>Browse Meals</Link></p>
                <p className='header-food'><Link href='community'>Foodies Community</Link></p>
            </div>
        </header>
    </>
}