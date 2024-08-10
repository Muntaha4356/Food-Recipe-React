import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
const DropDown= ()=> {
    const [opened, setOpened]= useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = ['Home', 'Favorite', 'About Us', 'Review'];
    const menuLinks = ['/', '/favorite', '/about', '/review'];
    const navigate = useNavigate();
    function openmenu(){
        opened ? setOpened(false) :  setOpened(true);
    }
    function handleMenuItemClick(index) {
        setActiveIndex(index);
        navigate(menuLinks[index]);
    }
    return(
        <div className="bodymenu">
            <div className="dropdown" onClick={()=> openmenu()} >
                <div className="select" >
                    <span className="selected">{menuItems[activeIndex]}</span>
                    <div className="caret"></div>
                </div>
                <ul className={`menu ${opened ? 'menu-open' : ''}`}>
                {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => handleMenuItemClick(index)}
          >
            {item}
          </li>
        ))}
                </ul>
            </div>
            
            
        </div>
    )
}
export default DropDown