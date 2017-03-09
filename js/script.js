(function() {
    "use strict";
    
    var Images = [
        '/Images/Background---Black-Ice.jpg',
        '/Images/Background---Colour-Storm.jpg',
        '/Images/Background---Electric-Water.jpg',
        '../Images/Background---Lime-Drops.jpg',
        '../Images/Background---Natural-Bubbles.jpg',
        '../Images/Background---Nice-Try.jpg',
        '../Images/Background---Peach-Hexagon.jpg',
        '../Images/Background---Room-303.jpg'
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num],
            imgString = '<img src="' + pic + '" height="100%" width="100%" />';

        return imgString;
    }

    $("#picture").append(getRandomImage(Images));

})();
