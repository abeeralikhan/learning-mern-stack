import useInputState from './hooks/useInputState';

export default function SimpleForm(props) {
	const [ username, handleUsername, resetUsername ] = useInputState('');
	const [ email, handleEmail, resetEmail ] = useInputState('');
	return (
		<form>
			<input
				type="text"
				name="username"
				value={username}
				placeholder="Enter your username"
				onChange={handleUsername}
			/>
			<p>{username ? `Your username is: ${username}` : ''}</p>
			<input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleEmail} />
			<p>{email ? `Your email is: ${email}` : ''}</p>
			<button
				onClick={(e) => {
					resetUsername(e);
					resetEmail(e);
				}}
			>
				Submit
			</button>
		</form>
	);
}
