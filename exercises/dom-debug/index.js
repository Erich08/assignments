const colors = ["red", "blue", "green"]


//Changed event listener to listen for click instead of onclick.. Seems to be working now.
document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})


//Added .length so the for loop will iterate through the array. Added document to createElement on line 16. Tricky.. Tricky..
function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    //On line 23 I had to change parent to parentElement and also add .style to change the background color
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

//Added .value to line 28. It didn't know which value to add.
function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


