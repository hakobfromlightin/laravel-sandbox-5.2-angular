@extends('layouts.app')

@section('angular')
    ng-app="app"
@stop

@section('content')
    <div class="container">
        <div class="row" ng-controller="BookController">
            <div class="col-md-6" ng-controller="AngularBookController">
                <button ng-click="showBook()">Show Angular Book</button>
                @{{ book }}

            </div>
            <div class="col-md-6" ng-controller="EmberBookController">
                <button ng-click="showBook()">Show Ember Book</button>
                @{{ book }}
            </div>
        </div>
    </div>
@stop

@section('footer')
    <script src="{{ url('js/main.js') }}"></script>
@stop
