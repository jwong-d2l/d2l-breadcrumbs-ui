var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function() {
	return gulp.src( [ 'dist', 'output' ], { read: false } )
		.pipe( vui.clean() );
} );

gulp.task( 'copy-icons', function () {
	return gulp.src( 'src/**/*.png' )
		.pipe( gulp.dest( 'dist' ) );
} );

gulp.task( 'css', function () {
	return vui.makeCss( 'src/**/*.style', 'dist/' );
} );

gulp.task( 'less', function () {
	return vui.makeLess( 'src/**/*.less', 'dist/' );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'less', 'copy-icons' );
} );

gulp.task( 'test', function () {
	return vui.test(
			'test/unit/karma.conf.js',
			'test/unit/**/*Spec.js',
			'dist/**/*.css'
		);
} );
