import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset'
		}
	}
});

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover
		}
	}
}))(TableRow);

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<StyledTableRow className={classes.root} key={row.name}>
				<StyledTableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</StyledTableCell>
				<StyledTableCell component="th" scope="row">
					{row.name}
				</StyledTableCell>
				<StyledTableCell align="right">{row.id}</StyledTableCell>
				<StyledTableCell align="right">{row.tc}</StyledTableCell>
				<StyledTableCell align="right">{row.hp}</StyledTableCell>
				<StyledTableCell align="right">{row.vien}</StyledTableCell>
			</StyledTableRow>

			<StyledTableRow>
				<StyledTableCell
					style={{ paddingBottom: 0, paddingTop: 0 }}
					colSpan={6}
				>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={3}>
							<Typography variant="h6" gutterBottom component="div">
								Danh s??ch l???p
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>M?? l???p</TableCell>
										<TableCell>S??? l?????ng sinh vi??n</TableCell>
										<TableCell>S??? l?????ng ???? ????ng k??</TableCell>
										<TableCell>Th???i gian</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.infor.map((in4row) => (
										<TableRow key={in4row.idClass}>
											<TableCell component="th" scope="row">
												{in4row.idClass}
											</TableCell>
											<TableCell>{in4row.mem}</TableCell>
											<TableCell>{in4row.register}</TableCell>
											<TableCell>{in4row.time}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</StyledTableCell>
			</StyledTableRow>
		</React.Fragment>
	);
}

function createData(name, id, tc, hp, vien, time1, time2) {
	return {
		name,
		id,
		tc,
		hp,
		vien,
		infor: [
			{ idClass: '111111', mem: 150, register: 86, time: time1 },
			{ idClass: '222222', mem: 150, register: 23, time: time2 }
		]
	};
}

Row.propTypes = {
	row: PropTypes.shape({
		id: PropTypes.string.isRequired,
		tc: PropTypes.number.isRequired,
		hp: PropTypes.number.isRequired,
		infor: PropTypes.arrayOf(
			PropTypes.shape({
				register: PropTypes.number.isRequired,
				idClass: PropTypes.string.isRequired,
				mem: PropTypes.number.isRequired,
				time: PropTypes.string.isRequired
			})
		).isRequired,
		name: PropTypes.string.isRequired,
		vien: PropTypes.string.isRequired
	}).isRequired
};

const rows = [
	createData(
		'K??? thu???t l???p tr??nh',
		'IT3040',
		2,
		3.5,
		'CNTT&TT',
		'Ti???t 1-3 S??ng th??? 2',
		'Ti???t 4-6 S??ng th??? 2'
	),
	createData(
		'Thu???t to??n ???ng d???ng(SS)',
		'IT3680',
		3,
		9,
		'CNTT&TT',
		'Ti???t 1-3 S??ng th??? 3',
		'Ti???t 4-6 S??ng th??? 3'
	),
	createData(
		'C???u tr??c d??? li???u v?? gi???i thu???t',
		'IT3010',
		2,
		3,
		'CNTT&TT',
		'Ti???t 1-3 Chi???u th??? 2',
		'Ti???t 1-3 S??ng th??? 5'
	),
	createData(
		'Nh???p m??n c??ng ngh??? ph???n m???m',
		'IT3180',
		3,
		4,
		'CNTT&TT',
		'Ti???t 1-3 S??ng th??? 2',
		'Ti???t 1-3 Chi???u th??? 2'
	),
	createData(
		'To??n r???i r???c',
		'IT3020',
		3,
		4,
		'CNTT&TT',
		'Ti???t 1-3 S??ng th??? 4',
		'Ti???t 1-3 Chi???u th??? 3'
	)
];

export default function Table2() {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<StyledTableCell />
						<StyledTableCell>T??n h???c ph???n</StyledTableCell>
						<StyledTableCell align="right">M?? h???c ph???n</StyledTableCell>
						<StyledTableCell align="right">T??n ch??? h???c ph???n</StyledTableCell>
						<StyledTableCell align="right">T??n ch??? h???c ph??</StyledTableCell>
						<StyledTableCell align="right">Vi???n qu???n l??</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
