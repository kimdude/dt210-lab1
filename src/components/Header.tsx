import './Header.css'

function Header(prop: any) {

    return (
        <>
            {/* Title */}
            <header>
                <h1>{prop.title}</h1>
            </header>

            {/* Image banner */}
            <div className="banner">

            </div>
        </>
    )
}

export default Header