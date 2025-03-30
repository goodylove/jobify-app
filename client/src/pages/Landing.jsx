
import Wrapper from "../assets/wrappers/LandingPage"
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom"
import { Logo } from "../components"

function Landing() {
  return (
    <Wrapper>
      <Logo/>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, eaque quidem repudiandae eveniet quo quasi sapiente distinctio rem vitae, harum eius velit reprehenderit ipsum magni corrupti asperiores sint rerum necessitatibus?</p>
          <Link to="/register" className="btn register-link">Register</Link>
          <Link to="/login" className="btn register-link">Login /Demo user</Link>
        </div>
        <img src={main} alt="jobnest" className='img main-img'/>

         </div>
    </Wrapper>
  )
}

export default Landing
