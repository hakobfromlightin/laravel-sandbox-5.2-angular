@extends('layouts.app')

@section('angular')
    ng-app="app"
@stop

@section('content')
    <div class="container" ng-controller="ThirdController">
        <div class="row">
            <div class="col-md-12">
                @{{ hello }}
                <br>
                @{{ getBookmark() }}
                <br>
            </div>
        </div>
    </div>
@stop

@section('footer')
    <script src="{{ url('js/main.js') }}"></script>
@stop
