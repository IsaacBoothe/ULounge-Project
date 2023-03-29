$(document).ready(function () {

    $.ajax({
        type: "Get",
        url: "posts.json",
        dataType: "JSON"
    }).done(function (data) {
        $.each(data, function () {
            $.each(this, function (key, value) {
                $("#postTable").append(
                    "<tr><td>" + value.name + "</td>" +
                    "<td>" + value.date + "</td>" +
                    "<td>" + value.content + "</td>" +
                    "<td><button type='button'> Like This Post</button></td>" + "</tr>",
                );
                $("button").addClass("likeButton");
            });
        })
    });

    $("#datePicker").click(function(){
        $.ajax({
            type: "Get",
            url: "https://api.xmltime.com/timeservice?accesskey=9esnPfFNt0&expires=2022-05-12T18%3A41%3A56%2B00%3A00&signature=OB0QhyeLcdmgEmsU0vWJFG1nC9Y%3D&version=3&prettyprint=1&out=js&placeid=norway%2Foslo"
        }).done(function(data){
            console.log(data);
            var month = data.locations[0].time.datetime.month;
            var day = data.locations[0].time.datetime.day;
            var year = data.locations[0].time.datetime.year;
            console.log(month);
            console.log(day);
            console.log(year);
            document.getElementById("datePicker").value = month + "/" + day + "/" + year;
        })
    });

    $(".link").hover(function () {
        $(this).removeClass("link");
        $(this).addClass("linkHover");
    }, function () {
        $(this).removeClass("linkHover");
        $(this).addClass("link");
    });

    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
    });

    $(document).on('click', '.likeButton', function () {
        $(this).removeClass("likeButton");
        $(this).addClass("likeButtonClicked", function () {
            $(this).html("You liked this!")
        });
    });

    $(document).on('click', '.likeButtonClicked', function () {
        $(this).addClass("likeButton")
        $(this).removeClass("likeButtonClicked", function () {
            $(this).html("Like This Post");
        });
    });

    $("#nameBox").focus();

    $(".cycle-slideshow").click(function () {
        if ($(this).is(".cycle-paused")) {
            $(this).cycle("resume");
        }
        else {
            $(this).cycle("pause");
        }
    })

});