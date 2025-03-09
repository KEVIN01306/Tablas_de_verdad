import { useState,useEffect } from "react";

const ChangeData = () => {
    const [checked, setChecked] = useState(()=>{
        const storedValueBB = localStorage.getItem("ValueBB");
        return storedValueBB !== null ? JSON.parse(storedValueBB):false

    });

    useEffect(() => {
        localStorage.setItem("ValueBB",JSON.stringify(checked))
    },[checked])

    const handleToggle = () => {
        setChecked(!checked);
    };

    return (
        <label className="switch">
            <input className="align-item-center" type="checkbox" checked={checked} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
    );
};

export default ChangeData;
