import Image from 'next/image';

export default function Cam() {
    return (
        <>
            <div className="bg-slate-200 w-full h-16">
                <Image src={'/svgs/home-security-camera-svgrepo-com.svg'} alt='cam' width='20' height='20' />

                
            </div>
        </>
    );
}