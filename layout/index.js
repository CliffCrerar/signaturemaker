

function Layout(props) {
    return (
        <>
            <header>
                <div>
                    <h1>Generate Signature</h1>
                </div>
            </header>
            <main>
                {props.children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Layout;