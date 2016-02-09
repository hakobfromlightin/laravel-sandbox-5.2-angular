@extends('layouts.app')

@section('angular')
    ng-app="app"
@stop

@section('content')
    <div>
        <input type="text" ng-model="hello">
    </div>

    @{{ hello + 'Hakob!' }}
@stop

@section('footer')
    <script src="{{ url('js/main.js') }}"></script>
@stop