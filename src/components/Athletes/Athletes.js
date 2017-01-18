import React, { Component } from 'react'
import { Link } from 'react-router'
import Athlete from './Athlete'

const shouldFilter = (query) => (item) => 
	!query || item.name.toLowerCase().includes(query.toLowerCase());

const sortByVotes = (a, b) => b.upvotes - a.upvotes;

const sortByName = (a, b) => {
	const firstName = a.known_as.toLowerCase();
	const secondName = b.known_as.toLowerCase();

	return (firstName < secondName) ? -1 : (firstName > secondName) ? 1 : 0;  
}

const whatToSort = (param) => {
	if(param === 'name-sort') {
		return sortByName
	} else {
		return sortByVotes
	}
};

const Athletes = ({ athletes, onThumbsUp, template, query, sorting }) => {

	return (
		<div className="athletes blunt-bg ">
			{ 
				athletes.filter(shouldFilter(query)).sort(whatToSort(sorting)).map((athlete) => {
					return (
						<Athlete template={template} key={athlete.id} onThumbsUp={onThumbsUp} athlete={athlete} />
					)
				})
			}
		</div>
	);
};

export default Athletes;