import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>
				This is the demo of <a href="http://www.prakashn.com" target="_blank"> me</a> working on PWA for my personal webpage.
				</p>
			</div>
		);
	}
}
