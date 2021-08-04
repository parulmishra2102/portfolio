import './Topbar.scss';

import { Mail, Person} from '@material-ui/icons';
// import MenuIcon from '@material-ui/icons/Menu';

function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Myportfolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href="tel:+917338323802"><span>+917338323802</span></a>
            
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:parulmishra2102@gmail.com"> <span>parulmishra2102@gmail.com</span></a>
            
          </div>
        </div>

        <div className="right">
{/* <MenuIcon className='humburger'></MenuIcon> */}
          <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}> 
             <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span> 
           </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
