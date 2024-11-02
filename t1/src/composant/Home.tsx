interface Iprops {
nom: string[];
onClick?: (index:number) => {} | void;


}

const Home =( props: Iprops) =>{

    const list = props.nom.map((label,index)=>(<li  onClick = { ()  => {
        if(props.onClick) props.onClick(index); 
    } } >{label}</li>));

return <ul>{list}</ul>

}

export default Home;