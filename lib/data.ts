import bralette from '../public/assets/Bralette.png'
import trouser from '../public/assets/Trouser.png'
import shirt from '../public/assets/Shirt.png'
import skirt from '../public/assets/Skirt.png'
import dress from '../public/assets/Dress.png'
import top from '../public/assets/Top.png'


export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Products",
    hash: "#Products",
  },
] as const;



export const productData = [
  {
    id: "001",
    name: "The Gabrielle Bralette",
    price: "Rs 7,700",
    img1: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957718/1-7_kiegx1.jpg",
    img2: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957718/1-3_aclwgi.jpg",
    img3: "",
    img4: "",
    img5: "",
    ideation:{
      prop1:"A slightly curved neckline at the front, with panel boning and a centre back zipper.We take into account the varying measurements of a woman's body to create pieces that don’t restrict but rather flow naturally. We have used boning as support rather than to cinch the body. As did designer Gabrielle Chanel when she eliminated the use of corsets in her clothing. A basic bralette is a staple in every fashionista's wardrobe.",
      prop2:"Our pieces feel like a second skin. We carefully select fabrics that look and feel luxurious, creating a gorgeous ensemble and a comfortable feel.",
      prop3:"Pair our piece with jeans and sneakers for a casual look or for something a little more elevated style with our Gabrielle Trousers and throw on a pair of heels."
    },
    careInstructions: 'Dry Clean Only',
    composition:{
      prop1:"Outer Shell: 100% Silk Crepe",
      prop2:"Inner Shell: 100% Polyester"
    },
    cartIcon: bralette,
    price2:7700
  },
  {
    id: "002",
    name: "The Gabrielle Trouser",
    price: "Rs 30,000",
    img1: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677958117/1-34_2_xu3pea.jpg",
    img2: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957721/1-13_hjdbpd.jpg",
    img3: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957724/1-15_jh7gxk.jpg",
    img4: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957731/1-52_n6zhdv.jpg",
    img5: "",
    ideation:{
      prop1:'A pair of straight leg trousers with a high waist and front pockets. Made from pure silk crepe. A weighted but extremely soft fabric that flows over the body. We prioritise on the fabrics we pick, creating a gorgeous ensemble and a comfortable feel. To make this pair of trousers we’ve opted for a much thicker crepe.',
      prop2:"Gabrielle (Coco) Chanel was one of the first designers to dress women in trousers. Akin to her collections we too have used simple delicate fabrics to accentuate a woman's silhouette. A closet must have for every woman.",
      prop3:'We recommend pairing it with our Gabrielle Bralette and some heels for a super glam look. Can also be worn with a smart shirt or with a statement top.'
    },
    careInstructions: 'Dry Clean Only',
    composition:{
      prop1:"Outer Shell: 100% Silk Crepe",
      prop2:"Inner Shell: 100% Polyester"
    },
    cartIcon: trouser,
    price2:30000
  },
  {
    id: "003",
    name: "The Gabrielle Turtle Neck",
    price: "Rs 10,500",
    img1: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957729/1-47_stvkrx.jpg",
    img2: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957727/1-33_lqi5fw.jpg",
    img3: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957725/1-24_qefwvi.jpg",
    img4: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957724/1-19_imixrc.jpg",
    img5: "",
    ideation:{
      prop1:'An oversized sheer turtleneck with raglan sleeves, gathered at the cuffs and button closures at the back. Made from pure silk organza. Our pieces feel like a second skin. We carefully select fabrics that look and feel luxurious, creating a gorgeous ensemble and a comfortable feel.',
      prop2:"When Gabrielle (Coco) Chanel began designing women's wear she created something revolutionary. She redefined what it means to be sexy. We aim to create pieces that make you look beautiful while still being comfortable.",
      prop3:'Pair this piece with our Gabrielle Bralette for an extra layer. Show some skin without actually revealing skin.'
    },    
    careInstructions: 'Dry Clean Only',
    composition:{
      prop1:"Outer Shell: 100% Silk Organza",
      prop2:""
    },
    cartIcon: top,
    price2:10500
  },
  {
    id: "004",
    name: "The Jane Shirt",
    price: "Rs 20,000",
    img1: " https://res.cloudinary.com/dmprrczfn/image/upload/v1677957721/1-10_j0yvuh.jpg",
    img2: "",
    img3: "",
    img4: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957730/1-49_sxjikr.jpg",
    img5: "",
    ideation:{
      prop1:'Features a high neck broad collar. Oversized fit with longer sleeves and wide cuffs. You can never go wrong with a classic piece like this. Made from pure silk crepe. Silk covered buttons for that extra special touch. A good silk shirt is a wardrobe staple.',
      prop2:'Wear it buttoned up to the office or drop the neckline for a more dressy feel.',
      prop3:'We recommend pairing this look with our Jane Silk Skirt or our Gabrielle Trousers.'
    },
    careInstructions: 'Dry Clean Only',
    composition:{
      prop1:"Outer Shell: 100% Silk Crepe",
      prop2:""
    },
    cartIcon: shirt,
    price2:20000
  },
  {
    id: "005",
    name: "The Jane Skirt",
    price: "Rs 23,000",
    img1: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957724/1-32_hlp3x3.jpg",
    img2: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956784/1-27_ea73iw.jpg",
    img3: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956788/2-33_lqawut.jpg",
    img4: "",
    img5: "",
    ideation:{
      prop1:'Sexy to us doesn’t mean the show of skin. To be sexy is to be confident, graceful and comfortable in your own skin. With this philosophy we bring to you a classic A-Line Skirt. A wardrobe staple. And just the right piece that can mix both comfort and sophistication.',
      prop2:'A classic, simple A -line shape, cut along the bias with a delicate waist band. Your vacation must have, ensuring you look elevated even on those long sightseeing trips.',
      prop3:'Pulling from the many characters by Jane Austen. To us this piece radiates elegance. Just like Jane’s women, this look isn’t over the top. It’s simple yet has a certain charm to it. We believe it’s the perfect vacation piece. Stoll through the town, visit a museum, sight see, and more with a piece so comfortable yet so stunning. This one’s a no brainer.'
    },
    careInstructions: 'Dry Clean Only',
    composition:{
      prop1:"Outer Shell: 100% Silk",
      prop2:""
    },
    cartIcon: skirt,
    price2:23000

  },
  {
    id: "006",
    name: "The Marilyn Gown",
    price: "Rs 50,000",
    img1: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956786/1-20_kdmwjz.jpg",
    img2: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956787/2-24_fchj9o.jpg",
    img3: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957718/1-6_hrcb0b.jpg",
    img4: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957732/2-3_em7bvc.jpg",
    img5: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956787/1-37_tdqwn3.jpg",
    ideation:{
      prop1:"A sex symbol during her time, the inspiration for this dress came from her infamous 'Happy Birthday' dress. Marilyn wore a sheath dress that made her appear naked at Mr. John F. Kennedy's birthday.",
      prop2:"Inspired by the same, the colour has been chosen to create the impression of a sculpted nude body without actually having to be nude.",
      prop3:"We aim at creating fierce and bold looks without having to reveal skin at all. To strike a balance between elegance and sexy. This dress accomplishes of our diligent endeavours."
    },
    careInstructions: 'Dry Clean Only',
    composition:{
      prop1:"Outer Shell: 100% Silk",
      prop2:"Inner Shell:100% Polyester"
    },
    cartIcon: dress,
    price2:50000
  },
] as const;


export const sizeChartData = [
  {
    UK: "6",
    USA: "2",
    Bust: "33''",
    Waist: "24''",
    Hip: "37''",
  },
  {
    UK: "8",
    USA: "4",
    Bust: "35''",
    Waist: "26''",
    Hip: "38.5''",
  },
  {
    UK: "10",
    USA: "6",
    Bust: "36.5''",
    Waist: "28''",
    Hip: "39''",
  },
  {
    UK: "12",
    USA: "8",
    Bust: "38''",
    Waist: "30''",
    Hip: "42''",
  },
  {
    UK: "14",
    USA: "10",
    Bust: "39''",
    Waist: "32''",
    Hip: "43''",
  },
  {
    UK: "16",
    USA: "10",
    Bust: "41''",
    Waist: "34''",
    Hip: "45''",
  },
  {
    UK: "18",
    USA: "14",
    Bust: "43''",
    Waist: "36''",
    Hip: "47''",
  },
] as const;



