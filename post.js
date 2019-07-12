function EditSaveClicked()
{
    let variable1 = document.getElementById("edit-save");
    if(variable1.textContent.includes('Edit'))
    {
        variable1.innerHTML = 'Save &#x1f4be;'
    }
    else if(variable1.textContent.includes('Save'))
    {
        variable1.innerHTML = 'Edit &#x270D;'
    }
    
}
let likes = 0 ;
function incLikes()
{   likes = likes + 1 ;
    console.log(likes) ;
    let ContentChange = document.getElementById('like-number-update') ;
   if(likes === 1)
   {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    ContentChange.innerHTML =`${likes} person like this !` ;
   }
}