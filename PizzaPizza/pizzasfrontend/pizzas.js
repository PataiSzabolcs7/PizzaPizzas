document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");
    
    createButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/PizzaPizza/index.php?pizzas";
        const formdata= new FormData(document.getElementById("pizzasForm")); 
        let options={
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response= await fetch(baseUrl, options);
    });
    readButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/PizzaPizza/index.php?pizzas";
        let options={
            method: "GET",
            mode: "cors"
        };
        let response= await fetch(baseUrl, options);
        if(response.ok){
            let data= await response.json();
            dolgozokListazasa(data);
        }
        else{
            console.error("Hiba a szerver válaszában!");
        }
    });




    deleteButton.addEventListener("click" ,async function(){
        let pazon = document.getElementById("pazon").value;
        let baseUrl="http://localhost/PizzaPizza/index.php?pizzas/"+pazon;
        let options={
            method: "DELETE",
            mode: "cors"
        }
        let response= await fetch(baseUrl, options);
    });


    updateButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/PizzaPizza/index.php?pizzas/" +pazon;
         let object ={
            pazon :   document.getElementById("pazon").value,
            pnev :  document.getElementById("pnev").value,
            par :   document.getElementById("par").value
        }
        let body=JSON.stringify(object)
        let options={
            method: "PUT",
            mode: "cors",
            body: body
        };
       
        
        let response= await fetch(baseUrl, options);
    });





    function dolgozokListazasa(dolgozok){
        let dolgozokDiv= document.getElementById("pizzaslista");
        let tablazat = dolgozokFejlec();
        for(let pizzas of dolgozok){
            tablazat+= dolgozoSor(pizzas);
        }
        dolgozokDiv.innerHTML = tablazat+"</tbody> </table>";
    }
    function dolgozoSor(pizzas){
        let sor=`<tr>
                    <td>${pizzas.pazon}</td>
                    <td>${pizzas.pnev}</td>
                    <td>${pizzas.par}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" onclick="adatBetoltes(${pizzas.pazon})" id="select">Kiválaszt</button>
                    </td>
                </tr>`;
        return sor;
    }
    function dolgozokFejlec(){
        let fejlec=`<table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Azonosító</th>
                                <th>Név</th>
                                <th>Ár</th>
                            </tr>
                        </thead>
                        <tbody>`;
        return fejlec;
    }
});