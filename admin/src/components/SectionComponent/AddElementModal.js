import AddElement from "../shared/Add/AddElement";
import ModalComponent from "../shared/ModalComponent";

const AddElementModal = ({section, sectionData}) => {
    return <ModalComponent header={section}>
      <AddElement section={section}/>
    </ModalComponent>
}

export default AddElementModal