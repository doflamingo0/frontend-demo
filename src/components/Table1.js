import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkboxx from './Checkboxx';
import { withStyles } from '@material-ui/core';
import FormDialog from './FormDialog';

const useStyles = makeStyles({
	table: {
		minWidth: 650
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

// function createData(name, id, female, date, cls, cpa) {
// 	return { name, id, female, date, cls, cpa };
// }

// const rows = [
// 	createData(
// 		'Đỗ Lương Kiên',
// 		'20183568',
// 		false,
// 		'17/5/2000',
// 		'Khoa học máy tính-04',
// 		3.58
// 	),
// 	createData(
// 		'Nguyễn Văn Tuấn',
// 		'20184444',
// 		false,
// 		'22/9/2000',
// 		'Khoa học máy tính-04',
// 		3.65
// 	),
// 	createData(
// 		'Nguyễn Đan Trường',
// 		'20181234',
// 		false,
// 		'11/2/2000',
// 		'Khoa học máy tính-04',
// 		3.12
// 	),
// 	createData(
// 		'Vũ Ngọc Hoàn',
// 		'20186868',
// 		false,
// 		'22/3/2000',
// 		'Khoa học máy tính-04',
// 		3.77
// 	),
// 	createData(
// 		'Nguyễn Kim Ngân',
// 		'20181111',
// 		true,
// 		'31/7/2000',
// 		'Khoa học máy tính-04',
// 		3.78
// 	)
// ];

const DATA_TABLE_STORAGE_KEY = 'DATA_TABLE';

export default function Table1() {
	const classes = useStyles();
	const [data, setData] = useState([]);

	useEffect(() => {
		const storageData = localStorage.getItem(DATA_TABLE_STORAGE_KEY);
		if (storageData) {
			setData(JSON.parse(storageData));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(DATA_TABLE_STORAGE_KEY, JSON.stringify(data));
	}, [data]);

	return (
		<div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<StyledTableCell>MSSV</StyledTableCell>
							<StyledTableCell>Họ và tên</StyledTableCell>
							<StyledTableCell>Nữ</StyledTableCell>
							<StyledTableCell>Ngày sinh </StyledTableCell>
							<StyledTableCell>Lớp</StyledTableCell>
							<StyledTableCell>CPA</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component="th" scope="row">
									{row.id}
								</StyledTableCell>
								<StyledTableCell>{row.name}</StyledTableCell>
								<StyledTableCell>
									<Checkboxx ch={row.female} />
								</StyledTableCell>
								<StyledTableCell>{row.date}</StyledTableCell>
								<StyledTableCell>{row.cls}</StyledTableCell>
								<StyledTableCell>{row.cpa}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<FormDialog data={data} setData={setData} />
		</div>
	);
}
