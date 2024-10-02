function signUp() {

let first_name = document.getElementById   ('first_name').value
let last_name = document.getElementById ('last_name').value
let phone_number = document.getElementById ('phone_number').value
let email_adress = document.getElementById ('email_adress').value
let age = document.getElementById ('age').value



let display_first_name = document.getElementById ('display_first_name')
let display_last_name = document.getElementById ('display_last_name')
let display_phone_number = document.getElementById ('display_phone_number')
let display_email_adress = document.getElementById ('display_email_adress')
let display_age = document.getElementById ('display_age')


display_first_name.textContent= `სახელი: ${first_name}` 
display_last_name.textContent=    `გვარი: ${last_name}` 
display_phone_number.textContent=   `ტელეფონის ნომერი: ${phone_number}` 
display_email_adress.textContent=  `იმეილი: ${email_adress}` 
display_age.textContent=   `ასაკი: ${age}` 
    



if (first_name === '') {
    display_first_name.textContent= `სახელი: ცარიელია`
} if (last_name === '') {
    display_last_name.textContent= `გვარი: ცარიელია`
} if (phone_number === '') {
    display_phone_number.textContent= `ტელეფონის ნომერი: ცარიელია`
} if (email_adress === '') {
     display_email_adress.textContent= `იმეილი: ცარიელია`

} if (age === '') {
     display_age.textContent= `ასაკი: ცარიელია`
}
    


 

}