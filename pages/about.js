export default class extends React.Component{
	render(){
		return (
			<div>
				<h1 className="title">Workshop de NextJS</h1>
				<img className="image" src="/static/unicorn.jpg" alt="Unicorn"/>
				<style jsx>{`
					:global(body) {
						margin: 0;
						background-color: darkblue;
						text-align: center;
					}
					.title {
						color: rebeccapurple;
					}
					.image{
						border-radius: 100%;
					}
				`}
				</style>
			</div>)
	}
}