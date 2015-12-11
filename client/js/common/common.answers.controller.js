(function() {
    'use strict';

    function CommonAnswersController ($scope) {
        
        $scope.answers= [{
            title: "This is title one.",
            content: "Want your car serviced right now? Drive in or pick up. All service is guaranteed with fantastic fees and quality work.",
            keywords:[{
                value: "Drug",
            },{
                value: "Price",
            },{
                value: "Prescription",
            },{
                value: "Pet"
            }]
        }, {
            title: "This is title two.",
            content: "Want your car serviced right now? Drive in or pick up. All service is guaranteed with fantastic fees and quality work.",
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
            title: "This is title three.",
            content: "Want your car serviced right now? Drive in or pick up. All service is guaranteed with fantastic fees and quality work.",
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
            title: "This is title four.",
            content: "Want your car serviced right now? Drive in or pick up. All service is guaranteed with fantastic fees and quality work.",
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
            title: "This is title five.",
            content: "Want your car serviced right now? Drive in or pick up. All service is guaranteed with fantastic fees and quality work.",
            keywords:[{
                value: "Drug",
            },{
                value: "Price",
            },{
                value: "Prescription",
            },{
                value: "Pet"
            }]
        }
    ];

    }

    angular
        .module('app.common')
        .controller('CommonAnswersController', CommonAnswersController);

    CommonAnswersController.$inject = ['$scope'];

})();