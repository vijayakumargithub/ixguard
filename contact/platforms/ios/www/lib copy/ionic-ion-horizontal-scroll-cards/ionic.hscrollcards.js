(function(ionic) {

  // SCREENWIDTH = screen.width;
  // CARDWIDTH = 120;


  angular.module('ionic.contrib.ui.hscrollcards', ['ionic'])

    .directive('hscroller', ['$timeout', function($timeout) {
      return {
        restrict: 'E',
        template: '<div class="hscroller" ng-transclude></div>',
        replace: true,
        transclude: true,

        compile: function(element, attr) {
          return function($scope, $element, $attr) {

            var el = $element[0];
            angular.element($element).bind("scroll", function(){
              var left = $element[0].scrollLeft;
              // console.log($element.childNodes);
            });


          }
        },
      }
    }])

    .directive('hcard', ['$rootScope', function($rootScope) {
      return {
        restrict: 'E',
        template: '<div class="hscroller-card" ng-transclude></div>',
        replace: true,
        transclude: true,
        scope: {
          desc: '@',
          image: '@',
          index: '@'
        },
        link: function(scope, element, attrs){
          var button = angular.element("<button class='hscroller-img' ><i class='icon "+attrs.image+"' ></i></button>");
          element.append(button);
          // element.append('<div class="hscroller-label">'+attrs.desc+'</div>');src='"+attrs.image+"'data-ng-class= '"+attrs.image+"'
           var animationClass = 'hscroller-card-animated-' + attrs.index.toString();
           element.addClass(animationClass); 

        //   <button 
        //         data-ng-class="share.htmlClass" 
        //         data-ng-click="shareCtrl.share(share.shareData)" 
        //         class="button" style="">
        //     <i class="icon"data-ng-class="share.iconClass"></i>
        // </button>

        },

      }
    }]);

})(window.ionic);