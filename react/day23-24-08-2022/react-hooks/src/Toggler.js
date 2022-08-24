import React from 'react';
import useToggle from './hooks/useToggle';

const Toggler = (props) => {
	const [ isHappy, toggleIsHappy ] = useToggle(true);
	const [ areEyesClosed, toggleAreEyesClosed ] = useToggle(false);

	return (
		<div>
			<h1 onClick={() => toggleIsHappy()}>{isHappy ? 'Happy' : 'Sad'}</h1>
			<h1 onClick={() => toggleAreEyesClosed()}>{areEyesClosed ? 'Eyes Closed!' : 'Eyes Opened!'}</h1>
		</div>
	);
};

export default Toggler;
