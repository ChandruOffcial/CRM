import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import DataTable from "./DataTable";
import { useNavigate } from 'react-router-dom'


const DropDown = ({ handleDropDownClick, handleShowDataTable, dropDown, selectedItemValue }) => {
    const [hidden, setHidden] = useState(dropDown);
    const [animationDelay, setAnimationDelay] = useState(0);
    const [selectedItem, setSelectedItem] = useState(selectedItemValue);
    const navigate = useNavigate()

    useEffect(() => {
        if (!hidden) {
            const items = document.querySelectorAll('.dashboard-item');
            let delay = 0;
            items.forEach((item) => {
                item.style.animation = `mover 2s ${delay}s forwards`; // Changed duration to 2s
                delay += 0.9;
            });
            setAnimationDelay(delay * 0.9);
        }
        setSelectedItem(selectedItemValue);
    }, [hidden, selectedItemValue]);



    const handleClick = () => {
        toggleHidden();
        handleDropDownClick();
    };

    const viewTable = () => {
        toggleHidden();
        handleShowDataTable();
    };

    const gerRoute = route => navigate(route);
    const toggleHidden = () => setHidden(!hidden);

    const dropDownData = [
        {
            name: 'Employee profile',
            route: '/dashbord/employee'
        }, {
            name: 'Leave details',
            route: '/dashbord/leave'
        }, {
            name: 'Announcements',
            route: '/dashbord/announcements'
        }, {
            name: 'Attendance',
            route: '/dashbord/attendance'
        }, {
            name: 'Company documents',
            route: '/dashbord/documents'
        }, {
            name: 'Projects',
            route: '/dashbord/projects'
        }
    ];

    return (
        <div className="container mx-auto flex gap-x-7" >
            <div>
                <div className="w-80 text-center py-6 hover:bg-white rounded-b-3xl bg-[#CBD0FF] hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={handleClick} >
                    Actions {hidden ? '+' : '-'}
                </div>
                <div className={`w-80 text-center bg-[#CBD0FF] rounded-b-3xl absolute top-0 ${hidden ? "hidden" : ""}`} style={{ animationDelay: `${animationDelay}s` }}>
                    <ul className="divide-y divide-slate-200">
                        {dropDownData.map((item, index) => (
                            <li key={index} className={`py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item ${index === selectedItem ? 'bg-white' : ''}`} value={item.name} onClick={() => gerRoute(item.route)}>{item.name}</li>
                        ))}
                        <li className="py-6 hover:bg-white hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={viewTable}>Actions -</li>
                    </ul>
                </div>
            </div>
            <div className={`${hidden ? "hidden" : ""} flex flex-col w-full mt-4 justify-end items-end`}>
                <div className="inline-flex  bg-[#4886FF] px-9 py-4 rounded-2xl">
                    <p className="text-white">+ Add new user</p>
                </div>
                <DataTable />
            </div>


        </div>
    )
}
DropDown.propTypes = {
    handleDropDownClick: PropTypes.func.isRequired,
    handleShowDataTable: PropTypes.func.isRequired,
    dropDown: PropTypes.bool.isRequired,
    selectedItemValue: PropTypes.number,
};


export default DropDown