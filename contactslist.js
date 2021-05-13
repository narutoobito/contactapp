import React from 'react';
import {Text,SectionList} from 'react-native';
import Row from './Row.js'
import propType from 'prop-types'


const ContactsList=props=>{
const contactsByLetter=props.contacts.reduce((obj, contact)=>
{
const firstLetter=contact.name[0].toUpperCase();
return(
{
...obj,
[firstLetter]: [...(obj[firstLetter]||[]),contact]
}
)
},{}
)

const sections= Object.keys(contactsByLetter).sort().map(letter=>(
{
title: letter,
data: contactsByLetter[letter],
}
))
return(
<SectionList
        renderItem={obj=> <Row {...(obj.item)} onSelect={props.onSelectContact}/>}
        renderSectionHeader={obj=> (<Text>{obj.section.title}</Text>)}
        sections={sections}
        />
)
}

propType.ContactsList={

section: propType.array,
}

export default ContactsList;