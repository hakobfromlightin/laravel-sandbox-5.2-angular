<?php

namespace App\Http\Controllers;

use App\Http\Requests;

class PagesController extends Controller
{
    /**
     * Home page.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function home()
    {
        return view('pages.welcome');
    }

    /**
     * About page.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function about()
    {
        return view('pages.about');
    }
}
