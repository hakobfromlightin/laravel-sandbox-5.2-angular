@extends('layouts.app')

@section('content')
    @if($card)
        <div>
            <h1>{{ $card->title }}</h1>
        </div>
    @endif
@stop