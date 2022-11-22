import './Popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <h3>My pop-up</h3>
                <p>This is my button-triggered popup</p>
            </div>
        </div>
    ) : "";
}

export default Popup