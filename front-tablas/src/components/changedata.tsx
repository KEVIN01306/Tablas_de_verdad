import { useState } from "react";

const ChangeData = () => {
    const [checked, setChecked] = useState(false);

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
