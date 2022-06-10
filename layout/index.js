import Image from "next/image";
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
                        <div>
                            <Image src={'/favicon.ico'} width={'20px'} height={'20px'} />
                        </div>
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
                <a style={{textDecoration: 'none'}} href="mailto:support@infinityarc.net">Get Support</a>
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