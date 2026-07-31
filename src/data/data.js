import { thar,daro,makli,keenjhar,kot,rani,kirther,mohatta,keti} from "../assets"

const destinationTags=["All","Desert","Heritage","Port","Lake","Fort"]

const destinations=[
    {
        id:0,
        name:"Thar Desert",
        src:thar,
        region:"Tharparker",
        tag:"Desert"
    },
    {
        id:1,
        name:"Keti Bander",
        src:keti,
        region:"Thatta",
        tag:"Port"
    },
    {
        id:2,
        name:"Makli Necropolis",
        src:makli,
        region:"Makli",
        tag:"Heritage"
    },
    {
        id:3,
        name:"Keenjhar Lake",
        src:keenjhar,
        region:"Jhimpir",
        tag:"Lake"
    },
    {
        id:4,
        name:"Kot Digi Fort",
        src:kot,
        region:"Khairpur",
        tag:"Fort"
    },
    {
        id:5,
        name:"Ranikot Fort",
        src:rani,
        region:"Jamshoro",
        tag:"Fort"
    },
    {
        id:6,
        name:"Kirther Park",
        src:kirther,
        region:"Jamshoro",
        tag:"Wildlife"
    },
    {
        id:7,
        name:"Mohatta Palace",
        src:mohatta,
        region:"Karachi",
        tag:"Heritage"
    },
    {
        id:8,
        name:"Mohenjo Daro",
        src:daro,
        region:"Larkana",
        tag:"Heritage"
    },
]
const packageTags=["All","Heritage","Desert","Route","Wildlife","Coastal","Spiritual"]

const packages=[
   
    {
        id:0,
        tag:"Heritage",
        name:"Mohenjo Daro Day Trip",
        route:"Start -> Larkana -> Mohenjo Daro",
        time:"Half Day",
        person:"10 People",
        price:"Rs 4500"
    },
        {
        id:6,
        tag:"Desert",
        name:"Camel Safari at Nagarparkar",
        route:"Start -> Nagarparkar",
        time:"Half Day",
        person:"10 People",
        price:"Rs 4000"
    },
      {
        id:2,
        tag:"Route",
        name:"Along the Indus",
        route:"Start -> Sukkur -> Nawabshah",
        time:"3 Days / 2 Nights",
        person:"8 People",
        price:"Rs 18500"
    },
    {
        id:1,
        tag:"Heritage",
        name:"Ranikot Fort Expedition",
        route:"Start -> Sann -> Ranikot Fort",
        time:"Full Day",
        person:"10 People",
        price:"Rs 7500"
    },
   
    {
        id:3,
        tag:"Heritage",
        name:"Makli Necropolis & Thatta",
        route:"Start -> Thatta -> Makli",
        time:"Full Day",
        person:"10 People",
        price:"Rs 6000"
    },
   
    {
        id:4,
        tag:"Route",
        name:"Karachi to Sehwan Sharif",
        route:"Start -> Hyderabad -> Sehwan Sharif",
        time:"2 Days / 1 Night",
        person:"8 People",
        price:"Rs 14000"
    },
    {
        id:5,
        tag:"Route",
        name:"Thar Loop",
        route:"Start -> Mithi -> Nagarparkar -> Islamkot",
        time:"3 Days / 2 Nights",
        person:"8 People",
        price:"Rs 21000"
    },
    
    {
        id:7,
        tag:"Wildlife",
        name:"Kirthar Safari",
        route:"Start -> Kirthar National Park",
        time:"Full Day",
        person:"6 People",
        price:"Rs 8000"
    },
    {
        id:8,
        tag:"Wildlife",
        name:"Manchar Lake Boat Day",
        route:"Start -> Sehwan -> Manchar Lake",
        time:"Half Day",
        person:"10 People",
        price:"Rs 4000"
    },
        {
        id:9,
        tag:"Desert",
        name:"Thar Desert Camping Night",
        route:"Start -> Mithi -> Thar Desert",
        time:"2 Days / 1 Night",
        person:"10 People",
        price:"Rs 11500"
    },
    {
        id:10,
        tag:"Coastal",
        name:"Karachi Beach Hopper",
        route:"Start -> Clifton -> Sandspit",
        time:"Full Day",
        person:"10 People",
        price:"Rs 5000"
    },
    {
        id:11,
        tag:"Coastal",
        name:"Keti Bandar Sunset & Delta Ride",
        route:"Start -> Thatta -> Keti Bandar",
        time:"Full Day",
        person:"10 People",
        price:"Rs 7000"
    },
    {
        id:12,
        tag:"Spiritual",
        name:"Sehwan Sharif Dhamaal Night",
        route:"Start -> Sehwan Sharif",
        time:"Full Day",
        person:"10 People",
        price:"Rs 6500"
    },
    {
        id:13,
        tag:"Spiritual",
        name:"Bhit Shah Sufi Circuit",
        route:"Start -> Bhit Shah",
        time:"Full Day",
        person:"10 People",
        price:"Rs 5500"
    },
    {
        id:14,
        tag:"Spiritual",
        name:"Sufi Trail",
        route:"Start -> Sehwan Sharif -> Bhit Shah",
        time:"2 Days / 1 Night",
        person:"8 People",
        price:"Rs 13000"
    },

]

function filterPackages({name,from,to,tag,route}){
    return packages.filter((element)=>{
        if(tag=="All" || element.tag==tag) return true;
        return false 
    }).filter((element)=>{
        if(name==' '||name=='->') return false
        else if(name==""){
            return true;
        }
        else{
            const lower=element.name.toLowerCase()
            if(lower.includes(name.toLowerCase())) return true
        }
        return false;
    }).filter((element)=>{
        if(route==' '||route=='->') return false
        else if(route==""){
            return true;
        }
        else{
            const lower=element.route.toLowerCase()
            if(lower.includes(route.toLowerCase())) return true
        }
        return false;

    }).filter((element)=>{
        const price=Number(element.price.split(' ')[1])
        if(to){
            if(price>Number(to)) return false
        }
        if(from){
            if(price<Number(from)) return false
        }
        return true
    })
}

export {destinations, packages,destinationTags,packageTags,filterPackages}