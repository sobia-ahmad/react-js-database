import React from 'react'

function Search({ handleInput, search }) {
	return (
		<section className="searchbox-wrap">
			<input
				type="text"
				placeholder="Please search for a movie or a TV show..."
				className="searchbox"
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search
