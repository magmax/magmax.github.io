<?php

   function redirect($url, $permanent=true)
   {
       header('Location: ' . $url, true, $permanent ? 301 : 302);
       die();
   }

   $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
   if ($lang != 'en') {
     $lang = 'es';
   }

   $url_map = array(
       '/2014/02/22/lamp-con-salt.html' => '/blog/2014/1/22/lamp-con-salt/',
       '/blog/2014/02/22/lamp-con-salt' => '/blog/2014/1/22/lamp-con-salt/',
       '/archive.html' => '/blog/archives',
       '/blog/2011/08/13/apache-derby' => '/blog/2011/4/23/apache-derby/',
       '/blog/archives/' => '/archives.html',
       '/es/blog/2014/1/22/lamp-con-salt/' => '/blog/2014/1/22/lamp-con-salt/',
       '/2010/11/17/mocks-y-stubs.html' => '/blog/2010/11/17/mocks-y-stubs/',
       '/en/blog/usando-bootstrap/' => '/blog/usando-bootstrap/',
       '/en/blog/hibernate-netbeans/' => '/blog/hibernate-netbeans/',
       '/blog/mythtv/' => '/en/blog/mythtv/',
       '/blog/tellico/' => '/en/blog/tellico/',
       '/blog/kohana-module/' => '/en/blog/mkohana-module/',
       '/blog/gashlycode-tinies/' => '/en/blog/gashlycode-tinies/',
       '/blog/easytag/' => '/en/blog/easytag/',
       '/blog/debaday/' => '/en/blog/debaday/',
   );
   if ( array_key_exists($_SERVER["REQUEST_URI"], $url_map)) {
       redirect($url_map[$_SERVER["REQUEST_URI"]]);
   }

   if ( preg_match("@^(/20.+)\.html@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect('/blog' . $matches[1]);
   }
   if ( preg_match("@^(/blog/20\d+/)0(\d)(/.*)@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect($matches[1] . $matches[2] . $matches[3]);
   }
   if ( preg_match("@^(/blog/20\d+/\d+/)0(\d)(/.*)@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect($matches[1] . $matches[2] . $matches[3]);
   }
   if ( preg_match("@^/page/?(\d+)@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect('/index-' . $matches[1] . '.html');
   }
   if ( preg_match("@^/blog/?$@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect('/');
   }
   if ( preg_match("@^/blog/blog/(.*)$@", $_SERVER["REQUEST_URI"], $matches) ) {usando-bootstrap/
       redirect('/blog/' . $matches[1]);
   }
   if ( preg_match("@^(/blog/.*).html$@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect($matches[1]);
   }
   if ( preg_match("@^/drupal/.*@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect('/');
   }
   if ( preg_match("@^/20\d\d/?(index.html)?$@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect('/archive.html');
   }
   // Avoid dates
   if ( preg_match("@^(/blog)(/\d+/\d+/\d+)(/.*)@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect($matches[1] . $matches[3]);
   }
   if ( preg_match("@^(/blog/en)(/\d+/\d+/\d+)(/.*)@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect($matches[1] . $matches[3]);
   }
   // avoid english not found
   if ( preg_match("@^(/en)(/.*)@", $_SERVER["REQUEST_URI"], $matches) ) {
       redirect($matches[1], false);
   }

   $minus = strtolower($_SERVER["REQUEST_URI"]);
   if ( $minus != $_SERVER["REQUEST_URI"] ){
      redirect($minus);
   }

   //  header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
   http_response_code(404);
   include("stories/404page/index.html");
?>
