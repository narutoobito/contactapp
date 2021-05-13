export const fetchUser=async ()=>
{
try{const response= await fetch('https://randomuser.me/api/?results=50')
const data= await response.json();
const results=await data.results;
return results.map(contact=>processContact(contact));
}catch(err){console.error(err)};

}

const processContact=contact=>
({
name: `${contact.name.first} ${contact.name.last}`,
phone: contact.phone,
})
