import { fireEvent, render, screen } from "@testing-library/react"
import Form  from "./Form"
import  userEvent  from "@testing-library/user-event"

test("koşulların onaylanmasına göre buton aktifliği", async()=>{
    render (<Form/>)
    const user =userEvent.setup()
// checkbox'ı çağırma  
   const termsCheck= screen.getByRole("checkbox", {name : /Koşulları okudum ve kabul ediyorum/i})

 // buttonu çağırma 
  const ordetBtn=  screen.getByRole("button",{name: /siparişi onayla/i})
    // buton inaktifliğini kontrol
     expect(ordetBtn).toBeDisabled()

    // checkbox'ın tiklenmemiş olmasını kontrol
    expect(termsCheck).not.toBeChecked()

    // checkbox'ın tiklenmesi ve butonun aktifliği kontrol
await user.click(termsCheck)
expect(ordetBtn).toBeEnabled()

    // checkbox'ın tikini kaldırılması ve butonun inaktifliği kontrol
await user.click(termsCheck)
expect(ordetBtn).toBeDisabled()
   });

   test("siparişi onayla butonunun üzerine mouse ile  gelen bildirim", async()=>{
    render (<Form/>)
   const user= userEvent.setup()
    // checkbox'ı çağırma
   const button = screen.getByRole("button",{name : /siparişi onayla/i})
    // butonu çağırma
 const termsCheck=   screen.getByRole("checkbox",{name : /Koşulları okudum ve kabul ediyorum/i})
    // bildirimi çağırma 
  const popup= screen.getByText(/Size gerçekten birşey teslim etmeyeceğiz/i)

//   checkbox'ı tıklama 
await user.click(termsCheck)
// mouse' u buton üzerine getirme 
 fireEvent.mouseEnter(button)
// bildirim buton üzerine gelince görünüyor mu kontrol
expect(popup).toBeVisible()
// mouse'u buton üzerinden çekme 
 fireEvent.mouseLeave(button)
// mouse'u çekince bildirim gözükmüyor mu kontrol
expect(popup).not.toBeVisible()

   } )