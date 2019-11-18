import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';

export default function MemoDialog(props) {

    const { onClose, openDialog, editMode, onEdited } = props;

    const [memoData, setMemoData] = useState({ title: "", content: "", done: false });
    const [open, setOpen] = useState(openDialog);

    useEffect(() => {
        setOpen(openDialog);
    }, [openDialog]);

    return (
        <Dialog open={open}>
            <DialogTitle>Add new memo</DialogTitle>
            <DialogContent>
                <TextField
                    label="What you want to do"
                    margin="normal"
                    onChange={(e) => setMemoData({ ...memoData, content: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => { setOpen(false); onClose(null); }}>
                    Cancel
                </Button>
                {editMode ?
                    <Button
                        onClick={(e) => {
                            onEdited(memoData);
                            setOpen(false);
                        }}>Edit</Button>
                    :
                    <Button
                        onClick={(e) => {
                            onClose(memoData);
                            setOpen(false);
                        }}>Create</Button>
                }

            </DialogActions>
        </Dialog>
    );
}