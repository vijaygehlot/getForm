import AddTextField from './AddTextField';
import AddMultiOptionField from './AddMultiOptionField';
import AddFileField from './AddFileField'

function AddFieldModal({ inputType, add, close }){
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={close}>&times;</span>
                {
                    (["short-answer", "long-answer", "number"].indexOf(inputType) > -1) ? (
                        <AddTextField inputType={inputType} add={add} close={close} />
                    ) : (["multi-option-single-answer", "multi-option-multi-answer"].indexOf(inputType) > -1) ? (
                        <AddMultiOptionField inputType={inputType} add={add} close={close} />
                    ) : (inputType === "file") ? (
                        <AddFileField inputType={inputType} add={add} close={close} />
                    ) : <p>Unknown type</p>
                }
            </div>
        </div>
    )
}

export default AddFieldModal