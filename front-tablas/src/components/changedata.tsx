import { useState } from "react";

const ChangeData = () => {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked);
    };

    return (
        <div className="switch">
            <input 
                className="switch-check" 
                id="switch1" 
                type="checkbox" 
                checked={checked} 
                onChange={handleToggle} 
            />
            <label className="switch-label" htmlFor="switch1">
                Check
                <span></span>
            </label>
        </div>
    );
};

export default ChangeData;
