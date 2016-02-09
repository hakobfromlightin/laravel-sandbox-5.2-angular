@extends('layouts.app')

@section('angular')
    ng-app="app"
@stop

@section('content')
    <div ng-controller="FirstController">
        <input type="text" ng-model="FirstFactory.hello">
    </div>

    <div ng-controller="SecondController">
        <input type="text" ng-model="FirstFactory.hello">
    </div>
@stop

@section('footer')
    <script src="{{ url('js/main.js') }}"></script>
@stop