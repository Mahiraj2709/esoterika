/**
 * Created by admin on 2/14/2017.
 */
ionicModule
    .controller('SocialCtrl',function ($scope) {

        $scope.facebookPage = function () {
            cordova.InAppBrowser.open('https://www.facebook.com/studioesoterika/', '_blank', 'location=yes');
        }

        $scope.instaPage = function () {
            cordova.InAppBrowser.open('https://www.instagram.com/studioesoterika/', '_blank', 'location=yes');
        }
        $scope.youtubePage = function () {
            cordova.InAppBrowser.open('https://www.youtube.com/channel/UCAcYwX-pSbV8Y3QkRnm8Xcg', '_blank', 'location=yes');
        }

        $scope.twitterPage = function () {
            cordova.InAppBrowser.open('https://twitter.com/studioesoterika', '_blank', 'location=yes');
        }

        $scope.ustreamPage = function () {
            cordova.InAppBrowser.open('http://www.ustream.tv/recorded/85371296', '_blank', 'location=yes');
        }
    })
