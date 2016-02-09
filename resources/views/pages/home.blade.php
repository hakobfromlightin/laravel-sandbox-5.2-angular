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
               <button ng-click="setHello('Foo')">just a button</button>
               <br>
               <button ng-click="setHello('Bar')">just another button</button>
               <br>
               @{{ SecondFactory.hello() }}
           </div>
       </div>
    </div>
@stop

@section('footer')
    <script src="{{ url('js/main.js') }}"></script>
@stop
