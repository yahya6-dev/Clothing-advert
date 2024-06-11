import logo from './logo.svg';
import './App.css';
import woman from "./assets/advert-assets/item5.png"
import ItemsContainer from "./components/ItemsContainer" 
import item1 from  "./assets/advert-assets/item1.png"
import item2 from  "./assets/advert-assets/item2.png"
import item3 from  "./assets/advert-assets/item3.png"
import item4 from  "./assets/advert-assets/item4.png" 
import item5 from  "./assets/advert-assets/item5.png"
import item6 from  "./assets/advert-assets/item6.png"
import item7 from  "./assets/advert-assets/item7.png"
import item8 from  "./assets/advert-assets/item8.png"
import item9 from  "./assets/advert-assets/item9.png"
import item10 from  "./assets/advert-assets/item10.png"
import item11 from  "./assets/advert-assets/item11.png"
import item12 from  "./assets/advert-assets/item12.png"
import item13 from  "./assets/advert-assets/item13.png"
import item14 from  "./assets/advert-assets/item14.png"
import item15 from  "./assets/advert-assets/item15.png"
import item16 from  "./assets/advert-assets/item16.png"
import item17 from  "./assets/advert-assets/item17.png"
import item18 from  "./assets/advert-assets/item18.png"
import item19 from  "./assets/advert-assets/item19.png"
import item20 from  "./assets/advert-assets/item20.png"
import item21 from  "./assets/advert-assets/item21.png"
import item22 from  "./assets/advert-assets/item22.png"
import item23 from  "./assets/advert-assets/item23.png"
import item24 from  "./assets/advert-assets/item24.png"
import item25 from  "./assets/advert-assets/item25.png"
import item26 from  "./assets/advert-assets/item26.png"
import item27 from  "./assets/advert-assets/item27.png"
import item28 from  "./assets/advert-assets/item28.png"
import item29 from  "./assets/advert-assets/item29.png"
import chat   from  "./assets/chat.svg"

//
// photos,name,price,sizeIcon,type,sizes=[],colors=[]

function App() {
  //Data that our application uses
  let data = [
    {type:"Clothing",photos:[item4,item5,item19],name:"Ladies' Abaya",price:20000,sizes:["XX","XS","XL","SM","MD","XXL"],
      colors:["red","green"]},
    {type:"Shoes",photos:[item1,item3,item8,item10,item22,item23,item24],name:"Men's Shoes",price:13000,sizes:["32","44","45","33","49","25","28"],colors:["pink","black","gray"]},
    {type:"Clothing",photos:[item9,item6,item7,item11,item12],name:"Textile",price:23000,sizes:["Nl"],colors:["pink","black","gray","blue","red"]},
    {type:"Clothing",photos:[item4,item5,item19],name:"Ladies' Abaya",price:20000,sizes:["XX","XS","XL","SM","MD","XXL"],
      colors:["red","green"]},
    {type:"Shoes",photos:[item1,item3,item8,item10,item22,item23,item24],name:"Men's Shoes",price:13000,sizes:["32","44","45","33","49","25","28"],colors:["pink","black","gray"]},
    {type:"Clothing",photos:[item9,item6,item7,item11,item12],name:"Textile",price:23000,sizes:["Nl"],colors:["pink","black","gray","blue","red"]}
 

  ]

  return (
    <div className="Parent">
      <a href="https://api.whatsapp.com/send?phone=+2347085732314" className="chat-icon">
       Chat
      </a>
      <section className="App">
        <img src={woman} alt="woman-banner" className="banner-img"/>
        <section className="container-parent">
          <section className="buy-text-header">Buy At A Competitive ₦<span className="price">Price</span></section>
          <section className="container">
             <span className="rectangle"></span>
             <article className="header-text">
              Try Our Clothing That Makes You <div className="text-bold">Smart and Confident.</div>
             </article>
            </section>

            <div className="top-up">Up to <span className="save">-10%</span> Off</div>
          </section>
      </section>
      <section className="browse-section">
        <section className="browse-text">Browse Our Latest Product</section>
        <article className="no-product"><span className="label-product">No Product</span> <span className="number-of-product">30</span></article>
      </section>
      <section className="items-section">
        <header className="items-header-section">
          Today Deals
        </header>
        <ItemsContainer data={data}/>
      </section>
      <section className="view-shop">
        View Our Shop On <a href="https://www.google.com/maps/place/Ibb+Rd,+Kano/@12.006709,8.5235832,17z/data=!3m1!4b1!4m6!3m5!1s0x11ae80e277542f2b:0x19aabbb22d973b18!8m2!3d12.006709!4d8.5261581!16s%2Fg%2F1hjgnr045?entry=ttu" className="google-text">Google Map</a>
      </section>
      <footer>
        <span>Call</span> <article className="number">+23739343433</article>
        Thanks
      </footer>
    </div>
  );
}

export default App;