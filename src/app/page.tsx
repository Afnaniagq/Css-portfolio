import Hero from "./component/Hero";
import About from "./about/page";
import Skill from "./skill/page";
import Contact from "./contact/page";
import Project from "./project/page";
function Home(){
  return(
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    
    </div>
  )
}
export default Home