import './Intro.scss';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { init } from 'ityped'
import{useEffect,useRef} from 'react'

function Intro(props) {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay:5000,
            backSpeed:6,
            strings: ['React', 'JavaScript','UI' ] })
    },[])
  return (

    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
            <img src="assets/p.jpeg"></img>
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
              <h2>Hii There I'm</h2>
              <h1>Parul Mishra</h1>
              <h3> <span ref={textRef}></span> Application Developer at IBM</h3>
              
</div>
<a href='#portfolio'>
    <ArrowDropDownCircleIcon></ArrowDropDownCircleIcon></a>
      </div>
    </div>
  );
}

export default Intro;
