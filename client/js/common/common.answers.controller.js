(function() {
    'use strict';

    function CommonAnswersController ($scope) {

        $scope.reset = function(){
            $scope.search = '';
        };

        $scope.answers= [{
            title: "Once I create my card how do I use it?",
            content: "YES, EACH FAMILY MEMBER NEEDS TO GO BACK TO THE WEBSITE AND CREATE A NEW CARD FOR EACH MEMBER OF THE FAMILY. HOWEVER, OTHER FAMILY MEMBERS AND FRIENDS MAY USE YOUR DISCOUNT COUPON CARD. ",
            keyword: [{
                value: "john",
            },{
                value: "Hungry",
            },{
                value: "Sick",
            },{
                value: "Pet"
            }]
        }, {
            title: "WHAT IF I CHANGE PHARMACIES?",
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
            title: "DOES EVERY MEMBER OF MY FAMILY NEED A CARD?",
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
            title: "HOW MUCH DOES THIS PROGRAM COST ME?",
            content: "WE PROVIDE YOU WITH THE FREE YOUR RXCARD.COM COUPON CARD AT NO COST. WE PROVIDE THIS SERVICE TO ANY AND ALL AMERICANS THAT WISH TO SAVE ON THEIR PRESCRIPTION PRICES.  ",
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
            title: "WHICH PHARMACIES CAN I GO TO?",
            content: 'WE HAVE OVER 63,000 PARTICIPATING MAJOR CHAINS PHARMACIES AND LOCAL PHARMACIES NATIONWIDE, PLEASE GO BACK TO THE WEBSITE AND CLICK ON THE "PHARMACY LOCATOR". Q: WHAT TYPE OF DISCOUNT CAN I EXPECT? A: DISCOUNTS VARY AND CAN RANGE ANYWHERE FROM 0%-75% DEPENDING ON THE TYPE OF PRESCRIPTION, BRAND NAME, GENERIC NAME AND THE LOCATION OF THE SPECIFIC PHARMACY. THE DISCOUNTS ARE BASED ON THE COMBINED PURCHASING POWER OF THE MILLIONS OF CLIENTS OF OUR NATIONAL PHARMACY BENEFITS MANAGER. (PBM) Q: WHERE CAN I FIND OUT THE APPROXIMATE COST OF THE PRESCRIPTION DRUGS? A: PLEASE GO BACK TO THE WEBSITE AND CLICK ON THE "MEDICATION PRICING TOOL"',
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
        .module('app.common')
        .controller('CommonAnswersController', CommonAnswersController);

    CommonAnswersController.$inject = ['$scope'];

})();