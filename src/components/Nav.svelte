<script>
	export let segment;
</script>

<style>
	.Nav{
		/*Esto es para poner un borde en la parte inferior*/
		border-bottom: 1px solid rgb(255, 255, 255, 0.1);
		/*Este es el grosor*/
		font-weight: 300;
		background-color: rgb(49, 49, 49);
		color: white;
	}
	.Nav-container{
		display: grid;
		grid-template-columns: minmax(auto, 1024px);
		justify-content: center;
		align-items: center;
	}
	.Nav-content{
		display: flex;
		justify-content: space-between;

	}
	.Nav-social{
		justify-content: center;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(126, 126, 126);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 1em 1em 0;
		display: block;
		font-size: 14px;
		/*Le estamos poniendo una animacion*/
		transition: all 0.3s ease-in-out 0ms;
		color: white;
	}
	a:hover{
		color: rgb(158, 158, 158);
	}
</style>

<nav class="Nav">
	<div class="Nav-container">
		<div class="Nav-content">
			<div class="Nav-social">
				<ul>
					<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
			
					<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
			
					<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
			
					<li><a aria-current="{segment === 'general' ? 'page' : undefined}" href="general">General</a></li>
			
					<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
			
				</ul>
			</div>
		</div>
	</div>

</nav>
