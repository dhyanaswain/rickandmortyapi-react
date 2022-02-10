import React from 'react'
import PropTypes from 'prop-types'
import styles from './Search.module.scss'

const Search = ({ setSearch, updatePageNumber }) => {
	const searchBtn = (e) => {
		e.preventDefault()
	}
	return (
		<form
			className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
		>
			<input
				onChange={(e) => {
					updatePageNumber(1)
					setSearch(e.target.value)
				}}
				placeholder="Search for characters"
				className={styles.input}
				type="text"
			/>
			<button onClick={searchBtn} className={`${styles.btn} btn btn-primary fs-5`}>
				Search
			</button>
		</form>
	)
}

Search.propTypes = {
	setSearch: PropTypes.func,
	updatePageNumber: PropTypes.func,
}

export default Search
