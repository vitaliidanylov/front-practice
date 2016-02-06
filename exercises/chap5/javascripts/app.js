var main = function(){
    var returnCard = function(){
        var suit = ["hearts","diamonds","clubs","spades"],
        rank = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"],
        card = {};

        var suitCard = Math.floor((Math.random() * suit.length)),
        rankCard = Math.floor((Math.random() * rank.length));
        
        card.rank = rank[rankCard];
        card.suit = suit[suitCard];
        
        
        return card;
    };

    var generateHand = function(){
        var hand = [],
            card;

        while(hand.length !== 5){
            //generate card
            card = returnCard();
            //if size of hand equals zero add card
            if(hand.length === 0){
                hand.push(card);
            }
            //check if card already in a hand
            for (var i = 0; i < hand.length; i++) {
                if(hand[i].rank !== card.rank && hand[i].suit !== card.suit){
                    // hand.push(card);
                }
            };
        }

        return hand;
    };

    var containsNTimes = function(array,card,times){
        var howMany = 0,
        res;
        array.forEach(function(elem){
            if(elem === card){
                howMany++;
            }
        });
        if(howMany === times){
            res = true;
        } else {
            res = false;
        }
        console.log(res);
        return res;
    };

    //results
    generateHand();
    // var a = ['a','a','a','b','b'];
    // containsNTimes(a,"a",3);
};

$(document).ready(main);

