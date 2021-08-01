function Footer(){
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">GetForm</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                <p className="title">Support Techs & Framework</p>
                <p className="li">React</p>
                <p className="li">Firebase</p>
                <p className="li">Netlify</p>
            </div>
            <div>
                <p className="title">Follow me</p>
                <a href="https://github.com/vijaygehlot" className="li">Github</a>
                <a href="https://www.linkedin.com/in/vijay-gehlot-669358120/" className="li">LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer