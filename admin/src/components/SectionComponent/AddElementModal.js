import AddElement from "../shared/Add/AddElement";
import ModalComponent from "../shared/ModalComponent";

const AddElementModal = ({section, sectionData}) => {
    return sectionData.create
    ?<ModalComponent header={section}>
      <AddElement section={section} sectionData={sectionData}/>
    </ModalComponent>
    :<></>
}

export default AddElementModal