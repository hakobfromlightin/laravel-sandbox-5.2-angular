<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel with Angular</title>

    <!-- Fonts and Styles -->
    <link href="{{ elixir('css/all.css') }}" rel="stylesheet">

    <style>
        body {
            font-family: 'Lato';
        }

        .fa-btn {
            margin-right: 6px;
        }
    </style>
    @yield('header')
</head>
<body id="app-layout">

@include('layouts.nav_bar')

@yield('content')

        <!-- JavaScripts -->
<script src="{{ elixir('js/all.js') }}"></script>
@yield('footer')

</body>
</html>
