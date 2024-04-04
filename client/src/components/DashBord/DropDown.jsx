import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const DropDown = ({ handleDropDownClick, handleShowDataTable }) => {
    const [hidden, setHidden] = useState(true);
    const [animationDelay, setAnimationDelay] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);

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
    }, [hidden]);


    const handleClick = () => {
        toggleHidden();
        handleDropDownClick();
    };

    const viewTable = () => {
        toggleHidden();
        handleShowDataTable();
    };

    const gerRoute = (index) => {
        setSelectedItem(index)
    }
    const toggleHidden = () => setHidden(!hidden);

    const dropDownData = ['Employee profile', 'Leave details', 'Announcements', 'Attendance', 'Company documents', 'Projects']

    return (
        <div className="container mx-auto flex gap-x-7" >
            <div>
                <div className="w-80 text-center py-6 hover:bg-white rounded-b-3xl bg-[#CBD0FF] hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={handleClick} >
                    Actions {hidden ? '+' : '-'}
                </div>
                <div className={`w-80 text-center bg-[#CBD0FF] rounded-b-3xl absolute top-0 ${hidden ? "hidden" : ""}`} style={{ animationDelay: `${animationDelay}s` }}>
                    <ul className="divide-y divide-slate-200">
                        {dropDownData.map((item, index) => (
                            <li key={index} className={`py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item ${index === selectedItem ? 'bg-white' : ''}`} value={item} onClick={() => gerRoute(index)}>{item}</li>
                        ))}
                        <li className="py-6 hover:bg-white hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={viewTable}>Actions -</li>
                    </ul>
                </div>
            </div>
            <div className={`${hidden ? "hidden" : ""} w-full`}>
                <div className="inline-flex justify-end items-end bg-[#4886FF] px-9 py-4 rounded-2xl">
                    <p>+ Add new user</p>
                </div>
            </div>

        </div>
    )
}
DropDown.propTypes = {
    handleDropDownClick: PropTypes.func.isRequired,
    handleShowDataTable: PropTypes.func.isRequired,
};


export default DropDown