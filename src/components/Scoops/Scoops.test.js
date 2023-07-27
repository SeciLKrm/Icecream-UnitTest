import { screen, findAllByRole, render  } from "@testing-library/react"
import Scoops from "./Scoops"
import  userEvent  from "@testing-library/user-event"

/*
! Seçiciler
? Komut [All] BySeçici

* Komut > get / find / query
* get => elementler DOM'da var ise kullanılır
* find => elementin ne zaman ekran basılacaği belli değilse // async
* query => element Dom'da yok ise ve koşula göre gelicekse kullanılır


* find: methodu async bir method olduğu için
* kullanılırken async await ile beraber kullanılmalı
*/



test("Api'den gelen her kategori için ekrana kart basma",async()=>{
    render(<Scoops/>)
    // resimleri çağırma
 const images =  await screen.findAllByRole("img", {name : /cesit/i})
//    isimleri çağırma 
const datanames = await screen.findAllByText(/Mint chip|Vanilla|Chocolate|Salted caramel/i);
// gelen resimlerin 4 olduğunu kontrol etme
 expect(images).toHaveLength(4)
// gelen isimlerin 4 olduğunu kontrol etme
 expect(datanames).toHaveLength(4)

} )
test("Dondurma çeşitlerini ekleme veya sıfırlamaya göre ücretin değişimi",async()=>{
    const user = userEvent.setup()
    render(<Scoops />)
    // total ücreti çağırma 
    // ekle butonunu çağırma
    // sıfırlama butonunu çağırma 
    // amount değerini çağırma 
    const total = screen.getByRole('heading', {name: /Çeşitler Ücreti :/i});
    const addbtn =  await screen.findAllByRole("button",{name :/Ekle/i})
 const reset = await  screen.findAllByRole("button",{name : /sıfırla/i})
 const amount = await screen.findAllByTestId('amount-span')
// ekle butonuna basınca total ücreti değişimini kontrol etme 


await user.click(addbtn[0]);

expect(total).toHaveTextContent('3');


// 1.elemana çift tıklama
await user.dblClick(addbtn[1])
expect(total).toHaveTextContent("9")

// 0.elemanı sıfırlama ile total ücreti değişimini kontrol etme 
await user.click(reset[0])
expect(total).toHaveTextContent("6")

// amount değerinin ilk önce 0 olması, tıklanınca 1 olması 
expect(amount[2]).toHaveTextContent("0")
await user.click(addbtn[2])
expect(amount[2]).toHaveTextContent("1")

})
