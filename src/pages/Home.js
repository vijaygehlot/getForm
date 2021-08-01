import { Link } from 'react-router-dom'

import banner from "../assets/5062544.jpg"
import features from "../assets/4667617.jpg"

function Home(){
    return <div>
        <div className="section">
            <img src={banner} alt="banner" />
            <div className="content">
                <h1>Build, Share <span>form</span> fastly</h1>
                <p>lets Build forms fast and easily. All you need to do is create a free account.
                     You can share the link of your form with others and see thier submissions.
                      build form and take the survey</p>
                <Link to="/create" className="btn">get started</Link>
            </div>
        </div>
        <div className="section">
            <div className="content">
                <h1>Our Service</h1>
                <p>
                    <span className="li">Easy to build form</span>
                    <span className="li">100% free</span>
                    <span className="li">Share with friends & others</span>
                    <span className="li">Authentication not required for submission</span>
                    <span className="li">Supports docmument file</span>
                </p>
            </div>
            <img src={features} alt="features" />
        </div>
    </div>
}

export default Home