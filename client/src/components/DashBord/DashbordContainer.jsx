import { useState, useEffect } from "react";

const DashbordContainer = () => {
    const [hidden, setHidden] = useState(true); // Initialize as boolean
    const [animationDelay, setAnimationDelay] = useState(0);

    useEffect(() => {
        if (!hidden) {
            const items = document.querySelectorAll('.dashboard-item');
            let delay = 0;
            items.forEach((item) => {
                item.style.animation = `mover 4s ${delay}s forwards`; // Adjusted duration to 2s
                delay += 0.9;
            });
            setAnimationDelay(delay * 80000);
        }
    }, [hidden]);

    return (
        <div className="w-screen h-screen bg-[#EDEEFF] relative">
            <div className="container mx-auto">
                <div className="w-80 text-center py-6 hover:bg-white rounded-b-3xl bg-[#CBD0FF] hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={() => setHidden(!hidden)}>
                    Actions {hidden ? '+' : '-'}
                </div>
                <div className={`w-80 text-center bg-[#CBD0FF] rounded-b-3xl absolute top-0 ${hidden ? "hidden" : ""}`} style={{ animationDelay: `${animationDelay}s` }}>
                    <ul className="divide-y divide-slate-200">
                        <li className="py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item">Employee profile</li>
                        <li className="py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item">Leave details</li>
                        <li className="py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item">Announcements</li>
                        <li className="py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item">Attendance</li>
                        <li className="py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item">Company documents</li>
                        <li className="py-6 hover:bg-white font-medium text-xl cursor-pointer dashboard-item">Projects</li>
                        <li className="py-6 hover:bg-white hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={() => setHidden(!hidden)}>Actions -</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashbordContainer;
