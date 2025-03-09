
const ChangeData = ({checked,onChange}: {checked: boolean; onChange: () => void}) => {



    return (
        <label className="switch">
            <input className="align-item-center" type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider"></span>
        </label>
    );
};

export default ChangeData;
