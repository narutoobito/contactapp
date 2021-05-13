const No_Contacts=3;

const first_names=["David","John","Drew","Paul","James","Christopher","Randy","Steve","Scott","Mark","Robert","Kevin","Michael","Allan Jones","Brian","Ryan","Simon","Matt","Keith","Daniel","Anthonio","Roman","Seth","Jon","Johny","Tomaiso"];

const last_names=["Lee","Black","Cena","Styles","Daniels","Hunter","Orton","Mizenin","Wyatt","Cold","Reigns","Rollins","Ambrose","Moxley","Bucks","jr","Omega","Page","Nakamura","Gargano","Chiampa","Riddle"];

const ran=(max,min=0)=> Math.floor(Math.random()*(max-min+1)+min);

const generateName=()=>`${first_names[ran(first_names.length)]} ${last_names[ran(last_names.length)]}`;

const generatePhoneNo=()=>`${ran(999)}-${ran(999)}-${ran(9999)}`;

const createContacts=()=>({name: generateName(), phone: generatePhoneNo()})

export const compareNames=(contact1,contact2)=>contact1.name>contact2.name;

const addkeys=( val,key)=> ({key , ...val});

export default Array.from({length: No_Contacts}, createContacts).map(addkeys);