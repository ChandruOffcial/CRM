import { useState } from "react";
import DataProvide from "../../Context/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const DropDown = () => {
    const { dropDownData }= useContext(DataProvide)        
    const [menuValue, setMenuValue] = useState();
    const navigate = useNavigate();
    
    const handleMenu = (index, item)=>{
        setMenuValue(index);
        navigate(`${item.route}`);
    }
    return (                    
            <div className={`w-80 text-center bg-[#CBD0FF] rounded-b-3xl`} >
                <ul className="divide-y divide-slate-200 dropDown_Menu">
                    {dropDownData.map((item, index) => (
                        <li key={index} className={`py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item  ${index === menuValue ?'bg-white':''}`} onClick={()=>{handleMenu(index, item)}} >{item.name}</li>
                    ))}
                    <li className="py-6 hover:bg-white hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={()=>{ navigate('/dashbord')}}>Actions -</li>
                </ul>
            </div>             
        )
}



export default DropDown