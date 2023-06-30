import { NavLinks } from '@/constants'
import Link from "next/link"
import Image from "next/image"
import AuthProviders from './AuthProviders';

const Navbar = () => {
    const session = {};

    return(
        <nav className="flexBetween navbar w-full">
            <div className="flex-1 flexStart gap-10">
                <Link href={""}>
                    <Image
                        src="/logo.svg"
                        height={200}
                        width={150}
                        alt="Doggo Match"
                    />
                </Link>
                <ul className="lg:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flexCenter gap-4'>
                {session ? (
                    <>
                     UserPhoto
                     <Link href="/create-project">
                        Share Work
                     </Link>
                    </>
                ) : (
                    <AuthProviders/>
                )}
            </div>
        </nav>
    )
}

export default Navbar