import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxx({ ch }) {
	const [checked, setChecked] = useState(ch);

	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	return (
		<div>
			<Checkbox
				checked={checked}
				onChange={handleChange}
				color="primary"
				disabled
				// inputProps={{ 'aria-label': 'primary checkbox' }}
			/>
		</div>
	);
}
