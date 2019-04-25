# Google Analytics
### [Google Analytics link](https://analytics.google.com)
```html
<!-- Google Analytics -->
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->
```

# Google Tag Manager
### [Google Tag Manager link](https://tagmanager.google.com)
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N672RC2');</script>
<!-- End Google Tag Manager -->
```
# Facebook Custom Audience
### [Facebook Custom Audience link](https://www.facebook.com/business/help/341425252616329)
# YouTube Video
### [YouTube Video link](https://developers.google.com/youtube/)
```html
<!DOCTYPE html>
<html>
  <body>
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    <div id="player"></div>

    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    </script>
  </body>
</html>
```
# Google AdWords
### [Google AdWords](https://developers.google.com/google-ads/api)

# Google WebFonts
### [Google WebFonts link](https://developers.google.com/fonts/docs/developer_api)

# Facebook Pixel
### [Facebook Pixel link](https://developers.facebook.com/docs/marketing-api/audiences-api/pixel/)

# AdWords Remarketing
### [AdWords Remarketing](https://support.google.com/google-ads/answer/2476688?co=ADWORDS.IsAWNCustomer%3Dtrue&oco=1)
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-123456789"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
 
gtag('config', 'AW-123456789');
</script>
```

# Criteo
### [Criteo API link](https://support.criteo.com/s/article?article=360001223829-Introduction-to-the-Criteo-Marketing-API)

# Webtrakk
### [Webtrakk link](https://support.webtrekk.com/hc/en-us/articles/115001497529-JSON-RPC-API)

# Google Maps
### [Google Maps link](https://developers.google.com/maps/documentation/javascript/tutorial)
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
  </body>
</html>
```