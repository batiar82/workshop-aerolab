import 'isomorphic-fetch'
import Comment from '../componens/Comment.js'

export default class extends React.Component{
	static async getInitialProps({query}){
		//http://node-hnapi.herokuapp.com/item/
		//localhost:3000/story
		console.log(query.id)
		let req= await fetch('http://node-hnapi.herokuapp.com/item/'+query.id)
		let story= await req.json()
	
		console.log(story)
		return {story}
	}
	render(){
		const { story } = this.props
		return <div>
			<h1>
				{story.title}
			</h1>
			<div className="comments">
				{story.comments.map((comment) => <Comment comment={comment}/>)}
			</div>
		</div>
	}

}