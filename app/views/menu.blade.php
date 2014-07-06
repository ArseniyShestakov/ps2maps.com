<header class="navbar navbar-default">
	<div class="container-fluid">

		<div class="navbar-header">
			<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>

			<ul class='nav'>
				<li>
					<a href="/" class='navbar-brand'>
						<div class='logo'>
							<div class='text'>ps2maps.com</div>
						</div>
					</a>
				</li>
			</ul>
		</div>

		<nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
			<ul class="nav navbar-nav">
				<li class='dropdown solo-dropdown hidden-xs hidden-ms'>
					<a class='dropdown-toggle' data-toggle='dropdown' href="javascript:;"><i class="fa fa-caret-down"></i></a>
					<ul class="dropdown-menu">
						<li><a href="/blog"><i class='icon-book'></i> Read the Blog</a></li>
						<li><a href="/upcoming"><i class='icon-star'></i> Upcoming Features</a></li>
						<li><a href="http://ps2maps.userecho.com" target="ps2maps.userecho.com"><i class='icon-comment'></i> Give us Feedback!</a></li>
						<li class='divider'></li>
						<li class="dropdown-header">Servers</li>
						@foreach( $servers as $server )
						<li><a href='/{{ $server->slug }}'>{{ $server->name }}</a></li>
						@endforeach
						<li class='divider'></li>
						<li><a href='/vr'>VR Training</a></li>

					</ul>
				</li>
				<li class='server'>
					<a href="/connery">Connery</a>
				</li>
				@foreach( $continents as $continent )
				<li class='continent'>
					<a href="/connery/{{ $continent->slug }}">{{ $continent->name }}</a>
				</li>
				@endforeach
			</ul>
			<ul class="nav navbar-nav navbar-right">

			</ul>
		</nav>
	</div>
</header>