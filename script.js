let roww=document.getElementById("row");          
// let valu=fetch("https://api.openbrewerydb.org/breweries/");
// valu.then((data)=>data.json()).then((data1)=>{
//     console.log(data1);
// })
document.addEventListener("DOMContentLoaded",()=>{
    
    var slelectDrop= document.getElementById("name");
    
    fetch("https://api.openbrewerydb.org/breweries").then(res=>{
        return res.json();
    
    }).then(data=> {
        console.log(data);
        let outPutValue = "";
    
        data.forEach(country => {
            outPutValue += `<option>${country.id}</option>`;
    
        });
        slelectDrop.innerHTML = outPutValue;
    
    }).catch(err =>{
        conaole.log(err);
    })

})
function submitButton(event){
    event.preventDefault()
    let company_name=document.getElementById("name").value;
    // console.log(company_name);


        let data = fetch(`https://api.openbrewerydb.org/breweries/${company_name}`)
        console.log(data);
        data.then((dataa)=>dataa.json()).then((res)=>
        {

            let div=document.createElement("div");
            div.setAttribute("class","card_items");
            
            let fileload=template(res);
            
            div.innerHTML=fileload;
            
            roww.appendChild(div);
            
        })
        

        // let div= document.createElement("div");
        // div.setAttribute=("class","col-sm-6 col-md-4 col-lg-4 col-xl-4");
        // let tem =document.createElement("template");
        
        // div.append(tem);
        // roww.append(div);
}

let template= (company)=>{
    console.log(company);

        let temp=`
        
        <div class="">
        <p class="card-text">Breweries Name:<B>${company.name}</b>&nbsp&nbsp&nbsp   type of BEER:&nbsp&nbsp<b>${company.brewery_type}</b></p>
        <p class="card-text"><u>Address of the Brewery:</u></p>
        <p class="card-text">city:  <b>${company.city}</b></p>
        <p class="card-text">state: <b>${company.state}</b></p>
        <p class="card-text">postal code:   <b>${company.postal_code}</b>
        </p><P>Company URL:</p>
        <a href="${company.website_url}"><u>Click Here</u></a>
        <p class="card-text">Contect NO:<b class="phoneno">${company.phone}</b></p>
        </div>
        <hr><ht><hr>
        `
        return temp;
    }