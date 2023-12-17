import bralette from '../public/assets/Bralette.png'
import trouser from '../public/assets/Trouser.png'
import shirt from '../public/assets/Shirt.png'
import skirt from '../public/assets/Skirt.png'
import dress from '../public/assets/Dress.png'
import top from '../public/assets/Top.png'

export const videoSrcDesktop =
  "https://res.cloudinary.com/dmprrczfn/video/upload/v1696447239/vdcsi03nc5zymbnlc2kw.mp4";

export const videoSrcMobile = "https://res.cloudinary.com/dmprrczfn/video/upload/v1698135799/kuqwr0wohlykwuk43qwv.mp4"


export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Products",
    hash: "#Products",
  },
  {
    name: "About",
    hash: "#about",
  },
] as const;


export const productData = [
  {
    id: "001",
    name: "The Gabrielle Bralette",
    price: "Rs 7,700",
    images:[
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957718/1-7_kiegx1.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957718/1-3_aclwgi.jpg",
    ],
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
    images:[
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677958117/1-34_2_xu3pea.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957721/1-13_hjdbpd.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957724/1-15_jh7gxk.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957731/1-52_n6zhdv.jpg",
    ],
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
    images:[
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957729/1-47_stvkrx.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957727/1-33_lqi5fw.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957725/1-24_qefwvi.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957724/1-19_imixrc.jpg",
    ],
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
    images:[
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957721/1-10_j0yvuh.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957730/1-49_sxjikr.jpg",
    ],
    img1: "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957721/1-10_j0yvuh.jpg",
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
    images:[
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957724/1-32_hlp3x3.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956784/1-27_ea73iw.jpg",
      "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956788/2-33_lqawut.jpg",
    ],
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
    images:[
            "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956786/1-20_kdmwjz.jpg",
            "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956787/2-24_fchj9o.jpg",
            "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957718/1-6_hrcb0b.jpg",
            "https://res.cloudinary.com/dmprrczfn/image/upload/v1677957732/2-3_em7bvc.jpg",
            "https://res.cloudinary.com/dmprrczfn/image/upload/v1677956787/1-37_tdqwn3.jpg",
          ],
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

export const OrderProcessing = "Once your order has been confirmed our team will begin production. All our pieces are made to order and made to measure meaning that we will construct a piece entirely from scratch to fit your body perfectly. This process will  take 7 to 10 working days, after which we will wrap and ship it to your given postal address." as const

export const ReturnsExchange = `Refund Policy
We do not accept any cancellations on an order or orders once they are fully processed from your side, which includes a payment token (in case of customized or orders directly through instagram, email or phone) or the full payment when ordered through the website. Hence Rhea Vania is not liable to refund any token or payment back to their clients in case of a cancellation.
There is no return policy as each piece is customized and made to order. Products that are on sale are not subject to return or refund. However, alterations are possible but will be chargeable, if at all the particular piece has scope for it technically.
A product once delivered cannot be returned. However, in the following scenarios it is possible to exchange the product; in a duration of 2 to 3 working days from the day you receive the product :</br>
Manufacturing Fault
Whilst we maintain the strictest quality control at Rhea Vania, if there is a product defect for which we are responsible then we can take the item back and provide you with a new one within two week’s time. 
Note: Color variation cannot be subject to rejection of merchandise or minor dyeing/ color bleeding since each fabric may respond differently and how you take care of it. All our garments and products are dry clean only. Please refer to the care instructions under each product while placing your order.
Alterations
If you have placed an order with customized size and it doesn’t fit you as per your requirement we can offer to alter it for a perfect fit. You can send us an email at  help@rheavania.com  in case of a sizing issue. Depending on where you live and the nature of the alteration required, the time taken for your exchanged product to reach you may vary. 
Damages and issues
Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item so that we can evaluate the issue and make it right.
To start an exchange, you can either call our number +91 84519 65111 or Email us at help@rheavania.com  within 1 day from the date of delivery. Ensure your items are securely wrapped and don’t get damaged in transit. www.saimindia.com cannot be held responsible for any items lost in the post. It is advisable that you send any item for return to us by a registered courier company. Please keep all tracking details of the parcel until we confirm receipt of it. Items sent back to us without first requesting an exchange will not be accepted. All couriers of this nature will be borne by the customer themselves. Saim India will only bear the expenses of the transaction after the repair of the merchandise. Pieces bought in sale/ special pricing are non-refundable and non-returnable. 
Note: To be eligible for an exchange, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
Product Information
Rhea Vania has made every effort to display as accurately as possible the colors of our products that appear on the Site. Further, Rhea Vania has ensured that the measurements, information, and description for products furnished on the site are best calculated and stated to accuracy and true to its dimensions. However, due to the inherent characteristics of certain materials and that each piece is cut and made individually, actual measurements of individual items might vary slightly. Slight marks and color/print variations should not be considered as a fault, but they are inherent characteristics of the product.
You can always contact us for any return question at help@rheavania.com` as const

export const Shipping = "The estimated delivery time will be between 12-14 working days, depending on the delivery address." as const 

export const TermsAndConditions = `OVERVIEW 
This website is operated by Rhea Vania. Throughout the site, the terms “we”, “us” and “our” refer to Rhea Vania. Rhea Vania offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. 

By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. 

Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. 

Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes. 

Our store is hosted on Vercel.com They provide us with the online e-commerce platform that allows us to sell our products and services to you. 

SECTION 1 - ONLINE STORE TERMS 
By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. 
You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). 
You must not transmit any worms or viruses or any code of a destructive nature. 
A breach or violation of any of the Terms will result in an immediate termination of your Services. 

SECTION 2 - GENERAL CONDITIONS 
We reserve the right to refuse service to anyone for any reason at any time. 
You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. 
You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. 
The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms. 

SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION 
We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. 
This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site. 

SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES 
Prices for our products are subject to change without notice. 
We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. 
We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service. 

SECTION 5 - PRODUCTS OR SERVICES (if applicable) 
Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. 
We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. 
We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited. 
We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected. 

SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION 
We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors. 

You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed. 

For more detail, please review our Returns Policy. 

SECTION 7 - OPTIONAL TOOLS 
We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. 
You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools. 
Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s). 
We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service. 

SECTION 8 - THIRD-PARTY LINKS 
Certain content, products and services available via our Service may include materials from third-parties. 
Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties. 
We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party. 

SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS 
If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. 
We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service. 
You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party. 

SECTION 10 - PERSONAL INFORMATION 
Your submission of personal information through the store is governed by our Privacy Policy. 

SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS 
Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order). 
We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated. 

SECTION 12 - PROHIBITED USES 
In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. 

SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY 
We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. 
We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. 
You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. 
You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. 
In no case shall Rhea Vania, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law. 

SECTION 14 - INDEMNIFICATION 
You agree to indemnify, defend and hold harmless Rhea Vania and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party. 

SECTION 15 - SEVERABILITY 
In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions. 

SECTION 16 - TERMINATION 
The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. 
These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. 
If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof). 

SECTION 17 - ENTIRE AGREEMENT 
The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. 
These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). 
Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party. 

SECTION 18 - GOVERNING LAW 
These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India. 

SECTION 19 - CHANGES TO TERMS OF SERVICE 
You can review the most current version of the Terms of Service at any time at this page. 
We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes. 

SECTION 20 - CONTACT INFORMATION 
Questions about the Terms of Service should be sent to us at info@rheavania.com`