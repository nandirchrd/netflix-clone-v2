import React, { createContext, useState } from 'react';

const NotFoundContext = createContext();

export const NotFoundProvider = ({ children }) => {
	const [value, setValue] = useState(false);
	return (
		<NotFoundContext.Provider value={{ value, setValue }}>
			{children}
		</NotFoundContext.Provider>
	);
};

export default NotFoundContext;
