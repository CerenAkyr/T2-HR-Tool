import EditIcon from '@mui/icons-material/Edit';

function EditActionButton(props) {
  
  return (
    <EditIcon onClick={() => console.log("tıkladınıldım")} />
  );
}

export default EditActionButton;