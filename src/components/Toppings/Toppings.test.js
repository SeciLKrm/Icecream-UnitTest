import { render, screen} from "@testing-library/react"
import Toppings from "./Toppings"
import  userEvent  from "@testing-library/user-event"


test("sos kartlarının sepet state 'ine yaptığı değişim",async()=>{
   render(<Toppings />)
    const user =userEvent.setup()
    // sos çeşitleri başlığını çağırma 
    const total = screen.getByRole("heading",{name:/Sos Çeşitleri :/i})
    // resimleri çağırma 
    await screen.findAllByRole("img",{name :/top/i})
    // check inputlarını çağırma 
   await screen.findAllByRole("checkbox",{name :/(M&Ms|Hot fudge|Peanut butter cups|Gummi bears|Mochi|Cherries)/i })
 // tek bir sosu çağırma (Cherries)
  const cherryCheck =await screen.findByRole("checkbox",{name :/cherries/i})
// tek bir sosu çağırma(mochi)
const mochiCheck =await screen.findByRole("checkbox",{name :/mochi/i})

//  Cherries  checkboxa tıklama
 await user.click( cherryCheck)
// tıklama ile basketteki artış
 expect(total).toHaveTextContent(2)
//Mochi  checkboxa tıklama
await user.click(mochiCheck)
// tıklama ile basketteki artış
 expect(total).toHaveTextContent(4)
// mochi yi çıkarma 
await user.click(mochiCheck)
// yeni değeri kontrol etme 
 expect(total).toHaveTextContent(2)
 


} )