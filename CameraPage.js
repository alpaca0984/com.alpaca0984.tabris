var PluginPage = require("./PluginPage");

var page = new PluginPage("Camera", "org.apache.cordova.camera", function(parent) {
  var button = tabris.create("Button", {
    layoutData: {left: 10, top: 10, right: 10},
    text: "Select a picture"
  }).appendTo(parent).on("select", function() {
    navigator.camera.getPicture(onSuccess, onFail, 
        { quality: 50,destinationType: Camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM });
    function onSuccess (imageUrl) {
      imageView.set("image", {src: imageUrl});
    }
    function onFail (message) {
        alert('エラーが発生しました: ' + message);
    }
  });

  var imageView = tabris.create("ImageView", {
    layoutData: {top: [button, 20], left: 20, right: 20, bottom: 20},
    scaleMode: "stretch"
  }).appendTo(parent);
});

var page = page.create();
page.open();
