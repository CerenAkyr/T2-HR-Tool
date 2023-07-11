import EditIcon from '@mui/icons-material/Edit';
import "./Components.css";

function EditActionButton(props) {
  
  return (
    <EditIcon onClick={() => console.log("tıkladınıldım")} className='actionBtn'/>
  );
}

export default EditActionButton;