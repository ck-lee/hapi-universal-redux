import React, { cloneElement } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/*
 * Main view colors.
 */
const colors = {
	white: '#BEBEBE',
	pink: '#D381C3',
	blue: '#6FB3D2',
	green: '#A1C659',
	darkGrey: '#2A2F3A',
	lightGrey: '#4F5A65'

}
/**
 * Main view styles.
 */
const styles = {
	base: {
		fontFamily: 'sans-serif',
		color: colors.white,
		padding: '10px 30px 30px',
		width: '380px',
		margin: '0 auto 10px',
		background: colors.darkGrey,
		boxShadow: '15px 5px ' + colors.lightGrey
	},
	link: {
		color: colors.white,
		textDecoration: 'none',
	},
	navLink: {
		fontFamily: 'sans-serif',
		color: colors.lightGrey,
		textDecoration: 'none',
		padding: '0 30px'
	},
	nav: {
		height: 40,
		width: '380px',
		margin: '10px auto 0',
		padding: '10px 30px 30px',
		color: 'white',
		backgroundColor: colors.blue,
		boxShadow: '15px 5px ' + colors.lightGrey,
		textTransform: 'uppercase'
	},
	list: {
		display: 'inline-block',
		listStyle: 'none',
	},
	feature: {
		color: colors.pink,
	},
	github: {
		position: 'absolute',
		top: 0,
		right: 0,
		border: 0,
	},
	avatar: {
		borderRadius: '50%',
		width: 32,
		height: 32,
		margin: '0 2px 2px 0',
	},

};

const repositoryUrl = 'https://github.com/luandro/hapi-universal-redux';

/**
 * Main component
 */
export default ({children}) => (
	<div>
		<nav>
            <div className="nav-wrapper  blue lighten-2">
				<Link to="/" className="brand-logo">chur.io</Link>
				<a href="#" data-activates="top-nav-bar" className="button-collapse"><i className="material-icons">menu</i></a>
				<ul className="right hide-on-med-and-down">
					<li><Link to="/" activeClassName="active">Home</Link></li>
					<li><Link to="/about" activeClassName="active">About</Link></li>
				</ul>
				<ul className="side-nav" id="top-nav-bar">
					<li><Link to="/" activeClassName="active">Home</Link></li>
					<li><Link to="/about" activeClassName="active">About</Link></li>
				</ul>
            </div>
        </nav>
		<div style={styles.base} className="container">
			<h1>
				<img src="/logo.svg" alt="logo" />
			</h1>
			{/*
			  * Pass props down to child Routes.
			*/}
			{cloneElement(children, Object.assign({}, { styles: styles, colors: colors })) }
		</div>
	</div>
)
