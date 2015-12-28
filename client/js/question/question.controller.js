(function() {
    'use strict';

    function Question ($scope) {

        $scope.reset = function(){
            $scope.search = '';
        };

        $scope.answers= [{
            title: "Once I create my card how do I use it?",
            content: "No, there is no sign up or application fee to join the Florida Discount Drug Card program. All a Florida resident has to do is visit the Web site or call the Discount Drug Card help desk to sign up.",
            keywords: [{
                value: "Test",
            },{
                value: "Profit",
            },{
                value: "Price",
            },{
                value: "Pet"
            }]
        }, {
            title: "What If I Change Pharmacies?",
            content: "No, there is no sign up or application fee to join the Florida Discount Drug Card program. All a Florida resident has to do is visit the Web site or call the Discount Drug Card help desk to sign up.",
            keywords:[{
                value: "Drug",
            },{
                value: "Price",
            },{
                value: "Prescription",
            },{
                value: "Pet"
            }]
        },{
            title: "Does Every Family Member Need A Card?",
            content: "No, there is no sign up or application fee to join the Florida Discount Drug Card program. All a Florida resident has to do is visit the Web site or call the Discount Drug Card help desk to sign up.",
            keywords:[{
                value: "Test",
            },{
                value: "Hungry",
            },{
                value: "Sick",
            },{
                value: "Pet"
            }]
        },{
            title: "How Much Does This Program Cost Me?",
            content: "No, there is no sign up or application fee to join the Florida Discount Drug Card program. All a Florida resident has to do is visit the Web site or call the Discount Drug Card help desk to sign up.",
            keywords:[{
                value: "Drug",
            },{
                value: "Price",
            },{
                value: "Prescription",
            },{
                value: "Pet"
            }]
        },{
            title: "Which Pharmacies Can I Go To?",
            content: "No, there is no sign up or application fee to join the Florida Discount Drug Card program. All a Florida resident has to do is visit the Web site or call the Discount Drug Card help desk to sign up.",
            keywords:[{
                value: "Test",
            },{
                value: "Work",
            },{
                value: "Doggie",
            },{
                value: "Pet"
            }]
        }];
    }

    angular
        .module('app.question')
        .controller('Question', Question);

    Question.$inject = ['$scope'];

})();