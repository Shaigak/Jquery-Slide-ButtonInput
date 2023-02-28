$(document).ready(function () {


    let btn = $("button");

    let users = [];

    
    if (localStorage.getItem("user") != null) {
        users = JSON.parse(localStorage.getItem("user"))

    }

    

    btn.click(function () {

        $("ul").empty();

        let input1 = $("input").eq(0);

        let input2 = $("input").eq(1);
        

        users.push({
            id: new Date().getMilliseconds(),
            name: input1.val(),
            surname: input2.val(),

        })



        localStorage.setItem("user", JSON.stringify(users));

        users = JSON.parse(localStorage.getItem("user"))

        for (const user of users) {
            $("ul").append(`<li data-id=${user.id} class="list-group-item">${user.name + " " + user.surname}</li`)
            
            input1.val("");
            
            input2.val("");

        }
    })

    for (const user of users) {
        $("ul").append(`<li class="list-group-item">${user.name + " " + user.surname}</li`)

    }



    $(document).on("click","li",function(){
   
       this.remove()
       
     })
     

})