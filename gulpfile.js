var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss', 'resources/assets/css');

    mix.styles([
        'fonts/fontawesome-4.5.0/font-awesome.min.css',
        'fonts/googlefonts/open_sans.css',
        'fonts/googlefonts/lato.css',
        'libs/bootstrap-3.3.6/bootstrap.min.css',
        'libs/select2-4.0.1/select2.min.css',
        'libs/sweetalert/sweetalert.css',
        'app.css',
        'styles.css'
    ]);

    mix.scripts([
        'libs/jquery-2.2.0/jquery.min.js',
        'libs/bootstrap-3.3.6/bootstrap.min.js',
        'libs/select2-4.0.1/select2.min.js',
        'libs/sweetalert/sweetalert.min.js',
        'scripts.js'
    ]);

    mix.version([
        'public/css/all.css',
        'public/js/all.js'
    ]);
});