import React from 'react';
import classnames from 'classnames';

interface IUserIconProps {
	className?: string;
}

export const UserIcon = ({ className }: IUserIconProps) => {
	return (
		<svg
			className={classnames(className)}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 17.1414V15C3 12.2386 5.23858 10 8 10H12C14.7614 10 17 12.2386 17 15V17.1414C15.1962 18.9097 12.7255 20 10 20C7.27455 20 4.80375 18.9097 3 17.1414Z"
				fill="#828282"
			/>
			<circle cx="10" cy="6" r="3" fill="#828282" />
		</svg>
	);
};
