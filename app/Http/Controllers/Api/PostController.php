<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Post;

class PostController extends Controller
{
    public function index(){
        
        $posts = Post::with(['category','tags'])->paginate(4);
        return response()->json($posts);
    }


    public function show($slug){
         $post = Post::where('slug',$slug)->with(['tags','category'])->first();

         if(!$post){
             return ["title" => "pagina non trovata"];
         }
         return response()->json($post);
    }
}

