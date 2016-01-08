(function() {
    'use strict';

    function Question ($scope) {

        $scope.reset = function(){
            $scope.search = '';
        };

        $scope.answers= [{
            title: "Does Every Family Member Need A Card?",
            content: "Yes, each family member needs to go back to the website and create a new card for each member of the family. However, other family members and friends may use your discount coupon card.",
            keywords:[{
                value: "Card",
            },{
                value: "Family",
            }]
        },{
            title: "How Much Does This Program Cost Me?",
            content: "We provide you with the free NationalRxCard.com coupon card at no cost. We provide this service to any and all individuals and families that wish to save on their prescription prices.",
            keywords:[{
                value: "Cost",
            },{
                value: "Family",
            }]
        },
        {
            title: "Which Pharmacies Can I Visit With The Card?",
            content: "We have over 63,000 participating major chain and local pharmacies participating in our program nationwide. Use our pharmacy locator to search by state, city and/or zip code.",
            keywords:[{
                value: "Card",
            },{
                value: "Pharmacies",
            }]
        },{
            title: "Can I Use The National Discount Card For My Pet Medications?",
            content: "Yes, once you have the written prescription from your vet, take the script to your participating pharmacy and they will tell you what the discount will be.",
            keywords:[{
                value: "Drug",
            },{
                value: "Price",
            },{
                value: "Pet"
            }]
        },{
            title: "Can I Use The National Rx Card Discount Card When I'm Traveling And I Need A Prescription?",
            content: "Yes, just download the card on your mobile device or print the card and take it to the participating pharmacy. Your rxcard.Com is a very good product, one that you can feel good about and have confidence with the final results.",
            keywords:[{
                value: "Drug",
            },{
                value: "Price",
            },{
                value: "Pet"
            }]
        },{
            title: "What Are Your Support Options?",
            content: 'Support hours: emailing nationalrxcard.com through our "About Us" page for quicker answers. Have any questions? info@nationalrxcard.Com',
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
            title: "Once I Download My Card How Do I Use It?",
            content: "Once your card is created you simply download to your mobile device by text, email or save the card to your device or you can print the card out and take it with you to the pharmacy. Once at the pharmacy please present them with the mobile card and or the printed card. The card has your static identification number along with all of the pbm required pharmacy numbers. Your pharmacy will input your information into the computer where they will tell you the discount that will be applied to the prescription. Always keep a copy of the card on your mobile device and remember to show the pharmacy your national rx card every time you visit the pharmacy.",
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
            content: "When ever you change pharmacies or go to a different pharmacy your new pharmacy must put your information in the computer. Please show them your national rx card that you downloaded on your mobile device or show them the printed card.  It is very easy to use and the savings are incredible. *Go back to the website and create a new card. If you have lost your card just create a new one. If you’re travelling have the pharmacy go online and create a new card. You are never alone or without the ability to get your card and discount.",
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
            title: "Can I Use This Coupon/card With My Current Insurance? For High, Deductibles Or Co Pays And Rx Exclusions. Gaps Formulary Limitations And Donut Holes In My Rx Coverage?",
            content: 'Generally "yes", but refer to your contract of insurance for specific answers. Take your National Rx Card to the participating pharmacy and show them your card and the pharmacist will tell you the best option for you. National Rx Card produces the greatest discounts on generic drugs, upto 75% on some scripts.',
            keywords:[{
                value: "Drug",
            },{
                value: "Price",
            },{
                value: "Prescription",
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