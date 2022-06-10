import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";


function Layout(props) {

    const navRef = useRef();
    const mainStyle = { flex: 1 }


    useEffect(() => {
        console.log('ref: ', navRef.current.clientHeight);
        return console.log('LOL')
    })

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="Description" CONTENT="Author: C. Crerar, Email Signature Generator" />
                <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
                <title>Email Signature Generator</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <style jsx global>
                {`
            #__next, .__next {
                min-height: 100vh;
                height: 100vh;
                display: flex;
                flex-direction: column;
            }
            `}
            </style>
            <style jsx>{`
                h1 {
                    margin : 0 ;
                    font-size: 20px;
                }
                nav {
                    padding: 10px 10px;
                    box-shadow: 0px 0px 8px
                }
                nav div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                main {
                    padding-top: 2em;
                    flex: 1;
                    
                }
                footer {
                    position: relative;
                    display: flex;
                    background-color: rgb(201, 204, 204);
                    padding: 10px 10px;
                    box-shadow: 0px 0px 5px black;
                    justify-content: space-between;
                    align-items: center;
                }
            `}
            </style>
            <div className="__next">
                <header ref={navRef}>
                    <nav>
                        <div>
                            <div>
                                <h1>Generate Signature</h1>
                            </div>
                                {/* <ul style={{display: 'block', alignContent: 'center', flex: '1', alignSelf: "flex-end"}}>
                                    <li>
                                        <Link href="/">
                                            <a title="home">Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/instructions">
                                            <a title="home">Home</a>
                                        </Link>
                                    </li>
                                </ul> */}
                                <a href="https://infinityarc.net" target="_blank">
                                <Image src={'https://cdn.softwarecraft.co.za/assets/ia/ia-3d-black05.png'} width={'20px'} height={'20px'} />
                                </a>
                            
                        </div>
                    </nav>
                </header>
                <main>
                    {props.children}
                </main>
            </div>
            <footer>
                <div>
                    <img src="https://cdn.softwarecraft.co.za/assets/ia/ia-full-logo-v3-outl-025.png" height={'100px'}></img>
                </div>
                <div>
                    <a style={{ textDecoration: 'none' }} href="mailto:support@infinityarc.net">Get Support</a>
                </div>
                <div>
                    <div>Developer: Infinity Arc</div>
                    <div>
                        Website: <a href="https://infinityarc.net" target="_blank">www.infinityarc.net</a></div>
                </div>
            </footer>

        </>
    )
}

export default Layout;