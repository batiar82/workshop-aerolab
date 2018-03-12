import 'isomorphic-fetch' //Libreria para hascer el fetch en el server pq no lo tiene 
//Buscar isomorphic para todo lo q no esta en node pero si en el browser
import Link from  'next/link'
import Head from 'next/head'
import Layout from '../componens/Layout.js'
export default class extends React.Component{

	static async getInitialProps(){
		let req= await fetch('http://node-hnapi.herokuapp.com/news')
		let stories= await req.json()
		//Traigo las noticias pq es critico para la home
		//Primer request se hace en el server, por eso console lo tira en server
		console.log(stories)
		return { stories }
	}
	render(){
		const { stories } = this.props
		return (
			<Layout title="Hacker News">
				{
					stories.map((story) => ( 
					<div className="story" key={story.id}>
						<h2>
						<a href={story.url} target="_blank">{story.title}</a>
						</h2>
						<div className="meta">
							<Link href={`/story?id=${story.id}`} prefetch>
								<a>{story.comments_count} comments</a>
							</Link>
						</div>
					</div>
					))
				}
				<style jsx>{''}</style>
			</Layout>
	}
}

