# Crispy

My boilerplate for new websites

    <!DOCTYPE html>
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Crispy is a boilerplate for new websites</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">

      <!-- DNS prefetch -->
      <link rel="dns-prefetch" href="//fonts.googleapis.com">
      <link rel="dns-prefetch" href="//google-analytics.com">
      <link rel="dns-prefetch" href="//www.google-analytics.com">
      <link rel="dns-prefetch" href="//platform.twitter.com">

      <!-- Site and file prefetch/prerender -->
      <link rel="prefetch prerender" href="http://website.com/graphic.png" />
      <link rel="prefetch prerender" href="http://website.com" />

      <!-- Custom CSS -->
      <link rel="stylesheet" href="css/normalize.css">
      <link rel="stylesheet" href="css/base.css">
      <link rel="stylesheet" href="css/foundation-overrides.css">
      <link rel="stylesheet" href="css/helpers.css">
      <link rel="stylesheet" href="css/shame.css">
      <link rel="stylesheet" href="css/print.css">

      <!-- Modernizr -->
      <script src="js/vendor/modernizr-2.6.2.min.js"></script>

      <!-- Old IE Support (<=IE8) -->
      <!--[if lt IE 9]>
      	<script>
          // For conditional logic in main.js
          var oldIE = true;
      	</script>
        <script src="js/vendor/respond.min.js"></script>
      <![endif]-->

    </head>
    <body>





      <!-- jQuery -->
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

      <!-- Use "defer" attribute for interdependent JS files once after concatenation -->
      <!-- https://github.com/h5bp/lazyweb-requests/issues/42 -->
  
      <!-- jQuery plugins -->
      <script src="js/plugins.js"></script>

      <!-- Custom JS -->
      <script src="js/main.js"></script>

      <!-- Google Analytics -->
      <!-- http://mathiasbynens.be/notes/async-analytics-snippet#universal-analytics -->
      <script>(function(G,o,O,g,l){G.GoogleAnalyticsObject=O;G[O]||(G[O]=function(){(G[O].q=G[O].q||[]).push(arguments)});G[O].l=+new Date;g=o.createElement('script'),l=o.scripts[0];g.src='//www.google-analytics.com/analytics.js';l.parentNode.insertBefore(g,l)}(this,document,'ga'));ga('create','UA-XXXX-Y');ga('send','pageview')</script>

    </body>
    </html>