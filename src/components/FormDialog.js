import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	TextField,
	Tooltip
} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: '20ch'
	},

	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '50ch'
		}
	}
}));

export default function FormDialog({ data, setData }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [id, setId] = useState('');
	const [nameId, setNameId] = useState('');
	const [sex, setSex] = useState(false);
	const [date, setDate] = useState('');
	const [cls, setCls] = useState('');
	const [cpa, setCpa] = useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAdd = useCallback(() => {
		setData([
			...data,
			{ name: nameId, id: id, female: sex, date: date, cls: cls, cpa: cpa }
		]);
		setId('');
		setNameId('');
		setSex(false);
		setDate('');
		setCls('');
		setCpa('');
		setOpen(false);
	}, [nameId, id, sex, date, cls, cpa, data, setData]);

	const handleChange = (e) => setSex(e.target.value);
	const handleClickDelete = useCallback(() => {
		let temp = data.slice();
		temp.pop();
		console.log(temp);
		setData(temp);
	}, [data, setData]);

	return (
		<div>
			<Tooltip title="Thêm sinh viên" arrow>
				<Button
					variant="contained"
					startIcon={<AddCircleIcon />}
					color="primary"
					onClick={handleClickOpen}
				>
					THÊM
				</Button>
			</Tooltip>
			<Tooltip title="Xóa sinh viên cuối cùng" arrow>
				<Button
					variant="contained"
					startIcon={<DeleteIcon />}
					color="secondary"
					onClick={handleClickDelete}
				>
					Xóa
				</Button>
			</Tooltip>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Thêm sinh viên</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Nhập đầy đủ thông tin của sinh viên
					</DialogContentText>
					<form className={classes.root} noValidate autoComplete="off">
						<TextField
							required
							id="outlined-required"
							label="Mã số sinh viên"
							variant="outlined"
							value={id}
							onChange={useCallback((e) => setId(e.target.value), [])}
						/>
						<TextField
							required
							id="outlined-required"
							label="Họ và tên"
							variant="outlined"
							value={nameId}
							onChange={useCallback((e) => setNameId(e.target.value), [])}
						/>
						<FormControl className={classes.formControl}>
							<InputLabel id="select-female-label" required>
								Giới tính
							</InputLabel>
							<Select
								labelId="select-female-label"
								id="select-female"
								value={sex}
								onChange={handleChange}
							>
								<MenuItem value={false}>Nam</MenuItem>
								<MenuItem value={true}>Nữ</MenuItem>
							</Select>
						</FormControl>
						<TextField
							required
							id="outlined-required"
							label="Ngày sinh"
							type="date"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
							value={date}
							onChange={useCallback((e) => setDate(e.target.value), [])}
						/>
						<TextField
							required
							id="outlined-required"
							label="Lớp"
							variant="outlined"
							value={cls}
							onChange={(e) => setCls(e.target.value)}
						/>
						<TextField
							required
							id="outlined-required"
							label="CPA"
							variant="outlined"
							value={cpa}
							onChange={(e) => setCpa(e.target.value)}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary">
						Hủy
					</Button>
					<Button variant="contained" onClick={handleAdd} color="primary">
						Thêm
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
