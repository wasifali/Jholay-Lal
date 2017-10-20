angular.module('merch', [])

    .controller('desktopCtrl', ['$scope', function ($scope) {

        $scope.sampleData = [
            {
                "userId": "12345",
                "state": "red.png",
                "score": "30",
                "amount": "$3,456 ",
                "last_date": "1 day ago",
                "first_date": "17-Jul",
                "activity": "thank-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "miss-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "chat.png",
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
                            user:'main',
                            time: '2017-01-12 11:35',
                            text: 'Hi, how are you? '
                        },
                        {
                            user:'responder',
                            time: '2017-01-13 11:35',
                            text: 'I am fine how about you? '
                        },
                        {
                            user:'main',
                            time: '2017-01-14 11:35',
                            text: 'Up for coffee? '
                        },
                        {
                            user:'responder',
                            time: '2017-01-15 11:35',
                            text: 'sure '
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
                "activity": "thank-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "miss-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "chat.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "thank-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "miss-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "chat.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "thank-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "miss-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "chat.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "thank-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "miss-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "chat.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "thank-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "miss-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
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
                "activity": "chat.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Good to see yesterday'
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'same here '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'up for hike next week? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure, how about Friday? '
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
                "activity": "thank-you.png",
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
                        user:'main',
                        time: '2017-01-12 11:35',
                        text: 'Hi, how are you? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-13 11:35',
                        text: 'I am fine how about you? '
                    },
                    {
                        user:'main',
                        time: '2017-01-14 11:35',
                        text: 'Up for coffee? '
                    },
                    {
                        user:'responder',
                        time: '2017-01-15 11:35',
                        text: 'sure '
                    }
                ]
            }
        ];
        //$scope.redState = true;
        //$scope.blueState = false;
        //$scope.allState = false;
        $scope.score = 10;
        $scope.sort = 'last purchase';
        $scope.lastPur = '1d';
        $scope.search = false;
        $scope.chatScreen = true;
        $scope.dialScreen = false;
        $scope.filterScreen = false;
        $scope.detailScreen = false;
        $scope.chat = $scope.sampleData[0].chatMasseges;
        $scope.chatId = $scope.sampleData[0].userId;
        $scope.chatDetail = $scope.sampleData[0];
        $scope.message = null;
        $scope.filter = false;
        $scope.activeId = $scope.sampleData[0].userId;
        $scope.number = [];
        $scope.keyNumber = null;

            //if($scope.allState || ($scope.redState && $scope.blueState)){
            //    console.log("in 1");
                $scope.data = $scope.sampleData;
            //}
            //else if($scope.redState){
            //    console.log("in 2");
            //    $scope.data = [];
            //    for(var i = 0; i < $scope.sampleData ; i++){
            //        if($scope.sampleData[i].state === 'red.png' || $scope.sampleData[i].state === 'light-red.png' || $scope.sampleData[i].state === 'lighter-red.png'){
            //            $scope.data.push($scope.sampleData[i]);
            //        }
            //    }
            //}
            //else if($scope.blueState) {
            //    console.log("in 3");
            //    $scope.data = [];
            //    for (var i = 0; i < $scope.sampleData; i++) {
            //        if ($scope.sampleData[i].state === 'blue.png' || $scope.sampleData[i].state === 'light-blue.png' || $scope.sampleData[i].state === 'lighter-blue.png') {
            //            $scope.data.push($scope.sampleData[i]);
            //        }
            //    }
            //}
        

        $scope.lastPurchase = function(id){
            console.log(id);
            if(id === '1d'){
                $scope.lastPur = '1d';
            }
            else if(id === '3d'){
                $scope.lastPur = '3d';
            }
            else if(id === '1w'){
                $scope.lastPur = '1w';
            }
            else if(id === '1m'){
                $scope.lastPur = '1m';
            }
            else{
                $scope.lastPur = '1mp';
            }
        }

        $scope.sorting = function(id){
            console.log(id);
            if(id === 'last purchase'){
                $scope.sort = 'last purchase';
            }
            else if(id === 'score'){
                $scope.sort = 'score';
            }
            else if(id === 'ts'){
                $scope.sort = 'total spent';
            }
            else{
                $scope.sort = 'pending msg';
            }
        }

        $scope.searchOn = function() {
            $scope.search = true;
        }

        $scope.searchOff = function() {
            $scope.search = false;
        }

        $scope.menuChoice = function(val){
            if(val === 1){
                setTimeout(function() {
                    var objDiv = document.getElementById("chatbox");
                    objDiv.scrollTop = (objDiv.scrollHeight);
                }, 50)
                $scope.dialScreen = false;
                $scope.filterScreen = false;
                $scope.detailScreen = false;
                $scope.chatScreen = true;
            }
            else if (val === 2){
                $scope.filterScreen = true;
                $scope.detailScreen = false;
                $scope.chatScreen = false;
                $scope.dialScreen = false;
            }
            else if (val === 3){
                $scope.filterScreen = false;
                $scope.detailScreen = false;
                $scope.chatScreen = false;
                $scope.dialScreen = true;
            }
            else if (val === 4){
                $scope.filterScreen = false;
                $scope.detailScreen = true;
                $scope.chatScreen = false;
                $scope.dialScreen = false;
            }

        }

        $scope.dialNumber = function(val){
            if($scope.number.length < 6) {
                $scope.number.push(val);
            }
        }

        $scope.deleteNumber = function(){
            $scope.number.pop();
        }

        $scope.setActive = function(id) {
            for(i = 0; i < $scope.sampleData.length ; i++){
                if($scope.sampleData[i].userId === id){
                    setTimeout(function() {
                        var objDiv = document.getElementById("chatbox");
                        objDiv.scrollTop = (objDiv.scrollHeight);
                    }, 50)
                    $scope.activeId = $scope.sampleData[i].userId;
                }
            }
        }

        $scope.showChat = function (id) {
            for(i = 0; i < $scope.sampleData.length ; i++){
                if($scope.sampleData[i].userId === id){
                    $scope.chat = $scope.sampleData[i].chatMasseges ;
                    $scope.chatId = $scope.sampleData[i].userId;
                    $scope.chatDetail = $scope.sampleData[i];
                }
            }
            var objDiv = document.getElementById("chatbox");
            objDiv.scrollTop = (objDiv.scrollHeight);
        }

        $scope.sendMessage = function(id, message){

            message = document.getElementById("chat").value;
            document.getElementById("chat").value = "";

            if(message.length > 0 ) {
                var date = new Date();
                var hr = date.getHours();
                var min = date.getMinutes();
                date = date.toISOString().slice(0, 10);
                date = date + " " + hr + ":" + min;
                var msg = {
                    user: 'main',
                    time: date,
                    text: message
                }

                for (i = 0; i < $scope.sampleData.length; i++) {
                    if ($scope.sampleData[i].userId === id) {
                        $scope.sampleData[i].chatMasseges.push(msg);
                    }
                }
            }
            setTimeout(function() {
                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = (objDiv.scrollHeight);
            }, 50);
            document.getElementById("chat").focus();
        }

    }]);