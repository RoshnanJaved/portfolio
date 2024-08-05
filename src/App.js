
import 'bootstrap/dist/css/bootstrap.min.css';
// importing Navbar 
import NavbarComp from './components/navbar/navbar';
// importing HomeComponent
import HomeComponent from './components/homePage/homePage';
// importing myqualities-page
import MyqualtiesComponent from './components/myqualitiesPage/myqualtiesPage';
// importing AboutMeComponent
import AboutMeComponent from './components/aboutmePage/aboutmePage';
// importing portfolioComponent 
import PortfolioComponent from './components/portfolio/portfolio';
// importing SkillsComponent 
import SkillsComponent from './components/skillsPage/skillsComponent';
// importing ServicesComponent
import ServicesComponent from './components/services/services';
// importing myBlogsComponent
import MyblogComponent from './components/blogpage/myblog';
// importing TestimonialsComponent
import TestimonialsComponent from './components/testimonials/testimonials';
// importing Contactme-page
import ContactmeComponent from './components/contactMe/contactme';
// importing FooterComponent
import FooterComponent from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HomeComponent />
      <MyqualtiesComponent />
      <AboutMeComponent/>
      <PortfolioComponent/>
      <SkillsComponent/>
      <ServicesComponent/>
      <TestimonialsComponent/>
      <MyblogComponent/>
      <ContactmeComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
