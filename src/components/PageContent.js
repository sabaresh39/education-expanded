import React, { Component } from 'react';

import tutorialIng from '../images/group-7.svg';

class PageContent extends Component{
	constructor(props){
		super(props);
	}


	renderVideoElements(tutorialVideos){

		let videoElements = tutorialVideos.map((video, i)=>{
			return (
				<div className={ i == 0 ?'tutorial-video first' : 'tutorial-video'}>
					<div>{video.title}</div>
					<div>Play</div>
				</div>
			);
		});
		return videoElements;
		
	}

	renderTutorials(tutorials){
		
		let tutorialsElements = tutorials.map((tutorial) => {
				return (
					<div>
						<div className="tutorial">
							<div className={tutorial.card.haveBG ? 'tutorial-card hasBg' : 'tutorial-card'}>
								<div className="tutorial-card-title">{tutorial.card.title}</div>
								<button className="tutorial-card-btn">{tutorial.btnText}</button>
								<div className="tutorial-card-img">
									<img src={tutorialIng} alt="Card image" />
								</div>
							</div>
							<div className="tutorial-description">
								<div className="tutorial-description-dec">
									{tutorial.desc}
								</div>
								<div className="tutorial-description-actions">
									<button>{tutorial.videos.length} Videos</button>
									<button>{tutorial.btnText}</button>
								</div>
							</div>
						</div>
						{this.renderVideoElements(tutorial.videos)}
					</div>
				);
			});

		return tutorialsElements;

	}

	renderCategories(categories){
		let categoriesElement = categories.categories.map((category)=>{
			return (<div className="category">{category}</div>);
		});
		return(
			<div className="category">
				<div className="category-title">{categories.title}</div>
				{categoriesElement}		
			</div>		
		)
	}

	render() {
		return (
			<div className="page-content">
			
				{(this.props.data).map((tutorial) => 
					
							<div>
								<div className="tutorials-title">{tutorial.title}</div>
								{this.renderTutorials(tutorial.tutorials)}
								{tutorial && tutorial.category && this.renderCategories(tutorial.category)}
							</div>
						
				)}

				<div className="query">
					<div className="query-title">Are You Looking For Something Else ? Send a Request to us.</div>
					<textarea></textarea>
					<button className="tutorial-card-btn">SEND REQUEST</button>
				</div>
			</div>	

			);
	}
}

export default PageContent;