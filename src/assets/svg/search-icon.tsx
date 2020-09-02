import React from 'react';
import classnames from 'classnames';

interface ISearchIconProps {
	className?: string;
}

export const SearchIcon = ({ className }: ISearchIconProps) => {
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
				d="M15.1141 7.55705C15.1141 9.06799 14.6705 10.4756 13.9065 11.6564L19.5341 17.2842C20.1554 17.9053 20.1554 18.9128 19.5341 19.5339C18.9126 20.1554 17.9055 20.1554 17.284 19.5339L11.6566 13.9065C10.4758 14.6705 9.06819 15.1141 7.55705 15.1141C3.38331 15.1141 0 11.7306 0 7.55705C0 3.3835 3.38331 0 7.55705 0C11.7308 0 15.1141 3.3835 15.1141 7.55705ZM7.55709 12.7277C10.4127 12.7277 12.7277 10.4127 12.7277 7.55709C12.7277 4.70144 10.4127 2.38647 7.55709 2.38647C4.70144 2.38647 2.38647 4.70144 2.38647 7.55709C2.38647 10.4127 4.70144 12.7277 7.55709 12.7277Z"
				fill="#CDCDCD"
			/>
		</svg>
	);
};
