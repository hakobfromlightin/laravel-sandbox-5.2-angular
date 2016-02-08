@extends('layouts.app')

@section('content')
    @if($cards)
        @foreach($cards as $card)
            <div>
                <h1>{{ $card->title }}</h1>
            </div>
        @endforeach
    @else
        <h3>No cards are available!</h3>
    @endif
@stop