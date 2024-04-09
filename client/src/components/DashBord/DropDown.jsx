import { useState } from "react";
import DataProvide from "../../Context/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const DropDown = () => {
    const { dropDownData,handleTable }= useContext(DataProvide)    
    const [showDropDown, setShowDropDown] = useState(true)
    const [menuValue, setMenuValue] = useState()
    const navigate = useNavigate()
    
    return (
        <>
            <div className="w-80 text-center py-6 hover:bg-white rounded-b-3xl bg-[#CBD0FF] hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={()=>{setShowDropDown(!showDropDown), navigate('/dashbord/employee'),handleTable()}} >
                Actions +
            </div>
            <div className={`w-80 text-center bg-[#CBD0FF] rounded-b-3xl absolute top-0 ${showDropDown ? 'hidden':''} `} >
                <ul className="divide-y divide-slate-200">
                    {dropDownData.map((item, index) => (
                        <li key={index} className={`py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item  ${index === menuValue ?'bg-white':''}`} onClick={()=>{setMenuValue(index)}} >{item.name}</li>
                    ))}
                    <li className="py-6 hover:bg-white hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={()=>{ setShowDropDown(!showDropDown),handleTable()}}>Actions -</li>
                </ul>
            </div>
        </>
    )
}



export default DropDown