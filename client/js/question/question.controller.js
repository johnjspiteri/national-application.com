(function() {
    'use strict';

    function Question ($scope) {

        $scope.reset = function(){
            $scope.search = '';
        };

        $scope.answers= [{
            title: "Once I create my card how do I use it?",
            content: "YES, EACH FAMILY MEMBER NEEDS TO GO BACK TO THE WEBSITE AND CREATE A NEW CARD FOR EACH MEMBER OF THE FAMILY. HOWEVER, OTHER FAMILY MEMBERS AND FRIENDS MAY USE YOUR DISCOUNT COUPON CARD. ",
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
            content: "YES, EACH FAMILY MEMBER NEEDS TO GO BACK TO THE WEBSITE AND CREATE A NEW CARD FOR EACH MEMBER OF THE FAMILY. HOWEVER, OTHER FAMILY MEMBERS AND FRIENDS MAY USE YOUR DISCOUNT COUPON CARD. ",
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
            content: "YES, EACH FAMILY MEMBER NEEDS TO GO BACK TO THE WEBSITE AND CREATE A NEW CARD FOR EACH MEMBER OF THE FAMILY. HOWEVER, OTHER FAMILY MEMBERS AND FRIENDS MAY USE YOUR DISCOUNT COUPON CARD. ",
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
            content: "YES, EACH FAMILY MEMBER NEEDS TO GO BACK TO THE WEBSITE AND CREATE A NEW CARD FOR EACH MEMBER OF THE FAMILY. HOWEVER, OTHER FAMILY MEMBERS AND FRIENDS MAY USE YOUR DISCOUNT COUPON CARD. ",
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
            content: "YES, EACH FAMILY MEMBER NEEDS TO GO BACK TO THE WEBSITE AND CREATE A NEW CARD FOR EACH MEMBER OF THE FAMILY. HOWEVER, OTHER FAMILY MEMBERS AND FRIENDS MAY USE YOUR DISCOUNT COUPON CARD. ",
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
        .module('app')
        .controller('Question', Question);

    Question.$inject = ['$scope'];

})();