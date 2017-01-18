import React from 'react';
import { Link } from 'react-router';

const ControlPanel = ({ onToggleView, onToggleSort, onSearch, onErase, template, query, sorting }) => {

	const buttonClass = 'toggle-button inline-block blunt-bg toggle-button-standard';
	const spitClassNames = (...classNames) => classNames.join(' ')

	return (
		<div className="control-panel">
			<div className="controls">
				<div className="view-controls inline-block">
					<span id="grid" onClick={onToggleView} className={ template == 'grid' ? spitClassNames('active', buttonClass) : buttonClass }>
						<i className="fa fa-th" />
					</span>
					<span id="list" onClick={onToggleView} className={ template == 'list' ? spitClassNames('active', buttonClass) : buttonClass }>
						<i className="fa fa-list" />
					</span>
				</div>
				<div className="sorting inline-block">
					<span id="name-sort" onClick={onToggleSort} className={ sorting == 'name-sort' ? spitClassNames('active', buttonClass) : buttonClass }>
						<i className="fa fa-sort-alpha-asc" />
					</span>
					<span id="popular-sort" onClick={onToggleSort} className={ sorting == 'popular-sort' ? spitClassNames('active', buttonClass) : buttonClass }>
						<i className="fa fa-star" />
					</span>
				</div>
			</div>
			<div className="filtering-and-searching">
				<div className="search">
					<input onChange={onSearch} type="text" name="search" value={query} placeholder="Search by player name" />
					<span onClick={onErase} className={ query.length >= 1 ? 'erase' : 'hidden' }>
						<i className="fa fa-times" />
					</span>
				</div>
			</div>
		</div>
	)
};

export default ControlPanel;

