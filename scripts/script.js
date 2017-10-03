angular.module('merch', [])

    .controller('desktopCtrl', ['$scope', function ($scope) {
        $scope.data = [
            {
                "userId": "12345",
                "state": "red.png",
                "score": "30",
                "amount": "$3,456 ",
                "last_date": "1 day ago",
                "first_date": "17-Jul",
                "activity": "thank you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Pqrstu Vwxyzabc",
                "amount2": "$72 ",
                "date_delta": "1 day",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$3,456 ",
                "amount4": "$10,234 ",
                "action_text": "Action1 Action1 Action1",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : " 01/13/2017 11:35 AM",
                        "message":"I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message":"Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message":"sure"
                    },
                    {
                        "date" : "01/16/2017 11:35 AM",
                        "message":"wanna grab something to eat"
                    }
                ]
            },
            {
                "userId": "123456",
                "state": "light-red.png",
                "score": "50",
                "amount": "$3,235 ",
                "last_date": "3 days ago",
                "first_date": "16-Apr",
                "activity": "miss you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Vwxyzabc Pqrstu",
                "amount2": "$73 ",
                "date_delta": "2 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$3,235 ",
                "amount4": "$1,023 ",
                "action_text": "Action2 Action2 Action2",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },{
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },{
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "234567",
                "state": "lighter-red.png",
                "score": "70",
                "amount": "$6,534 ",
                "last_date": "1 week ago",
                "first_date": "15-May",
                "activity": "chat image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Vwxyzabc Pqrstu Lmmn",
                "amount2": "$74 ",
                "date_delta": "3 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$6,534 ",
                "amount4": "$14,234 ",
                "action_text": "Action3 Action3 Action3",
                "chatMasseges":
                    [
                        {
                            "date" : "01/12/2017 11:35 AM",
                            "message" : "Hi"
                        },
                        {
                            "date" : "01/12/2017 11:35 AM",
                            "message" : "how are you?"
                        },
                        {
                            "date" : "01/13/2017 11:35 AM",
                            "message" : "I am fine how about you?"
                        },
                        {
                            "date" : "01/14/2017 11:35 AM",
                            "message" : "Up for coffee?"
                        },
                        {
                            "date" : "01/15/2017 11:35 AM",
                            "message" : "sure"
                        },
                        {
                            "date" : "01/16/2017 11:35 AM",
                            "message" : "wanna grab something to eat"
                        }
                    ]
            },
            {
                "userId": "345678",
                "state": "blue.png ",
                "score": "90",
                "amount": "$1,234 ",
                "last_date": "4 day ago",
                "first_date": "15-Nov",
                "activity": "thank you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Pqrstu Lmmn Vwxyzabc",
                "amount2": "$75 ",
                "date_delta": "2 day",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$1,234 ",
                "amount4": "$1,034 ",
                "action_text": "Action1 Action1 Action1",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "456789",
                "state": "light-blue.png",
                "score": "100",
                "amount": "$2,356 ",
                "last_date": "1 month ago",
                "first_date": "14-Oct",
                "activity": "miss you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Pqrstu Vwxyzabc",
                "amount2": "$76 ",
                "date_delta": "4 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$2,356 ",
                "amount4": "$10,245 ",
                "action_text": "Action2 Action2 Action2",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    },
                    {
                        "date" : "01/16/2017 11:35 AM",
                        "message" : "wanna grab something to eat;"
                    }
                ]
            },
            {
                "userId": "567900",
                "state": "lighter-blue.png",
                "score": "30",
                "amount": "$123 ",
                "last_date": "2 month2 ago",
                "first_date": "16-Sep",
                "activity": "chat image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Vwxyzabc Pqrstu",
                "amount2": "$77 ",
                "date_delta": "5 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$123 ",
                "amount4": "$10,234 ",
                "action_text": "Action3 Action3 Action3",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },{
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },{
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "679011",
                "state": "gray.png",
                "score": "50",
                "amount": "$9,853 ",
                "last_date": "3 months ago",
                "first_date": "17-Mar",
                "activity": "thank you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Vwxyzabc Pqrstu Lmmn",
                "amount2": "$78 ",
                "date_delta": "3 day",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$9,853 ",
                "amount4": "$15,234 ",
                "action_text": "Action1 Action1 Action1",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    }
                ]
            },
            {
                "userId": "790122",
                "state": "red.png",
                "score": "70",
                "amount": "$1,234 ",
                "last_date": "2 weeks ag0",
                "first_date": "17-Jan",
                "activity": "miss you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Pqrstu Lmmn Vwxyzabc",
                "amount2": "$79 ",
                "date_delta": "6 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$1,234 ",
                "amount4": "$1,034 ",
                "action_text": "Action2 Action2 Action2",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },{
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },{
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "901233",
                "state": "light-red.png",
                "score": "90",
                "amount": "$807 ",
                "last_date": "5 months ago",
                "first_date": "16-Aug",
                "activity": "chat image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Pqrstu Vwxyzabc",
                "amount2": "$80 ",
                "date_delta": "7 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$807 ",
                "amount4": "$10,234 ",
                "action_text": "Action3 Action3 Action3",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    }
                ]
            },
            {
                "userId": "112344",
                "state": "lighter-red.png",
                "score": "100",
                "amount": "$52,340 ",
                "last_date": "1 year ago",
                "first_date": "16-Nov",
                "activity": "thank you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Vwxyzabc Pqrstu",
                "amount2": "$81 ",
                "date_delta": "4 day",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$52,340 ",
                "amount4": "$10,234 ",
                "action_text": "Action1 Action1 Action1",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },{
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },{
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "123455",
                "state": "blue.png ",
                "score": "30",
                "amount": "$2,135 ",
                "last_date": "3 days ago",
                "first_date": "16-Dec",
                "activity": "miss you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Vwxyzabc Pqrstu Lmmn",
                "amount2": "$82 ",
                "date_delta": "8 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$2,135 ",
                "amount4": "$10,234 ",
                "action_text": "Action2 Action2 Action2",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    }
                ]
            },
            {
                "userId": "134566",
                "state": "light-blue.png",
                "score": "50",
                "amount": "$923 ",
                "last_date": "1 day ago",
                "first_date": "17-Apr",
                "activity": "chat image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Pqrstu Lmmn Vwxyzabc",
                "amount2": "$83 ",
                "date_delta": "9 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$923 ",
                "amount4": "$10,234 ",
                "action_text": "Action3 Action3 Action3",
                "chatMasseges":[
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },{
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },{
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "145677",
                "state": "lighter-blue.png",
                "score": "70",
                "amount": "$1,123 ",
                "last_date": "3 dasy ago",
                "first_date": "17-Jan",
                "activity": "thank you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Pqrstu Vwxyzabc",
                "amount2": "$84 ",
                "date_delta": "1 day",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$1,123 ",
                "amount4": "$6,234 ",
                "action_text": "Action1 Action1 Action1",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    }
                ]
            },
            {
                "userId": "156788",
                "state": "gray.png",
                "score": "90",
                "amount": "$812 ",
                "last_date": "1 week ago",
                "first_date": "17-May",
                "activity": "miss you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Vwxyzabc Pqrstu",
                "amount2": "$85 ",
                "date_delta": "2 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$812 ",
                "amount4": "$1,234 ",
                "action_text": "Action2 Action2 Action2",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "167899",
                "state": "red.png",
                "score": "100",
                "amount": "$186 ",
                "last_date": "4 day ago",
                "first_date": "17-Jul",
                "activity": "chat image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Vwxyzabc Pqrstu Lmmn",
                "amount2": "$86 ",
                "date_delta": "3 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$186 ",
                "amount4": "$234 ",
                "action_text": "Action3 Action3 Action3",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    }
                ]
            },
            {
                "userId": "179010",
                "state": "light-red.png",
                "score": "30",
                "amount": "$2,345 ",
                "last_date": "1 month ago",
                "first_date": "16-Apr",
                "activity": "thank you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Pqrstu Lmmn Vwxyzabc",
                "amount2": "$87 ",
                "date_delta": "2 day",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$2,345 ",
                "amount4": "$10,234 ",
                "action_text": "Action1 Action1 Action1",
                "chatMasseges":[
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },{
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },{
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "190121",
                "state": "lighter-red.png",
                "score": "50",
                "amount": "$1,295 ",
                "last_date": "2 months ago",
                "first_date": "15-May",
                "activity": "miss you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Pqrstu Vwxyzabc",
                "amount2": "$88 ",
                "date_delta": "4 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$1,295 ",
                "amount4": "$10,234 ",
                "action_text": "Action2 Action2 Action2",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    }
                ]
            },
            {
                "userId": "201232",
                "state": "blue.png ",
                "score": "70",
                "amount": "$12,308 ",
                "last_date": "3 months ago",
                "first_date": "15-Nov",
                "activity": "chat image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Lmmn Vwxyzabc Pqrstu",
                "amount2": "$89 ",
                "date_delta": "13 days",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$12,308 ",
                "amount4": "$3,234 ",
                "action_text": "Action3 Action3 Action3",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : ":Good to see yesterday"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "same here"
                    },{
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "up for hike next week?"
                    },{
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure, how about Friday?"
                    }
                ]
            },
            {
                "userId": "212343",
                "state": "light-blue.png",
                "score": "90",
                "amount": "$1,289 ",
                "last_date": "2 weeks ago",
                "first_date": "14-Oct",
                "activity": "thank you image",
                "name": "Abcd Efghi Lmno",
                "attribute": "Vwxyzabc Pqrstu Lmmn",
                "amount2": "$90 ",
                "date_delta": "7 day",
                "last_date2": "Friday Aug. 18, 2017",
                "amont3": "$1,289 ",
                "amount4": "$10,234 ",
                "action_text": "Action1 Action1 Action1",
                "chatMasseges": [
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "Hi"
                    },
                    {
                        "date" : "01/12/2017 11:35 AM",
                        "message" : "how are you?"
                    },
                    {
                        "date" : "01/13/2017 11:35 AM",
                        "message" : "I am fine how about you?"
                    },
                    {
                        "date" : "01/14/2017 11:35 AM",
                        "message" : "Up for coffee?"
                    },
                    {
                        "date" : "01/15/2017 11:35 AM",
                        "message" : "sure"
                    }
                ]
            }
        ];
        $scope.chat = $scope.data[0].chatMasseges;
        $scope.message;
        $scope.filter = false;

        $scope.activeId = $scope.data[0].userId;

        $scope.setActive = function(id) {
            for(i = 0; i < $scope.data.length ; i++){
                if($scope.data[i].userId === id){
                    $scope.activeId = $scope.data[i].userId;
                }
            }
        }

        $scope.showChat = function (id) {
            for(i = 0; i < $scope.data.length ; i++){
                if($scope.data[i].userId === id){
                    $scope.chat = $scope.data[i].chatMasseges ;
                }
            }
        }
    }]);