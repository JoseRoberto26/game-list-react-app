import React from 'react';
import style from './style.scss';
import logo from '../../assets/icon/react-icon.png';
import { SearchIcon } from '../../assets/svg/search-icon';
import { UserIcon } from '../../assets/svg/user';

export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.center}>
				<div className={style.logoAndInput}>
					<img className={style.logo} src={logo} />
					<div className={style.inputBox}>
						<input placeholder="Search for a game" />
						<SearchIcon className={style.searchIcon} />
					</div>
				</div>
				<div className={style.loginOptions}>
					<a>Sign Up</a>
					<a>Login</a>
					<UserIcon className={style.userIcon} />
				</div>
			</div>
		</header>
	);
};
